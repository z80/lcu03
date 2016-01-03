
#include "moto_ctrl.h"
#include "hal.h"

typedef struct
{
	int     pos;
	int     sensorPos;
	uint8_t activated;
} TMotor;

TMotor motor[2];
static int moto_vmin, moto_vmax, moto_acc;

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

#define MOTOR_QUEUE_SZ 5

typedef struct
{
	uint8_t index;
	int     steps;
} TCmd;

#define MOTOR_BUFFER_SZ ( MOTOR_QUEUE_SZ * sizeof( TCmd ) )

InputQueue  motor_queue;
uint8_t     motor_queue_buffer[ MOTOR_BUFFER_SZ ];










void motorInit( void )
{
	// Init external interrupts.
	// Hall_0.
	palSetPadMode( GPIOA, 5, PAL_MODE_INPUT );
	// Power off.
	palSetPadMode( GPIOB, 8, PAL_MODE_INPUT );
	// Hall_1.
	palSetPadMode( GPIOB, 12, PAL_MODE_INPUT );

	chIQInit( &motor_queue,   motor_queue_buffer, SWEEP_BUFFER_SZ, 0 );


	// Initialize external interrupt input here.
	extStart(&EXTD1, &extcfg);
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

void motorMove( int index, int pos )
{

}

void motorSensorData( int * activated, int * pos )
{

}

int motorInMotion( int index )
{

}

int motorPos( int index )
{

}




