
#include "cpu_io.h"

#include "ch.h"
#include "hal.h"

#include "led_ctrl.h"
#include "dfu_ctrl.h"
#include "shutter_ctrl.h"
#include "moto_ctrl.h"
#include "eeprom_ctrl.h"

#include "hdw_config.h"
#include "funcs.h"
#include <string.h>

#define BUFFER_SZ    32
#define ARGS_SZ      32
#define OUT_QUEUE_SZ 32

#define IO_DELAY_MS 1
#define SERIAL 		SD1

#define CMD_SET_ARGS  1
#define CMD_EXEC_FUNC 2

static uint8_t buffer[ BUFFER_SZ ];
static uint8_t args[ ARGS_SZ ];


static uint8_t i2cInBuffer[ BUFFER_SZ ];
static uint8_t i2cOutBuffer[ BUFFER_SZ ];
InputQueue  i2cInQueue;
OutputQueue i2cOutQueue;

#ifndef SLAVE_ADDR
	static WORKING_AREA( waSerial, 256 );
	static msg_t serialThread( void *arg )
	{
		(void)arg;
		chRegSetThreadName( "se" );

		while ( 1 )
		{
			msg_t msg = sdGet( &SERIAL );
			// If serial arrived pretend as if it came via I2C.
			chSysLock();
				chIQPutI( &i2cInQueue, msg );
			chSysUnlock();
		}

		return 0;
	}
#endif


static void process_command( uint8_t * buf, int sz );
static void writeResult( uint8_t v );
static void writeEom( void );

static const SerialConfig serial_cfg =
{
	115200,
	0,
	USART_CR2_STOP1_BITS /*| USART_CR2_LINEN*/,
	USART_CR3_RTSE | USART_CR3_CTSE

};




static const I2CConfig i2ccfg =
{
    OPMODE_I2C,
    100000,
    STD_DUTY_CYCLE,
};

void initCpuIo( void )
{
	chIQInit( &i2cInQueue,  i2cInBuffer,  BUFFER_SZ, NULL );
	chIQInit( &i2cOutQueue, i2cOutBuffer, BUFFER_SZ, NULL );

	// Initialize serial only in master mode.
	#ifndef SLAVE_ADDR
		// Setup pad settings.
		palSetPadMode( GPIOA, 9, PAL_MODE_STM32_ALTERNATE_PUSHPULL );
		palSetPadMode( GPIOA, 10, PAL_MODE_INPUT );
		// Setup RTS.
		palSetPadMode( GPIOA, 11, PAL_MODE_STM32_ALTERNATE_PUSHPULL );
		// Setup CTS.
		palSetPadMode( GPIOA, 12, PAL_MODE_INPUT );

		// Initialize serial driver.
		//sdStart( &SERIAL, &serial_cfg );
		sdStart( &SERIAL, 0 );

		chThdCreateStatic( waSerial, sizeof(waSerial), NORMALPRIO, serialThread, NULL );
	#endif

	// Init I2C bus.
	i2cStart( &I2CD1, &i2ccfg );

	// Tune ports for I2C1.
	palSetPadMode( GPIOB, 6, PAL_MODE_STM32_ALTERNATE_OPENDRAIN );
	palSetPadMode( GPIOB, 7, PAL_MODE_STM32_ALTERNATE_OPENDRAIN );

	// Only in slave mode initialize queued data exchange.
	#ifdef SLAVE_ADDR
		i2cSlaveQueueIo( &I2CD1, SLAVE_ADDR, &i2cInQueue, &i2cOutQueue, 0, 0 );
	#endif
}

void processCpuIo( void )
{
	static uint8_t slash = 0;
	static int out_index = 0;
	msg_t msg;

	/*
	// Try reading serial.
	msg = sdGetTimeout( &SERIAL, TIME_INFINITE );
	sdPut( &SERIAL, msg );
	return;
	*/


	msg = chIQGet( &i2cInQueue );

	uint8_t v = (uint8_t)msg;
	if ( !slash )
	{
		if ( v == '\0' )
		{
			// Execute command
			process_command( buffer, out_index );
			out_index = 0;
		}
		else if ( v != '\\' )
			buffer[ out_index++ ] = v;
		else
			slash = 1;
	}
	else
	{
		slash = 0;
		buffer[ out_index++ ] = v;
	}
	// Just in case of crazy command
	out_index = ( out_index < BUFFER_SZ ) ? out_index : BUFFER_SZ;
}

uint8_t * funcArgs( void )
{
	return args;
}

static void exec_func( void );

static void process_command( uint8_t * buf, int sz )
{
	int i;
	uint8_t cmd;
	cmd = buf[0];
	uint8_t * data = &(buf[1]);
	switch ( cmd )
	{
	case CMD_SET_ARGS:
		for ( i=0; i<(sz-1); i++ )
			args[i] = data[i];
		break;
	case CMD_EXEC_FUNC:
		// Execute function by it's index.
		exec_func();
		break;
	}
}


static void set_leds( uint8_t * args );
static void set_current( uint8_t * args );


static TFunc funcs[] =
{
	set_leds, 		// 0
	set_current 	// 1
};

static void exec_func( void )
{
	int func_index = (int)buffer[1];// + ((int)buffer[2]) * 256;
	// Just to avoid troubles.
	int funcs_sz = (int)(sizeof(funcs)/sizeof(TFunc));
    func_index = (func_index < funcs_sz) ? func_index : 0;
	funcs[func_index]( args );
}

static void set_leds( uint8_t * args )
{
	uint8_t leds = args[0];
	setLeds( leds );
}

static void set_current( uint8_t * args )
{
	(void)args;
	int v = args[0];
	setHighCurrent( v );
}




















static void writeResult( uint8_t v )
{
	if ( ( v == '\0' ) || ( v == '\\') )
		sdPut( &SERIAL, '\\' );
	sdPut( &SERIAL, v );
}

static void writeEom( void )
{
	sdPut( &SERIAL, '\0' );
}







