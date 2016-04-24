
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

static void motor_pos( uint8_t * args )
{
    int ind = (args[0] > 0) ? 1 : 0;

    int pos = motorPos( ind );

    writeResult( pos & 0xFF );
    writeResult( (pos >> 8) & 0xFF );
    writeResult( (pos >> 16) & 0xFF );
    writeResult( (pos >> 24) & 0xFF );
    writeEom();
}

static void eeprom_write( uint8_t * args )
{
    uint8_t addr = args[0];
    uint8_t cnt  = args[1];

    int res = eepromWrite( addr, cnt, &args[2] );
    uint8_t ret = (uint8_t)( (res >= 0) ? res : -res );

    writeResult( ret );
    writeEom();
}

static void eeprom_read( uint8_t * args )
{
    uint8_t addr = args[0];
    uint8_t cnt  = args[1];

    int res = eepromRead( addr, cnt, args );
    uint8_t ret = (uint8_t)( (res >= 0) ? res : -res );

    writeResult( ret );
    uint8_t i;
    for ( i=0; i<cnt; i++ )
        writeResult( args[i] );
    writeEom();
}

static void eeprom_clrSdData( uint8_t * args )
{
    (void)args;
    eepromClrSdData();
}

static void eeprom_setSdAddr( uint8_t * args )
{
    uint8_t addr = args[0];
    eepromSetSdAddr( addr );
}

static void motor_queue_space( uint8_t * args )
{
	(void)args;
	int sz = motorQueueFreeSpace();
	writeResult( (uint8_t)sz );
	writeEom();
}


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
	//i2cStart( &I2CD1, &i2ccfg );

	// Tune ports for I2C1.
	palSetPadMode( GPIOB, 6, PAL_MODE_STM32_ALTERNATE_OPENDRAIN );
	palSetPadMode( GPIOB, 7, PAL_MODE_STM32_ALTERNATE_OPENDRAIN );

	// Only in slave mode initialize queued data exchange.
	#ifdef SLAVE_ADDR
		//i2cSlaveQueueIo( &I2CD1, SLAVE_ADDR, &i2cInQueue, &i2cOutQueue, 0, 0 );
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
	//shift = serial_decode_byte( msg, &(buffer[out_index]), &eom );
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

static void hardware_version( uint8_t * args );
static void firmware_version( uint8_t * args );
static void firmware_upgrade( uint8_t * args );

static void set_led( uint8_t * args );
static void set_shutter( uint8_t * args );
static void move_motor( uint8_t * args );
static void stop_motor( uint8_t * args );
static void motor_in_motion( uint8_t * args );
static void sensor( uint8_t * args );
static void motor_set_pos( uint8_t * args );
static void motor_set_params( uint8_t * args );
static void motor_pos( uint8_t * args );

static void eeprom_write( uint8_t * args );
static void eeprom_read( uint8_t * args );
static void eeprom_clrSdData( uint8_t * args );
static void eeprom_setSdAddr( uint8_t * args );

static void motor_queue_space( uint8_t * args );


/*
static void set_dac1( uint8_t * args );
static void set_dac2( uint8_t * args );
static void get_adc( uint8_t * args );
static void set_osc_signals( uint8_t * args );
static void set_osc_period( uint8_t * args );
static void get_osc_data( uint8_t * args );

static void get_temp( uint8_t * args );

static void set_trigger_en( uint8_t * args );

static void set_sweep_range( uint8_t * args );
static void set_sweep_time( uint8_t * args );
static void set_sweep_en( uint8_t * args );
static void get_sweep_en( uint8_t * args );
static void get_sweep_data( uint8_t * args );

static void set_output( uint8_t * args );
*/


static TFunc funcs[] =
{
	hardware_version,	// 0
	firmware_version,   // 1
    firmware_upgrade,   // 2

    set_led,			// 3
    set_shutter,		// 4
    move_motor,			// 5
    stop_motor,			// 6
    motor_in_motion,	// 7
    sensor,				// 8
    motor_set_pos,		// 9
    motor_set_params, 	// 10
    motor_pos,			// 11

    eeprom_write, 		// 12
    eeprom_read, 		// 13
    eeprom_clrSdData, 	// 14
    eeprom_setSdAddr,  	// 15

	motor_queue_space 	// 16
};

static void exec_func( void )
{
	int func_index = (int)buffer[1];// + ((int)buffer[2]) * 256;
	// Just to avoid troubles.
	int funcs_sz = (int)(sizeof(funcs)/sizeof(TFunc));
    func_index = (func_index < funcs_sz) ? func_index : 0;
	funcs[func_index]( args );
}

static void hardware_version( uint8_t * args )
{
	(void)args;
	const uint8_t stri[] = HARDWARE_VERSION;
	int l = strlen( (char *)stri );
	int i;
	for ( i=0; i<l; i++ )
		writeResult( stri[i] );
	writeEom();
}

static void firmware_version( uint8_t * args )
{
	(void)args;
	const uint8_t stri[] = FIRMWARE_VERSION;
	int l = strlen( (char *)stri );
	int i;
	for ( i=0; i<l; i++ )
		writeResult( stri[i] );
	writeEom();
}

static void firmware_upgrade( uint8_t * args )
{
    (void)args;

    // Just report to let application know that function was executed successfully.
    uint8_t res[] = "ok";
    writeResult( res[0] );
    writeResult( res[1] );
    writeEom();

    // To give some time to retrieve the result.
    chThdSleepMilliseconds( 500 );

    // Jump to the beginning of FLASH space to invoke bootloader.
    firmwareUpgrade();
}


static void set_led( uint8_t * args )
{
	setLeds( args[0] );
}

static void set_shutter( uint8_t * args )
{
    int en = (int)args[0];
    setShutter( en );
}

static void move_motor( uint8_t * args )
{
    motorMove( (int8_t *)args );
}

static void stop_motor( uint8_t * args )
{
    (void)args;
    motorStop();
}

static void motor_in_motion( uint8_t * args )
{
    int ind = (args[0] > 0) ? 1 : 0;
    int pos;
    int res = motorInMotion( ind, &pos );
    //uint8_t * ppos = (uint8_t *)(&pos);

    writeResult( res );
    writeResult( pos & 0xFF );
    writeResult( (pos >> 8) & 0xFF );
    writeResult( (pos >> 16) & 0xFF );
    writeResult( (pos >> 24) & 0xFF );
    writeEom();
}

static void sensor( uint8_t * args )
{
    int ind = (args[0] > 0) ? 1 : 0;

    int activated, pos;
    motorSensorData( ind, &activated, &pos );
    //uint8_t * ppos = (uint8_t *)(&pos);

    writeResult( activated );
    writeResult( pos & 0xFF );
    writeResult( (pos >> 8) & 0xFF );
    writeResult( (pos >> 16) & 0xFF );
    writeResult( (pos >> 24) & 0xFF );
    writeEom();
}

static void motor_set_pos( uint8_t * args )
{
    int ind = (args[0] > 0) ? 1 : 0;
    int32_t pos;
    //uint8_t * ppos = (uint8_t *)(&pos);
    pos = (int32_t)args[1];
    pos |= ((int32_t)args[2] << 8);
    pos |= ((int32_t)args[3] << 16);
    pos |= ((int32_t)args[4] << 24);
    motorSetPos( ind, pos );
}

static void motor_set_params( uint8_t * args )
{
    int32_t vmin, vmax, acc;
    //uint8_t * ppos = (uint8_t *)(&vmin);
    vmin = (int32_t)args[0];
    vmin |= ((int32_t)args[1] << 8);
    vmin |= ((int32_t)args[2] << 16);
    vmin |= ((int32_t)args[3] << 24);

    //ppos = (uint8_t *)(&vmax);
    vmax = (int32_t)args[4];
    vmax |= ((int32_t)args[5] << 8);
    vmax |= ((int32_t)args[6] << 16);
    vmax |= ((int32_t)args[7] << 24);

    //ppos = (uint8_t *)(&acc);
    acc = (int32_t)args[8];
    acc |= ((int32_t)args[9] << 8);
    acc |= ((int32_t)args[10] << 16);
    acc |= ((int32_t)args[11] << 24);
    motorSetParams( vmin, vmax, acc );
}

/*
static void motor_pos( uint8_t * args )
{
    int ind = (args[0] > 0) ? 1 : 0;

    int pos = motorPos( ind );

    writeResult( pos & 0xFF );
    writeResult( (pos >> 8) & 0xFF );
    writeResult( (pos >> 16) & 0xFF );
    writeResult( (pos >> 24) & 0xFF );
    writeEom();
}
*/







/*


static void set_dac1( uint8_t * args )
{
    int valL = (int)args[0] + ((int)args[1] << 8);
    int valH = (int)args[2] + ((int)args[3] << 8);
    setDac1( valL, valH );
}

static void set_dac2( uint8_t * args )
{
    int valL = (int)args[0] + ((int)args[1] << 8);
    int valH = (int)args[2] + ((int)args[3] << 8);
    setDac2( valL, valH );
}

static void get_adc( uint8_t * args )
{
    (void)args;
    int res[4];
    instantAdc( res );
    int i;
    for ( i=0; i<4; i++ )
    {
        uint8_t b = (uint8_t)(res[i] & 0xFF);
        writeResult( b );
        b = (uint8_t)((res[i] >> 8) & 0xFF);
        writeResult( b );
        b = (uint8_t)((res[i] >> 16) & 0xFF);
        writeResult( b );
        b = (uint8_t)((res[i] >> 24) & 0xFF);
        writeResult( b );
    }
    writeEom();
}

static void set_osc_signals( uint8_t * arg )
{
    uint8_t v = arg[0];
    setOscSignals( v );
}

static void set_osc_period( uint8_t * arg )
{
    uint32_t v;
    v = (int)( arg[0] );
    v += ( (int)( arg[1] ) << 8 );
    v += ( (int)( arg[1] ) << 16 );
    v += ( (int)( arg[1] ) << 24 );
    setOscPeriod( v );
}

static void get_osc_data( uint8_t * arg )
{
    (void)arg;
    InputQueue * q = adcQueue();
    chSysLock();
        size_t cnt;
        cnt = (chQSpaceI( q ) / 12);
    chSysUnlock();
    size_t recInd;
    for ( recInd=0; recInd<cnt; recInd++ )
    {
        size_t sigInd;
        for ( sigInd=0; sigInd<4; sigInd++ )
        {
            size_t byteInd;
            for ( byteInd = 0; byteInd<3; byteInd++ )
            {
                uint8_t v;
                msg_t msg;

                msg = chIQGet( q );
                v = (uint8_t)msg;
                writeResult( v );
            }
        }
    }
    writeEom();
}

static void get_temp( uint8_t * args )
{
    (void)args;
    uint16_t t = lastTemp();

    uint8_t v = (uint8_t)(t>>8);
    writeResult( v );

    v = (uint8_t)(t & 0xFF);
    writeResult( v );

    writeEom();
}

static void set_trigger_en( uint8_t * args )
{
    setTrigEn( args[0] );
}

static void set_sweep_range( uint8_t * args )
{
    int dacs[4];
    uint8_t i;
    for ( i=0; i<4; i++ )
    {
        dacs[i] = ( (int)args[ 2*i ] << 8 ) + (int)args[2*i+1];
    }
    setSweepRange( dacs );
}

static void set_sweep_time( uint8_t * args )
{
    int ptsCnt = ( (int)args[0] << 24 ) + ( (int)args[1] << 16 ) + ( (int)args[2] << 8 ) + ( (int)args[3] );
    int period = ( (int)args[4] << 24 ) + ( (int)args[5] << 16 ) + ( (int)args[6] << 8 ) + ( (int)args[7] );
    setSweepTime( ptsCnt, period );
}

static void set_sweep_en( uint8_t * args )
{
    setSweepEn( args[0] );
}

static void get_sweep_en( uint8_t * args )
{
    (void)args;
    uint8_t v = sweepEn();
    writeResult( v );
    writeEom();
}

static void get_sweep_data( uint8_t * args )
{
    (void)args;
    InputQueue * q = sweepQueue();
    chSysLock();
        size_t cnt;
        cnt = (chQSpaceI( q ) / 12);
    chSysUnlock();
    size_t recInd;
    for ( recInd=0; recInd<cnt; recInd++ )
    {
        size_t sigInd;
        for ( sigInd=0; sigInd<4; sigInd++ )
        {
            size_t byteInd;
            for ( byteInd = 0; byteInd<3; byteInd++ )
            {
                uint8_t v;
                msg_t msg;

                msg = chIQGet( q );
                v = (uint8_t)msg;
                writeResult( v );
            }
        }
    }
    writeEom();

}

static void set_output( uint8_t * args )
{
    setOutput( args[0] );
}

 */



















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







