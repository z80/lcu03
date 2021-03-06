
#include "moto_ctrl.h"
#include "hal.h"
#include "eeprom_ctrl.h"
#include "led_ctrl.h"

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

/*
So here is EXT interrupts mapping.
14-B - step 0
1-B  - step 1
8-A  - dir 0
15-B - dir 1
12-B - hall 0
5-A  - hall 1
*/

static void setMotoSleep( int en );
static void setMotoReset( int en );
static void setMotoEnable( int en );


static void extStep0( EXTDriver * extp, expchannel_t channel );
static void extStep1( EXTDriver * extp, expchannel_t channel );
static void extDir0(  EXTDriver * extp, expchannel_t channel );
static void extDir1(  EXTDriver * extp, expchannel_t channel );
static void extHall0( EXTDriver * extp, expchannel_t channel );
static void extHall1( EXTDriver * extp, expchannel_t channel );

static void extStep0( EXTDriver * extp, expchannel_t channel )
{
	(void)extp;
	(void)channel;
	if ( palReadPad( STEP_2_PORT, STEP_2_PAD ) )
		palSetPad( STEP_0_PORT, STEP_0_PAD );
	else
		palClearPad( STEP_0_PORT, STEP_0_PAD );
}

static void extStep1( EXTDriver * extp, expchannel_t channel )
{
	(void)extp;
	(void)channel;
	if ( palReadPad( STEP_3_PORT, STEP_3_PAD ) )
		palSetPad( STEP_1_PORT, STEP_1_PAD );
	else
		palClearPad( STEP_1_PORT, STEP_1_PAD );
}

static void extDir0(  EXTDriver * extp, expchannel_t channel )
{
	(void)extp;
	(void)channel;
	if ( palReadPad( DIR_2_PORT, DIR_2_PAD ) )
		palSetPad( DIR_0_PORT, DIR_0_PAD );
	else
		palClearPad( DIR_0_PORT, DIR_0_PAD );
}

static void extDir1(  EXTDriver * extp, expchannel_t channel )
{
	(void)extp;
	(void)channel;
	if ( palReadPad( DIR_3_PORT, DIR_3_PAD ) )
		palSetPad( DIR_1_PORT, DIR_1_PAD );
	else
		palClearPad( DIR_1_PORT, DIR_1_PAD );
}

static void extHall0( EXTDriver * extp, expchannel_t channel )
{
	(void)extp;
	(void)channel;
	if ( palReadPad( HALL_0_PORT, HALL_0_PAD ) )
		palSetPad( HALL_2_PORT, HALL_2_PAD );
	else
		palClearPad( HALL_2_PORT, HALL_2_PAD );
}

static void extHall1( EXTDriver * extp, expchannel_t channel )
{
	(void)extp;
	(void)channel;
	if ( palReadPad( HALL_1_PORT, HALL_1_PAD ) )
		palSetPad( HALL_3_PORT, HALL_3_PAD );
	else
		palClearPad( HALL_3_PORT, HALL_3_PAD );
}



static const EXTConfig extcfg = {
		{
				{EXT_CH_MODE_DISABLED, NULL},
				{EXT_CH_MODE_RISING_EDGE | EXT_CH_MODE_FALLING_EDGE | EXT_CH_MODE_AUTOSTART, extStep1},
				{EXT_CH_MODE_DISABLED, NULL},
				{EXT_CH_MODE_DISABLED, NULL},
				{EXT_CH_MODE_DISABLED, NULL},
				{EXT_CH_MODE_RISING_EDGE | EXT_CH_MODE_FALLING_EDGE | EXT_CH_MODE_AUTOSTART, extHall1},
				{EXT_CH_MODE_DISABLED, NULL},
				{EXT_CH_MODE_DISABLED, NULL},
				{EXT_CH_MODE_RISING_EDGE | EXT_CH_MODE_FALLING_EDGE | EXT_CH_MODE_AUTOSTART, extDir0},
				{EXT_CH_MODE_DISABLED, NULL},
				{EXT_CH_MODE_DISABLED, NULL},
				{EXT_CH_MODE_DISABLED, NULL},
				{EXT_CH_MODE_RISING_EDGE | EXT_CH_MODE_FALLING_EDGE | EXT_CH_MODE_AUTOSTART, extHall0},
				{EXT_CH_MODE_DISABLED, NULL},
				{EXT_CH_MODE_RISING_EDGE | EXT_CH_MODE_FALLING_EDGE | EXT_CH_MODE_AUTOSTART, extStep0},
				{EXT_CH_MODE_RISING_EDGE | EXT_CH_MODE_FALLING_EDGE | EXT_CH_MODE_AUTOSTART, extDir1},
		},
		EXT_MODE_EXTI(0,
		        EXT_MODE_GPIOB,
				0,
				0,
				0,
				EXT_MODE_GPIOA,
				0,
				0,
				EXT_MODE_GPIOA,
				0,
				0,
				0,
				EXT_MODE_GPIOB,
				0,
				EXT_MODE_GPIOB,
				EXT_MODE_GPIOB)
};




static void initPads( void );

void motorInit( void )
{
	initPads();

	// Initialize external interrupt input here.
	extStart(&EXTD1, &extcfg);

	// Turn drivers on.
	setMotoReset( -1 );
	setMotoSleep( -1 );
	setMotoEnable( 1 );

	setHighCurrent( 1 );
}

static void initPads( void )
{
	// Step pads.
	palClearPad( STEP_0_PORT,  STEP_0_PAD );
	palSetPadMode( STEP_0_PORT, STEP_0_PAD, PAL_MODE_OUTPUT_PUSHPULL );
	palClearPad( STEP_1_PORT,  STEP_1_PAD );
	palSetPadMode( STEP_1_PORT, STEP_1_PAD, PAL_MODE_OUTPUT_PUSHPULL );
	palClearPad( STEP_2_PORT,  STEP_2_PAD );
	palSetPadMode( STEP_2_PORT, STEP_2_PAD, PAL_MODE_INPUT );
	palClearPad( STEP_3_PORT,  STEP_3_PAD );
	palSetPadMode( STEP_3_PORT, STEP_3_PAD, PAL_MODE_INPUT );
	// Dir0 and Dir1.
	palSetPadMode( DIR_0_PORT, DIR_0_PAD, PAL_MODE_OUTPUT_PUSHPULL );
	palSetPadMode( DIR_1_PORT, DIR_1_PAD, PAL_MODE_OUTPUT_PUSHPULL );
	palSetPadMode( DIR_2_PORT, DIR_2_PAD, PAL_MODE_INPUT );
	palSetPadMode( DIR_3_PORT, DIR_3_PAD, PAL_MODE_INPUT );
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

	// External interrupt pads.
	palSetPadMode( HALL_0_PORT,  HALL_0_PAD, PAL_MODE_INPUT );
	palSetPadMode( HALL_1_PORT,  HALL_1_PAD, PAL_MODE_INPUT );
	palSetPadMode( HALL_2_PORT,  HALL_2_PAD, PAL_MODE_OUTPUT_PUSHPULL );
	palSetPadMode( HALL_3_PORT,  HALL_3_PAD, PAL_MODE_OUTPUT_PUSHPULL );
	palSetPadMode( PWR_OFF_PORT, PWR_OFF_PAD, PAL_MODE_INPUT );

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

void setHighCurrent( int en )
{
	if ( en > 0 )
	{
		palClearPad( HIGH_CURRENT_PORT, HIGH_CURRENT_PAD );
		//setMotoReset( -1 );
	}
	else
	{
		//setMotoReset( 1 );
		palSetPad( HIGH_CURRENT_PORT, HIGH_CURRENT_PAD );
	}
}










