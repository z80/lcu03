
#include "moto_ctrl.h"
#include "hal.h"

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

#define HIGH_CURRENT_PORT GPIOB
#define HIGH_CURRENT_PAD  13


typedef struct
{
	int     pos;
	int     sensorPos;
	uint8_t activated : 1;
	uint8_t in_motion : 1;
} TMotor;

static TMotor motor[2];
static int moto_vmin = 200,
		moto_vmax = 500,
		moto_acc = 200;
static int steps_per_rev = 5120;

static void extHall0( EXTDriver * extp, expchannel_t channel );
static void extHall1( EXTDriver * extp, expchannel_t channel );
static void extPowerOff( EXTDriver * extp, expchannel_t channel );

static const EXTConfig extcfg = {
  {
   {EXT_CH_MODE_DISABLED, NULL},
   {EXT_CH_MODE_DISABLED, NULL},
   {EXT_CH_MODE_DISABLED, NULL},
   {EXT_CH_MODE_DISABLED, NULL},
   {EXT_CH_MODE_DISABLED, NULL},
   {EXT_CH_MODE_FALLING_EDGE /*| EXT_CH_MODE_AUTOSTART*/, extHall0 },
   {EXT_CH_MODE_DISABLED, NULL},
   {EXT_CH_MODE_DISABLED, NULL},
   {EXT_CH_MODE_FALLING_EDGE /*| EXT_CH_MODE_AUTOSTART*/, extPowerOff },
   {EXT_CH_MODE_DISABLED, NULL},
   {EXT_CH_MODE_DISABLED, NULL},
   {EXT_CH_MODE_DISABLED, NULL},
   {EXT_CH_MODE_FALLING_EDGE /*| EXT_CH_MODE_AUTOSTART*/, extHall1 },
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

#define PWM_FREQ 140625


static void pwmMotor0( PWMDriver * pwmp );
static void pwmMotor1( PWMDriver * pwmp );

static PWMConfig pwmcfgMotor0 = {
  PWM_FREQ,
  PWM_FREQ, // Initial PWM period 1S.
  pwmMotor0,
  {
   { PWM_OUTPUT_DISABLED, NULL },
   { PWM_OUTPUT_DISABLED, NULL },
   { PWM_OUTPUT_ACTIVE_HIGH, NULL },
   { PWM_OUTPUT_DISABLED, NULL }
  },
  0,
  0,
#if STM32_PWM_USE_ADVANCED
  0
#endif
};

static PWMConfig pwmcfgMotor1 = {
  PWM_FREQ,
  PWM_FREQ, // Initial PWM period 1S.
  pwmMotor1,
  {
   { PWM_OUTPUT_DISABLED, NULL },
   { PWM_OUTPUT_ACTIVE_HIGH, NULL },
   { PWM_OUTPUT_DISABLED, NULL },
   { PWM_OUTPUT_DISABLED, NULL }
  },
  0,
  0,
#if STM32_PWM_USE_ADVANCED
  0
#endif
};



#define MOTOR_QUEUE_SZ 3

#define MOTOR_BUFFER_SZ ( MOTOR_QUEUE_SZ * sizeof( int ) )

InputQueue  motor0_queue;
uint8_t     motor0_queue_buffer[ MOTOR_BUFFER_SZ ];

InputQueue  motor1_queue;
uint8_t     motor1_queue_buffer[ MOTOR_BUFFER_SZ ];


static WORKING_AREA( waMotor0, 256 );
static msg_t motor0Thread( void *arg );

static WORKING_AREA( waMotor1, 256 );
static msg_t motor1Thread( void *arg );







void motorInit( void )
{
	// Init external interrupts.
	// Hall_0.
	palSetPadMode( GPIOA, 5, PAL_MODE_INPUT );
	// Power off.
	palSetPadMode( GPIOB, 8, PAL_MODE_INPUT );
	// Hall_1.
	palSetPadMode( GPIOB, 12, PAL_MODE_INPUT );

	chIQInit( &motor0_queue,   motor0_queue_buffer, SWEEP_BUFFER_SZ, 0 );
	chIQInit( &motor1_queue,   motor1_queue_buffer, SWEEP_BUFFER_SZ, 0 );

	// Initialize external interrupt input here.
	extStart(&EXTD1, &extcfg);

	// Init PWM for step control.
	pwmStart( &PWMD3, &pwmcfgMotor0 );
	palSetPadMode( GPIOB, 0, PAL_MODE_STM32_ALTERNATE_PUSHPULL );

	pwmStart( &PWMD2, &pwmcfgMoto1 );
	palSetPadMode( GPIOA, 1, PAL_MODE_STM32_ALTERNATE_PUSHPULL );

	// Init GPIO ~sleep~, ~enable~, ~reset~, ~high_current~.
	palClearPad( ENABLE_PORT, ENABLE_PAD );
	palClearPad( SLEEP_PORT,  SLEEP_PAD );
	palClearPad( RESET_PORT,  RESET_PAD );
	palSetPad(  HIGH_CURRENT_PORT, HIGH_CURRENT_PAD );
	palSetPadMode( ENABLE_PORT, ENABLE_PAD, PAL_MODE_OUTPUT_PUSHPULL );
	palSetPadMode( SLEEP_PORT,  SLEEP_PAD,  PAL_MODE_OUTPUT_PUSHPULL );
	palSetPadMode( RESET_PORT,  RESET_PAD, PAL_MODE_OUTPUT_PUSHPULL );
	palSetPadMode( HIGH_CURRENT_PORT, HIGH_CURRENT_PAD, PAL_MODE_OUTPUT_PUSHPULL );

	chThdCreateStatic( waMotor0, sizeof(waMotor0), NORMALPRIO, motor0Thread, NULL );
	chThdCreateStatic( waMotor1, sizeof(waMotor1), NORMALPRIO, motor1Thread, NULL );
}


void motorSetPos( int index, int pos )
{
	int ind = (index > 0) ? 1 : 0;
	motor[ind].pos = pos;
}

void motorSetParams( int vmin, int vmax, int acc )
{
	moto_vmin = vmin;
	moto_vmax = vmax;
	moto_acc  = acc;
}

void motorSetRevSteps( int cnt )
{
	steps_per_rev = cnt;
}

void motorMove( int index, int pos )
{
	uint8_t * arg = (uint8_t *)(&pos);
	chSysLock();
	    InputQueue * motor_queue = ( index > 0 ) ? 1 : 0;
		chIQPutI( motor_queue, arg[0] );
		chIQPutI( motor_queue, arg[1] );
		chIQPutI( motor_queue, arg[2] );
		chIQPutI( motor_queue, arg[3] );
	chSysUnlock();
}

void motorSensorData( int index, int * activated, int * pos )
{
	int ind = (index > 0) ? 1 : 0;
	TMotor * m = &(motor[ind]);
	if ( pos )
		*pos = m->sensorPos;
	if ( activated )
		*activated = m->activated;
}

int motorInMotion( int index )
{
	int ind = (index > 0) ? 1 : 0;
	TMotor * m = &(motor[ind]);
	int res = m->in_motion;
	return res;
}

int motorPos( int index )
{
	int ind = (index > 0) ? 1 : 0;
	TMotor * m = &(motor[ind]);
	int res = m->pos;
	return res;

}

static void pwmMotor0( PWMDriver * pwmp )
{

}

static void pwmMotor1( PWMDriver * pwmp )
{

}


static msg_t motor0Thread( void *arg )
{
	while ( 1 )
	{

	}
	return 0;
}

static msg_t motor1Thread( void *arg )
{
	while ( 1 )
	{

	}
	return 0;
}




