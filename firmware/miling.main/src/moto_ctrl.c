
#include "moto_ctrl.h"
#include "hal.h"
#include "eeprom_ctrl.h"

#define TMR_FREQ 100000 //140625
#define HIGH_CURRENT_WAIT 50

#define SLEEP_PORT GPIOA
#define SLEEP_PAD  6

#define RESET_PORT GPIOA
#define RESET_PAD  7

#define ENABLE_PORT GPIOB
#define ENABLE_PAD  10

#define DIR_0_PORT GPIOB
#define DIR_0_PAD  11

#define DIR_1_PORT GPIOA
#define DIR_1_PAD  4

#define STEP_0_PORT GPIOB
#define STEP_0_PAD  0

#define STEP_1_PORT GPIOA
#define STEP_1_PAD  1

#define HIGH_CURRENT_PORT GPIOB
#define HIGH_CURRENT_PAD  13

#define HALL_0_PORT GPIOB
#define HALL_0_PAD  12

#define HALL_1_PORT GPIOA
#define HALL_1_PAD  5

#define PWR_OFF_PORT GPIOB
#define PWR_OFF_PAD  8

// External motors on additional board.

// High current is controlled via I2C.
//#define HIGH_CURRENT_EXT_PORT GPIOA
//#define HIGH_CURRENT_EXT_PAD  2

#define DIR_2_PORT GPIOA
#define DIR_2_PAD  8

#define DIR_3_PORT GPIOB
#define DIR_3_PAD  15

#define STEP_2_PORT GPIOB
#define STEP_2_PAD  14

#define STEP_3_PORT GPIOB
#define STEP_3_PAD  1

#define HALL_2_PORT GPIOA
#define HALL_2_PAD  2

#define HALL_3_PORT GPIOA
#define HALL_3_PAD  3

static int nsqrt( int arg );


static void setMotoSleep( int en );
static void setMotoReset( int en );
static void setMotoEnable( int en );
static void setMoto0Dir( int dir );
static void setMoto1Dir( int dir );
static void setMoto2Dir( int dir );
static void setMoto3Dir( int dir );
static void setHighCurrent( int en );

static void saveEmergencyData( void );

typedef struct
{
    int     pos;
    int     sensorPos;

    int     steps_left;
    int     period;
    uint8_t activated : 1; // If sensor was activated during last transition.
    uint8_t in_motion : 1; // If motor is in motion at the moment.
    uint8_t dir : 1; // Dir pad level.
    uint8_t high: 1; // Step pad level.
    BinarySemaphore sem; // Finished indication.
} TMotor;

static TMotor motor[4];

static void adjustPosition( TMotor * moto );

/*
static int moto_vmin = 300,
        moto_vmax = 2000,
        moto_acc = 2000;
static int steps_per_rev = 5120;
*/

static int moto_vmin = 300*8,
        moto_vmax = 1000*8,
        moto_acc = 700*8;
static int steps_per_rev = 5120*8;



static void extHall0( EXTDriver * extp, expchannel_t channel );
static void extHall1( EXTDriver * extp, expchannel_t channel );
static void extHall2( EXTDriver * extp, expchannel_t channel );
static void extHall3( EXTDriver * extp, expchannel_t channel );
static void extPowerOff( EXTDriver * extp, expchannel_t channel );

static void adjustPosition( TMotor * moto )
{
    // Choose dir as well because sensor profile has the following shape: ---|_|---. E.i. falling edge position depends on motion direction.
    if ( ( moto->activated ) && ( moto->dir > 0 ) )
    {
        moto->pos -= moto->sensorPos;
        moto->sensorPos = 0;
    }
}


static void extHall0( EXTDriver * extp, expchannel_t channel )
{
    (void)extp;
    (void)channel;
    motor[0].activated = 1;
    motor[0].sensorPos = motor[0].pos;
}

static void extHall1( EXTDriver * extp, expchannel_t channel )
{
    (void)extp;
    (void)channel;
    motor[1].activated = 1;
    motor[1].sensorPos = motor[1].pos;
}

static void extHall2( EXTDriver * extp, expchannel_t channel )
{
    (void)extp;
    (void)channel;
    motor[2].activated = 1;
    motor[2].sensorPos = motor[2].pos;
}

static void extHall3( EXTDriver * extp, expchannel_t channel )
{
    (void)extp;
    (void)channel;
    motor[3].activated = 1;
    motor[3].sensorPos = motor[3].pos;
}

static void extPowerOff( EXTDriver * extp, expchannel_t channel )
{
    (void)extp;
    (void)channel;

    // Halt all drivers.
    setMotoEnable( -1 );
    chSysLockFromIsr();
        // Invoke emergency EEPROM write.
        eepromEmergencyI();
        // Stop all timers.
        gptStopTimerI( &GPTD1 );
        gptStopTimerI( &GPTD2 );
        gptStopTimerI( &GPTD3 );
        gptStopTimerI( &GPTD4 );
    chSysUnlockFromIsr();
}


static const EXTConfig extcfg = {
  {
   {EXT_CH_MODE_DISABLED, NULL},
   {EXT_CH_MODE_DISABLED, NULL},
   {EXT_CH_MODE_DISABLED, NULL},
   {EXT_CH_MODE_DISABLED, NULL},
   {EXT_CH_MODE_DISABLED, NULL},
   {EXT_CH_MODE_FALLING_EDGE | EXT_CH_MODE_AUTOSTART, extHall1 },
   {EXT_CH_MODE_DISABLED, NULL},
   {EXT_CH_MODE_DISABLED, NULL},
   {EXT_CH_MODE_FALLING_EDGE | EXT_CH_MODE_AUTOSTART, extPowerOff },
   {EXT_CH_MODE_DISABLED, NULL},
   {EXT_CH_MODE_DISABLED, NULL},
   {EXT_CH_MODE_DISABLED, NULL},
   {EXT_CH_MODE_FALLING_EDGE | EXT_CH_MODE_AUTOSTART, extHall0 },
   {EXT_CH_MODE_DISABLED, NULL},
   {EXT_CH_MODE_DISABLED, NULL},
   {EXT_CH_MODE_DISABLED, NULL},
  },
  EXT_MODE_EXTI(0,
                0,
                0,
                0,
                0,
                EXT_MODE_GPIOA,
                0,
                0,
                EXT_MODE_GPIOB,
                0,
                0,
                0,
                EXT_MODE_GPIOB,
                0,
                0,
                0)
};



static void timerMotor0( GPTDriver *gptp );
static void timerMotor1( GPTDriver *gptp );
static void timerMotor2( GPTDriver *gptp );
static void timerMotor3( GPTDriver *gptp );

static const GPTConfig gpt1cfg = {
  TMR_FREQ,
  timerMotor0
};

static const GPTConfig gpt2cfg = {
  TMR_FREQ,
  timerMotor1
};

static const GPTConfig gpt3cfg = {
  TMR_FREQ,
  timerMotor2
};

static const GPTConfig gpt4cfg = {
  TMR_FREQ,
  timerMotor3
};



#define MOTOR_QUEUE_SZ 3

#define MOTOR_BUFFER_SZ ( MOTOR_QUEUE_SZ * sizeof( int8_t ) * 4 ) // 4 motors, up to 127 steps each in each direction.


InputQueue  motor_queue;
uint8_t     motor_queue_buffer[ MOTOR_BUFFER_SZ ];

InputQueue  motor_stop_queue;
uint8_t     motor_stop_queue_buffer[ MOTOR_QUEUE_SZ ];

static WORKING_AREA( waMotor, 2048 );
static msg_t motorThread( void *arg );

void motorInit( void )
{
    // Init timers for step control.
    gptStart( &GPTD1, &gpt1cfg );
    gptStart( &GPTD2, &gpt2cfg );
    gptStart( &GPTD3, &gpt3cfg );
    gptStart( &GPTD4, &gpt4cfg );

    // Step pads.
    palClearPad( STEP_0_PORT,  STEP_0_PAD );
    palSetPadMode( STEP_0_PORT, STEP_0_PAD, PAL_MODE_OUTPUT_PUSHPULL );
    palClearPad( STEP_1_PORT,  STEP_1_PAD );
    palSetPadMode( STEP_1_PORT, STEP_1_PAD, PAL_MODE_OUTPUT_PUSHPULL );
    palClearPad( STEP_2_PORT,  STEP_2_PAD );
    palSetPadMode( STEP_2_PORT, STEP_2_PAD, PAL_MODE_OUTPUT_PUSHPULL );
    palClearPad( STEP_3_PORT,  STEP_3_PAD );
    palSetPadMode( STEP_3_PORT, STEP_3_PAD, PAL_MODE_OUTPUT_PUSHPULL );
    // Dir0 and Dir1.
    palSetPadMode( DIR_0_PORT, DIR_0_PAD, PAL_MODE_OUTPUT_PUSHPULL );
    palSetPadMode( DIR_1_PORT, DIR_1_PAD, PAL_MODE_OUTPUT_PUSHPULL );
    palSetPadMode( DIR_2_PORT, DIR_2_PAD, PAL_MODE_OUTPUT_PUSHPULL );
    palSetPadMode( DIR_3_PORT, DIR_3_PAD, PAL_MODE_OUTPUT_PUSHPULL );
    // Init GPIO ~sleep~, ~enable~, ~reset~, ~high_current~.
    palClearPad( ENABLE_PORT, ENABLE_PAD );
    palClearPad( SLEEP_PORT,  SLEEP_PAD );
    palClearPad( RESET_PORT,  RESET_PAD );
    palSetPad(  HIGH_CURRENT_PORT, HIGH_CURRENT_PAD );
    palSetPadMode( ENABLE_PORT, ENABLE_PAD, PAL_MODE_OUTPUT_PUSHPULL );
    palSetPadMode( SLEEP_PORT,  SLEEP_PAD,  PAL_MODE_OUTPUT_PUSHPULL );
    palSetPadMode( RESET_PORT,  RESET_PAD, PAL_MODE_OUTPUT_PUSHPULL );
    palSetPadMode( HIGH_CURRENT_PORT, HIGH_CURRENT_PAD, PAL_MODE_OUTPUT_PUSHPULL );

    // Init external interrupts.
    // Hall_0.
    palSetPadMode( GPIOA, 5, PAL_MODE_INPUT );
    // Power off.
    palSetPadMode( GPIOB, 8, PAL_MODE_INPUT );
    // Hall_1.
    palSetPadMode( GPIOB, 12, PAL_MODE_INPUT );

    chIQInit( &motor_queue,      motor_queue_buffer,      MOTOR_BUFFER_SZ, 0 );
    chIQInit( &motor_stop_queue, motor_stop_queue_buffer, MOTOR_QUEUE_SZ, 0 );

    // Initialize external interrupt input here.
    palSetPadMode( HALL_0_PORT,  HALL_0_PAD, PAL_MODE_INPUT );
    palSetPadMode( HALL_1_PORT,  HALL_1_PAD, PAL_MODE_INPUT );
    palSetPadMode( HALL_2_PORT,  HALL_2_PAD, PAL_MODE_INPUT );
    palSetPadMode( HALL_3_PORT,  HALL_3_PAD, PAL_MODE_INPUT );
    palSetPadMode( PWR_OFF_PORT, PWR_OFF_PAD, PAL_MODE_INPUT );
    extStart(&EXTD1, &extcfg);



    chThdCreateStatic( waMotor, sizeof(waMotor), NORMALPRIO, motorThread, NULL );

    // Turn drivers on.
    setMotoReset( 1 );
    setMotoSleep( -1 );
    setMotoEnable( 1 );

    int i;
    for ( i=0; i<4; i++ )
    {
        motor[i].pos         = 0;
        motor[i].sensorPos   = 0;
        motor[i].steps_left  = 0;
        motor[i].period      = 0;
        motor[i].activated   = 0;
        motor[i].in_motion   = 0;
        motor[i].dir         = 0;
        chBSemInit( &(motor[i].sem), FALSE );
    }

    //eepromReadMotorPos( &(motor[0].pos), &(motor[1].pos) );
}

static msg_t motorThread( void *arg )
{
    (void)arg;
    while ( 1 )
    {
        int8_t dist[4];
        uint8_t * args = (uint8_t *)( &dist );
        args[0] = chIQGet( &motor_queue );
        args[1] = chIQGet( &motor_queue );
        args[2] = chIQGet( &motor_queue );
        args[3] = chIQGet( &motor_queue );

        // Choose direction and steps number.
        int i;
        for ( i=0; i<4; i++ )
        {
        	motor[i].dir = (dist[i] > 0) ? 1 : 0;
        	motor[i].steps_left = (dist[i]>0) ? dist[i] : (-dist[i]);
        	motor[i].high = 1; // It will be activated for the first time lower in the code but not in timer ISR.
        	// Set rotation direction.
        	setMoto0Dir( motor[i].dir );
        }
    	// Calculate distance in steps.
    	int L = motor[0].steps_left * motor[0].steps_left +
    			motor[1].steps_left * motor[1].steps_left +
				motor[2].steps_left * motor[2].steps_left +
				motor[3].steps_left * motor[3].steps_left;
    	L = nsqrt( L );
    	// For each motor calculate period.
    	// Total movement time is.
    	int T = (int)( (uint64_t)L * (uint64_t)TMR_FREQ / (uint64_t)moto_vmin );
    	// Each period is.
    	for (i=0; i<4; i++)
    	{
    		// t[i] = T / dist[i] / 2; // Over 2 is because I hold step pad high half time.
    		motor[i].period = T/motor[i].steps_left/2;
    		// Just limit it to a reasonable value.
    		motor[i].period = (motor[i].period > 2) ? motor[i].period : 2;
    	}

        // Set high current.
        setHighCurrent( 1 );
        chThdSleepMilliseconds( HIGH_CURRENT_WAIT );

        // Make steps for the first time outside of timers.
      	if ( motor[0].steps_left > 0 )
      		palSetPad( STEP_0_PORT, STEP_0_PAD );
      	if ( motor[1].steps_left > 0 )
      		palSetPad( STEP_1_PORT, STEP_1_PAD );
      	if ( motor[2].steps_left > 0 )
      		palSetPad( STEP_2_PORT, STEP_2_PAD );
      	if ( motor[3].steps_left > 0 )
      		palSetPad( STEP_3_PORT, STEP_3_PAD );

      	// Timers will change steps quantity.
      	// So remember steps number to use them later.
      	int steps[4];
      	for ( i=0; i<4; i++ )
      		steps[i] = motor[i].steps_left;

        // Turn timers on.
      	if ( motor[0].steps_left > 0 )
      		gptStartOneShot( &GPTD1, motor[0].period );
      	if ( motor[1].steps_left > 0 )
      		gptStartOneShot( &GPTD2, motor[1].period );
      	if ( motor[2].steps_left > 0 )
      		gptStartOneShot( &GPTD3, motor[2].period );
      	if ( motor[3].steps_left > 0 )
      		gptStartOneShot( &GPTD4, motor[3].period );

       	// Engage waiting in binary semaphores.
      	if ( steps[0] > 0 )
      		chBSemWait( &(motor[0].sem) );
      	if ( steps[1] > 0 )
      		chBSemWait( &(motor[1].sem) );
      	if ( steps[2] > 0 )
      		chBSemWait( &(motor[2].sem) );
      	if ( steps[3] > 0 )
      		chBSemWait( &(motor[3].sem) );

      	// Go idle if there are no more commands.
        chSysLock();
            int sz = chQSpaceI( &motor_queue );
            if ( sz < 4 )
            {
            	setHighCurrent( -1 );
            	saveEmergencyData();
            }
        chSysUnlock();

    }
    return 0;
}

static void timerMotor0( GPTDriver *gptp )
{
    (void)gptp;
    TMotor * moto = &(motor[0]);
    if ( moto->high )
    {
    	// Start timer.
    	chSysLockFromIsr();
    		gptStartOneShotI( &GPTD1, moto->period );
    	chSysUnlockFromIsr();
    	// Clear pad.
    	palClearPad( STEP_0_PORT, STEP_0_PAD );
    	moto->high = 0;
    	moto->steps_left -= 1;
    }
    else
    {
		if ( moto->steps_left > 0 )
		{
			chSysLockFromIsr();
				gptStartOneShotI( &GPTD1, moto->period );
			chSysUnlockFromIsr();
			palSetPad( STEP_0_PORT, STEP_0_PAD );
			moto->high = 1;
		}
		else
		{
			chSysLockFromIsr();
				chBSemSignalI( &(moto->sem) );
			chSysUnlockFromIsr();
		}
    }
}

static void timerMotor1( GPTDriver *gptp )
{
    (void)gptp;
    TMotor * moto = &(motor[1]);
    if ( moto->high )
    {
    	// Start timer.
    	chSysLockFromIsr();
    		gptStartOneShotI( &GPTD2, moto->period );
    	chSysUnlockFromIsr();
    	// Clear pad.
    	palClearPad( STEP_1_PORT, STEP_1_PAD );
    	moto->high = 0;
    	moto->steps_left -= 1;
    }
    else
    {
		if ( moto->steps_left > 0 )
		{
			chSysLockFromIsr();
				gptStartOneShotI( &GPTD2, moto->period );
			chSysUnlockFromIsr();
			palSetPad( STEP_1_PORT, STEP_1_PAD );
			moto->high = 1;
		}
		else
		{
			chSysLockFromIsr();
				chBSemSignalI( &(moto->sem) );
			chSysUnlockFromIsr();
		}
    }
}

static void timerMotor2( GPTDriver *gptp )
{
    (void)gptp;
    TMotor * moto = &(motor[2]);
    if ( moto->high )
    {
    	// Start timer.
    	chSysLockFromIsr();
    		gptStartOneShotI( &GPTD3, moto->period );
    	chSysUnlockFromIsr();
    	// Clear pad.
    	palClearPad( STEP_2_PORT, STEP_2_PAD );
    	moto->high = 0;
    	moto->steps_left -= 1;
    }
    else
    {
		if ( moto->steps_left > 0 )
		{
			chSysLockFromIsr();
				gptStartOneShotI( &GPTD3, moto->period );
			chSysUnlockFromIsr();
			palSetPad( STEP_2_PORT, STEP_2_PAD );
			moto->high = 1;
		}
		else
		{
			chSysLockFromIsr();
				chBSemSignalI( &(moto->sem) );
			chSysUnlockFromIsr();
		}
    }
}

static void timerMotor3( GPTDriver *gptp )
{
    (void)gptp;
    TMotor * moto = &(motor[3]);
    if ( moto->high )
    {
    	// Start timer.
    	chSysLockFromIsr();
    		gptStartOneShotI( &GPTD4, moto->period );
    	chSysUnlockFromIsr();
    	// Clear pad.
    	palClearPad( STEP_3_PORT, STEP_3_PAD );
    	moto->high = 0;
    	moto->steps_left -= 1;
    }
    else
    {
		if ( moto->steps_left > 0 )
		{
			chSysLockFromIsr();
				gptStartOneShotI( &GPTD4, moto->period );
			chSysUnlockFromIsr();
			palSetPad( STEP_3_PORT, STEP_3_PAD );
			moto->high = 1;
		}
		else
		{
			chSysLockFromIsr();
				chBSemSignalI( &(moto->sem) );
			chSysUnlockFromIsr();
		}
    }
}




/*
void motorMove( int index, int pos )
{
    uint8_t * arg = (uint8_t *)(&pos);
    chSysLock();
    	int ind = (index > 0) ? 1 : 0;
    	motor[ind].activated = 0;
    	motor[ind].in_motion = 1;
        InputQueue * motor_queue = ( index > 0 ) ? (&motor1_queue) : (&motor0_queue);
        chIQPutI( motor_queue, arg[0] );
        chIQPutI( motor_queue, arg[1] );
        chIQPutI( motor_queue, arg[2] );
        chIQPutI( motor_queue, arg[3] );
    chSysUnlock();
}
*/




void motorSetPos( int index, int pos )
{
    int ind = (index > 0) ? 1 : 0;
    chSysLock();
        motor[ind].pos = pos;
    chSysUnlock();
}

void motorSetParams( int vmin, int vmax, int acc )
{
    chSysLock();
        moto_vmin = vmin;
        moto_vmax = vmax;
        moto_acc  = acc;
    chSysUnlock();
}

void motorSetRevSteps( int cnt )
{
    steps_per_rev = cnt;
}

void motorSensorData( int index, int * activated, int * pos )
{
    int ind = (index > 0) ? 1 : 0;
    TMotor * m = &(motor[ind]);
    chSysLock();
        if ( pos )
            *pos = m->sensorPos;
        if ( activated )
            *activated = m->activated;
    chSysUnlock();
}

int motorInMotion( int index, int * pos )
{
    int ind = (index > 0) ? 1 : 0;
    TMotor * m = &(motor[ind]);
    chSysLock();
        int res = m->in_motion;
        if ( pos )
            *pos = m->pos;
    chSysUnlock();
    return res;
}

int motorPos( int index )
{
    int ind = (index > 0) ? 1 : 0;
    TMotor * m = &(motor[ind]);
    chSysLock();
        int res = m->pos;
    chSysUnlock();
    return res;
}

void motorStop( void )
{
    InputQueue * motor_queue = &motor_stop_queue;
    chSysLock();
        chIQPutI( motor_queue, 0 );
    chSysUnlock();
}

void motorMove( int8_t * s )
{
	chSysLock();
		int sz = chQSpaceI( &motor_queue );
		if ( sz >= 4 )
		{
			uint8_t v = *(uint8_t *)(&s[0]);
			chIQPutI( &motor_queue, v );

			v = *(uint8_t *)(&s[1]);
			chIQPutI( &motor_queue, v );

			v = *(uint8_t *)(&s[2]);
			chIQPutI( &motor_queue, v );

			v = *(uint8_t *)(&s[3]);
			chIQPutI( &motor_queue, v );

	    	motor[0].activated = 0;
	    	motor[0].in_motion = 1;

	    	motor[1].activated = 0;
	    	motor[1].in_motion = 1;

	    	motor[2].activated = 0;
	    	motor[2].in_motion = 1;

	    	motor[3].activated = 0;
	    	motor[3].in_motion = 1;
		}
	chSysUnlock();
}








static void setMotoSleep( int en )
{
    if ( en > 0 )
        palClearPad( SLEEP_PORT, SLEEP_PAD );
    else
        palSetPad( SLEEP_PORT, SLEEP_PAD );
}

static void setMotoReset( int en )
{
    if ( en > 0 )
        palClearPad( RESET_PORT, RESET_PAD );
    else
        palSetPad( RESET_PORT, RESET_PAD );
}

static void setMotoEnable( int en )
{
    if ( en > 0 )
        palClearPad( ENABLE_PORT, ENABLE_PAD );
    else
        palSetPad( ENABLE_PORT, ENABLE_PAD );
}

static void setMoto0Dir( int dir )
{
    if ( dir > 0 )
        palSetPad( DIR_0_PORT, DIR_0_PAD );
    else
        palClearPad( DIR_0_PORT, DIR_0_PAD );
}

static void setMoto1Dir( int dir )
{
    if ( dir > 0 )
        palSetPad( DIR_1_PORT, DIR_1_PAD );
    else
        palClearPad( DIR_1_PORT, DIR_1_PAD );
}

static void setMoto2Dir( int dir )
{
    if ( dir > 0 )
        palSetPad( DIR_2_PORT, DIR_2_PAD );
    else
        palClearPad( DIR_2_PORT, DIR_2_PAD );
}

static void setMoto3Dir( int dir )
{
    if ( dir > 0 )
        palSetPad( DIR_3_PORT, DIR_3_PAD );
    else
        palClearPad( DIR_3_PORT, DIR_3_PAD );
}

static void setHighCurrent( int en )
{
    if ( en > 0 )
    {
        palClearPad( HIGH_CURRENT_PORT, HIGH_CURRENT_PAD );
        setMotoReset( -1 );
    }
    else
    {
        setMotoReset( 1 );
        palSetPad( HIGH_CURRENT_PORT, HIGH_CURRENT_PAD );
    }
    // Also signal high current via I2C.
}

static void saveEmergencyData( void )
{
    uint8_t data[8];
    data[0] = (uint8_t)(motor[0].pos & 0xFF);
    data[1] = (uint8_t)((motor[0].pos >> 8) & 0xFF);
    data[2] = (uint8_t)((motor[0].pos >> 16) & 0xFF);
    data[3] = (uint8_t)((motor[0].pos >> 24) & 0xFF);

    data[4] = (uint8_t)(motor[1].pos & 0xFF);
    data[5] = (uint8_t)((motor[1].pos >> 8) & 0xFF);
    data[6] = (uint8_t)((motor[1].pos >> 16) & 0xFF);
    data[7] = (uint8_t)((motor[1].pos >> 24) & 0xFF);

    eepromClrSdData();
    eepromAddSdData( 8, data );
}

static int nsqrt( int arg )
{
    int div = arg;
    int res = arg;
    while ( 1 )
    {
        int temp = arg / div + div;
        div = temp / 2 + ( temp % 2 );
        if ( res > div )
            res = div;
        else
        {
            if ( ( (arg/res) == (res-1) ) && ( arg % res == 0 ) )
                res -= 1;
            return res;
        }
    }
}








