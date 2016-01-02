
#include "shutter_ctrl.h"
#include "hal.h"

#define SH_PORT_0 GPIOA
#define SH_PIN_0  0
#define SH_PORT_1 GPIOC
#define SH_PIN_1  15
#define SH_DELAY 1000

static WORKING_AREA( waShutter, 256 );
static msg_t shutterThread( void *arg );

#define SH_QUEUE_SZ   (320)
InputQueue  sh_queue;
uint8_t     sh_queue_buffer[SH_QUEUE_SZ];


void shutterInit( void )
{
	palClearPad( SH_PORT_0, SH_PIN_0 );
	palClearPad( SH_PORT_1, SH_PIN_1 );
    palSetPadMode( SH_PORT_0, SH_PIN_0, PAL_MODE_OUTPUT_PUSHPULL );
    palSetPadMode( SH_PORT_1, SH_PIN_1, PAL_MODE_OUTPUT_PUSHPULL );
}

void setShutter( uint8_t en )
{

}


static msg_t shutterThread( void *arg )
{
    (void)arg;
    chRegSetThreadName( "sh" );
    while ( 1 )
    {
    }

    return 0;
}



