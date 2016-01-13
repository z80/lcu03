
#include "moto_ctrl.h"
#include "hal.h"

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

static int nsqrt( int arg );


static void setMotoSleep( int en );
static void setMotoReset( int en );
static void setMotoEnable( int en );
static void setMoto0Dir( int dir );
static void setMoto1Dir( int dir );
static void setHighCurrent( int en );

typedef struct
{
    int     pos;
    int     sensorPos;

    int     steps_left;
    int     period;
    uint8_t activated : 1;
    uint8_t in_motion : 1;
    uint8_t dir : 1;
} TMotor;

static TMotor motor[2];

/*
static int moto_vmin = 300,
        moto_vmax = 2000,
        moto_acc = 2000;
static int steps_per_rev = 5120;
*/

static int moto_vmin = 300*8,
        moto_vmax = 2000*8,
        moto_acc = 2000*8;
static int steps_per_rev = 5120*8;



static void extHall0( EXTDriver * extp, expchannel_t channel );
static void extHall1( EXTDriver * extp, expchannel_t channel );
static void extPowerOff( EXTDriver * extp, expchannel_t channel );

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

static void extPowerOff( EXTDriver * extp, expchannel_t channel )
{
    (void)extp;
    (void)channel;
    //motor[0].activated = 1;
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
static void offMotor0( GPTDriver *gptp );
static void timerMotor1( GPTDriver *gptp );
static void offMotor1( GPTDriver *gptp );

static const GPTConfig gpt1cfg = {
  TMR_FREQ,
  timerMotor0
};

static const GPTConfig gpt2cfg = {
  TMR_FREQ,
  offMotor0
};

static const GPTConfig gpt3cfg = {
  TMR_FREQ,
  timerMotor1
};

static const GPTConfig gpt4cfg = {
  TMR_FREQ,
  offMotor1
};



#define MOTOR_QUEUE_SZ 3

#define MOTOR_BUFFER_SZ ( MOTOR_QUEUE_SZ * sizeof( int ) )

InputQueue  motor0_queue;
uint8_t     motor0_queue_buffer[ MOTOR_BUFFER_SZ ];

InputQueue  motor0_stop_queue;
uint8_t     motor0_stop_queue_buffer[ MOTOR_QUEUE_SZ ];

InputQueue  motor1_queue;
uint8_t     motor1_queue_buffer[ MOTOR_BUFFER_SZ ];

InputQueue  motor1_stop_queue;
uint8_t     motor1_stop_queue_buffer[ MOTOR_QUEUE_SZ ];


static WORKING_AREA( waMotor0, 1024 );
static msg_t motor0Thread( void *arg );

static WORKING_AREA( waMotor1, 1024 );
static msg_t motor1Thread( void *arg );


static msg_t motor0Thread( void *arg )
{
    (void)arg;
    while ( 1 )
    {
        int dest;
        uint8_t * args = (uint8_t *)( &dest );
        args[0] = chIQGet( &motor0_queue );
        args[1] = chIQGet( &motor0_queue );
        args[2] = chIQGet( &motor0_queue );
        args[3] = chIQGet( &motor0_queue );

        // Choose direction and steps number.
        TMotor * moto = &(motor[0]);
        chSysLock();
            int distance = dest - moto->pos;
        chSysUnlock();
        int dir = ( distance > 0 ) ? 1 : -1;
        distance = ( distance > 0 ) ? distance : -distance;
        // Set rotation direction.
        setMoto0Dir( dir );
        // Set high current.
        setHighCurrent( 1 );
        chThdSleepMilliseconds( HIGH_CURRENT_WAIT );

        // In loop control PWM speed.
        int period = TMR_FREQ / moto_vmin;

        int half_dist = distance / 2;
        chSysLock();
            moto->dir = ( dir > 0 ) ? 1 : 0;
            moto->period = period;
            moto->steps_left = distance;
        chSysUnlock();
       	gptStartOneShot( &GPTD1, period );

        // Acceleration.
        //int min_period = TMR_FREQ;
        int steps_left;
        do {
            //chThdSleepMilliseconds( 1 );
            chSysLock();
            	steps_left = moto->steps_left;
            chSysUnlock();
            int current_dist = distance - steps_left;

            int d = current_dist;
            d = (d > half_dist ) ? (distance - d) : d;
            int speed = nsqrt( moto_vmin * moto_vmin + 2 * moto_acc * d );
            //int speed = moto_vmin;
            speed = ( speed > moto_vmax ) ? moto_vmax : speed;
            period = TMR_FREQ / speed;
            period = ( period > 2 ) ? period : 2; // Just limin minimum period to the one which makes sense.
            //min_period = ( min_period > period ) ? period : min_period;
            // Apply period.
            chSysLock();
                moto->period = period;
            chSysUnlock();

            msg_t msg = chIQGetTimeout( &motor0_stop_queue, 0 );

			// Check for stop condition.
			if ( msg != Q_TIMEOUT )
			{
				gptStop( &GPTD1 );
				gptStop( &GPTD2 );
				if ( palReadPad( STEP_0_PORT, STEP_0_PAD ) )
				{
					palClearPad( STEP_0_PORT, STEP_0_PAD );
					moto->steps_left -= 1;
					moto->pos += ( moto->dir > 0 ) ? 1 : -1;
				}
				break;
			}

        } while ( steps_left > 0 );

        // In the very end set low current.
        chThdSleepMilliseconds( HIGH_CURRENT_WAIT );
        // In the other motor doesn't work turn high current off.
        chSysLock();
            if ( !motor[1].in_motion )
                setHighCurrent( -1 );
        chSysUnlock();

        chSysLock();
        	moto->in_motion = 0;
        chSysUnlock();
    }
    return 0;
}

static msg_t motor1Thread( void *arg )
{
    (void)arg;
    while ( 1 )
    {
        int dest;
        uint8_t * args = (uint8_t *)( &dest );
        args[0] = chIQGet( &motor1_queue );
        args[1] = chIQGet( &motor1_queue );
        args[2] = chIQGet( &motor1_queue );
        args[3] = chIQGet( &motor1_queue );

        // Choose direction and steps number.
        TMotor * moto = &(motor[1]);
        chSysLock();
            int distance = dest - moto->pos;
        chSysUnlock();
        int dir = ( distance > 0 ) ? 1 : -1;
        distance = ( distance > 0 ) ? distance : -distance;
        // Set rotation direction.
        setMoto1Dir( dir );
        // Set high current.
        setHighCurrent( 1 );
        chThdSleepMilliseconds( HIGH_CURRENT_WAIT );

        // In loop control PWM speed.
        int period = TMR_FREQ / moto_vmin;

        int half_dist = distance / 2;
        chSysLock();
            moto->dir = ( dir > 0 ) ? 1 : 0;
            moto->period = period;
            moto->steps_left = distance;
        chSysUnlock();
        gptStartOneShot( &GPTD3, period );

        // Acceleration.
        //int min_period = TMR_FREQ;
        int steps_left;
        do {
            //chThdSleepMilliseconds( 1 );
            chSysLock();
                steps_left = moto->steps_left;
            chSysUnlock();
            int current_dist = distance - steps_left;

            int d = current_dist;
            d = (d > half_dist ) ? (distance - d) : d;
            int speed = nsqrt( moto_vmin * moto_vmin + 2 * moto_acc * d );
            //int speed = moto_vmin;
            speed = ( speed > moto_vmax ) ? moto_vmax : speed;
            period = TMR_FREQ / speed;
            period = ( period > 2 ) ? period : 2; // Just limin minimum period to the one which makes sense.
            //min_period = ( min_period > period ) ? period : min_period;
            // Apply period.
            chSysLock();
                moto->period = period;
            chSysUnlock();

            msg_t msg = chIQGetTimeout( &motor0_stop_queue, 0 );

            // Check for stop condition.
            if ( msg != Q_TIMEOUT )
            {
                gptStop( &GPTD3 );
                gptStop( &GPTD4 );
                if ( palReadPad( STEP_1_PORT, STEP_1_PAD ) )
                {
                    palClearPad( STEP_1_PORT, STEP_1_PAD );
                    moto->steps_left -= 1;
                    moto->pos += ( moto->dir > 0 ) ? 1 : -1;
                }
                break;
            }

        } while ( steps_left > 0 );

        // In the very end set low current.
        chThdSleepMilliseconds( HIGH_CURRENT_WAIT );
        // In the other motor doesn't work turn high current off.
        chSysLock();
            if ( !motor[0].in_motion )
                setHighCurrent( -1 );
        chSysUnlock();

        chSysLock();
            moto->in_motion = 0;
        chSysUnlock();
    }
    return 0;
}

static void timerMotor0( GPTDriver *gptp )
{
    (void)gptp;
    TMotor * moto = &(motor[0]);
    if ( moto->steps_left > 0 )
    {
        palSetPad( STEP_0_PORT, STEP_0_PAD );
        chSysLockFromIsr();
            if ( GPTD2.state == GPT_READY )
            {
                int period2 = moto->period/2;
                gptStartOneShotI( &GPTD2, period2 );
            }
            gptStartOneShotI( &GPTD1, moto->period );
        chSysUnlockFromIsr();
    }
}

static void offMotor0( GPTDriver *gptp )
{
    (void)gptp;
    TMotor * moto = &(motor[0]);
    palClearPad( STEP_0_PORT, STEP_0_PAD );
    moto->steps_left -= 1;
    moto->pos += ( moto->dir > 0 ) ? 1 : -1;
}


static void timerMotor1( GPTDriver *gptp )
{
    (void)gptp;
    TMotor * moto = &(motor[1]);
    if ( moto->steps_left > 0 )
    {
        palSetPad( STEP_1_PORT, STEP_1_PAD );
        chSysLockFromIsr();
            if ( GPTD4.state == GPT_READY )
            {
                int period2 = moto->period/2;
                gptStartOneShotI( &GPTD4, period2 );
            }
            gptStartOneShotI( &GPTD3, moto->period );
        chSysUnlockFromIsr();
    }
}

static void offMotor1( GPTDriver *gptp )
{
    (void)gptp;
    TMotor * moto = &(motor[1]);
    palClearPad( STEP_1_PORT, STEP_1_PAD );
    moto->steps_left -= 1;
    moto->pos += ( moto->dir > 0 ) ? 1 : -1;
}


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



void motorInit( void )
{
    // Init external interrupts.
    // Hall_0.
    palSetPadMode( GPIOA, 5, PAL_MODE_INPUT );
    // Power off.
    palSetPadMode( GPIOB, 8, PAL_MODE_INPUT );
    // Hall_1.
    palSetPadMode( GPIOB, 12, PAL_MODE_INPUT );

    chIQInit( &motor0_queue,      motor0_queue_buffer,      MOTOR_BUFFER_SZ, 0 );
    chIQInit( &motor0_stop_queue, motor0_stop_queue_buffer, MOTOR_QUEUE_SZ, 0 );
    chIQInit( &motor1_queue,      motor1_queue_buffer,      MOTOR_BUFFER_SZ, 0 );
    chIQInit( &motor1_stop_queue, motor1_stop_queue_buffer, MOTOR_QUEUE_SZ, 0 );

    // Initialize external interrupt input here.
    palSetPadMode( HALL_0_PORT,  HALL_0_PAD, PAL_MODE_INPUT );
    palSetPadMode( HALL_1_PORT,  HALL_1_PAD, PAL_MODE_INPUT );
    palSetPadMode( PWR_OFF_PORT, PWR_OFF_PAD, PAL_MODE_INPUT );
    extStart(&EXTD1, &extcfg);

    // Init PWM for step control.
    gptStart( &GPTD1, &gpt1cfg );
    gptStart( &GPTD2, &gpt2cfg );
    gptStart( &GPTD3, &gpt3cfg );
    gptStart( &GPTD4, &gpt4cfg );
    palClearPad( STEP_0_PORT,  STEP_0_PAD );
    palSetPadMode( STEP_0_PORT, STEP_0_PAD, PAL_MODE_OUTPUT_PUSHPULL );
    palClearPad( STEP_1_PORT,  STEP_1_PAD );
    palSetPadMode( STEP_1_PORT, STEP_1_PAD, PAL_MODE_OUTPUT_PUSHPULL );

    // Init GPIO ~sleep~, ~enable~, ~reset~, ~high_current~.
    palClearPad( ENABLE_PORT, ENABLE_PAD );
    palClearPad( SLEEP_PORT,  SLEEP_PAD );
    palClearPad( RESET_PORT,  RESET_PAD );
    palSetPad(  HIGH_CURRENT_PORT, HIGH_CURRENT_PAD );
    palSetPadMode( ENABLE_PORT, ENABLE_PAD, PAL_MODE_OUTPUT_PUSHPULL );
    palSetPadMode( SLEEP_PORT,  SLEEP_PAD,  PAL_MODE_OUTPUT_PUSHPULL );
    palSetPadMode( RESET_PORT,  RESET_PAD, PAL_MODE_OUTPUT_PUSHPULL );
    palSetPadMode( HIGH_CURRENT_PORT, HIGH_CURRENT_PAD, PAL_MODE_OUTPUT_PUSHPULL );

    // Dir0 and Dir1.
    palSetPadMode( DIR_0_PORT, DIR_0_PAD, PAL_MODE_OUTPUT_PUSHPULL );
    palSetPadMode( DIR_1_PORT, DIR_1_PAD, PAL_MODE_OUTPUT_PUSHPULL );

    chThdCreateStatic( waMotor0, sizeof(waMotor0), NORMALPRIO, motor0Thread, NULL );
    chThdCreateStatic( waMotor1, sizeof(waMotor1), NORMALPRIO, motor1Thread, NULL );

    // Turn drivers on.
    setMotoReset( 0 );
    setMotoSleep( 0 );
    setMotoEnable( 1 );

    motor[0].pos         = 0;
    motor[0].sensorPos   = 0;
    motor[0].steps_left  = 0;
    motor[0].period      = 0;
    motor[0].activated   = 0;
    motor[0].in_motion   = 0;
    motor[0].dir         = 0;

    motor[1].pos        = 0;
    motor[1].sensorPos  = 0;
    motor[1].steps_left = 0;
    motor[0].period     = 0;
    motor[1].activated  = 0;
    motor[1].in_motion  = 0;
    motor[1].dir        = 0;
}

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

void motorStop( int index )
{
    InputQueue * motor_queue = ( index > 0 ) ? (&motor1_stop_queue) : (&motor0_stop_queue);
    chSysLock();
        chIQPutI( motor_queue, 0 );
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

static void setHighCurrent( int en )
{
    if ( en > 0 )
        palClearPad( HIGH_CURRENT_PORT, HIGH_CURRENT_PAD );
    else
        palSetPad( HIGH_CURRENT_PORT, HIGH_CURRENT_PAD );

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








