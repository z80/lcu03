
#include "ch.h"
#include "hal.h"

#include "iwdg.h"
#include "led_ctrl.h"
#include "shutter_ctrl.h"
#include "moto_ctrl.h"
//#include "dac_ctrl.h"
//#include "adc_ctrl.h"
//#include "timer_ctrl.h"
//#include "temp_ctrl.h"
//#include "sweep_ctrl.h"
//#include "output_ctrl.h"
#include "cpu_io.h"

int main(void)
{
    halInit();
    chSysInit();

    initCpuIo();
    //initTemp();
    initLed();
    shutterInit();
    motorInit();
    //initOutput();
    setLeds( 3 );

    while ( 1 )
    {
    	//processCpuIo();

    	chThdSleepSeconds( 5 );


    	while ( 1 )
    	{
    		setShutter( 1 );
    		chThdSleepSeconds( 3 );
    		setShutter( 0 );
    		chThdSleepSeconds( 3 );
    	}

    }
    return 0;
}
