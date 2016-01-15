
#include "shutter_ctrl.h"
#include "hal.h"

#define SH_PORT_0 GPIOA
#define SH_PIN_0  0
#define SH_PORT_1 GPIOC
#define SH_PIN_1  15


#define SH_ACTIVE  5
#define SH_SLEEP   700
#define SH_REPEATS 3

static WORKING_AREA( waShutter, 512 );
static msg_t shutterThread( void *arg );

#define SH_QUEUE_SZ   (3)
InputQueue  sh_queue;
uint8_t     sh_queue_buffer[SH_QUEUE_SZ];


void shutterInit( void )
{
	palClearPad( SH_PORT_0, SH_PIN_0 );
	palClearPad( SH_PORT_1, SH_PIN_1 );
    palSetPadMode( SH_PORT_0, SH_PIN_0, PAL_MODE_OUTPUT_PUSHPULL );
    palSetPadMode( SH_PORT_1, SH_PIN_1, PAL_MODE_OUTPUT_PUSHPULL );

    // Command queue init.
    chIQInit( &sh_queue, sh_queue_buffer, SH_QUEUE_SZ, NULL );
    // Execution thread init.
    chThdCreateStatic( waShutter, sizeof(waShutter), NORMALPRIO, shutterThread, NULL );
}

void setShutter( uint8_t en )
{
	chSysLock();
	  chIQPutI( &sh_queue, ( en > 0 ) ? 1 : 2 );
	chSysUnlock();
}

void haltShutterI( void )
{
	palClearPad( SH_PORT_0, SH_PIN_0 );
	palClearPad( SH_PORT_1, SH_PIN_1 );
}


static msg_t shutterThread( void *arg )
{
    (void)arg;
    chRegSetThreadName( "sh" );
    while ( 1 )
    {
    	msg_t msg;
    	msg = chIQGet( &sh_queue );

    	uint8_t i;
    	for ( i=0; i<SH_REPEATS; i++ )
    	{
            // Set Appropriate direction.
            if ( msg & 1 )
                palSetPad( SH_PORT_0, SH_PIN_0 );
            else
                palClearPad( SH_PORT_0, SH_PIN_0 );
            if ( msg & 2 )
                palSetPad( SH_PORT_1, SH_PIN_1 );
            else
                palClearPad( SH_PORT_1, SH_PIN_1 );
            // Wait till mtor moves shutter.
            chThdSleepMilliseconds( SH_ACTIVE );
            // Turn motor driver to sleep mode (both outputs are zero).
            palClearPad( SH_PORT_0, SH_PIN_0 );
            palClearPad( SH_PORT_1, SH_PIN_1 );
            // And wait for sleep interval.
            chThdSleepMilliseconds( SH_SLEEP );
    	}
    }

    return 0;
}



