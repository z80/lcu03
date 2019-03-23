
#include "ch.h"
#include "hal.h"

#include "iwdg.h"
#include "moto_ctrl.h"
#include "led_ctrl.h"
#include "shutter_ctrl.h"
#include "eeprom_ctrl.h"
//#include "adc_ctrl.h"
//#include "timer_ctrl.h"
//#include "temp_ctrl.h"
//#include "sweep_ctrl.h"
//#include "output_ctrl.h"
#include "cpu_io.h"



#define PWM_FREQ 10000




int main(void)
{
    halInit();
    chSysInit();

    initLed();
    initCpuIo();
    eepromInit();  // This one should be initialized before motors to read motor positions data address.
    shutterInit();
    motorInit();
    setLeds( 0 ); //setLeds( 3 ); // Make LEDs 0 to prevent blinking.



    /*
    uint8_t data[8];
    int pos0 = 4321;
    data[0] = (uint8_t)(pos0 & 0xFF);
    data[1] = (uint8_t)((pos0 >> 8) & 0xFF);
    data[2] = (uint8_t)((pos0 >> 16) & 0xFF);
    data[3] = (uint8_t)((pos0 >> 24) & 0xFF);

    int pos1 = -1234;
    data[4] = (uint8_t)(pos1 & 0xFF);
    data[5] = (uint8_t)((pos1 >> 8) & 0xFF);
    data[6] = (uint8_t)((pos1 >> 16) & 0xFF);
    data[7] = (uint8_t)((pos1 >> 24) & 0xFF);

    eepromClrSdData();
    eepromAddSdData( 8, data );

    chSysLock();
        // Invoke emergency EEPROM write.
        eepromEmergencyI();
    chSysUnlock();
    */

    while ( 1 )
    {
        processCpuIo();

        /*
        chThdSleepSeconds( 5 );

        
        while ( 1 )
        {
            debugOutput();
            setShutter( 1 );
            debugOutput();
        	if ( !motorInMotion( 0, 0 ) )
        		motorMove( 0, 10000 );
            debugOutput();
            chThdSleepSeconds( 15 );
            debugOutput();

            if ( !motorInMotion( 1, 0 ) )
                motorMove( 1, 10000 );
            debugOutput();
            chThdSleepSeconds( 15 );
            debugOutput();




            setShutter( 0 );
            debugOutput();
        	if ( !motorInMotion( 0, 0 ) )
        		motorMove( 0, -10000 );
            debugOutput();
            chThdSleepSeconds( 15 );
            debugOutput();

            if ( !motorInMotion( 1, 0 ) )
                motorMove( 1, -10000 );
            debugOutput();
            chThdSleepSeconds( 15 );
            debugOutput();

        }*/
        

    }
    return 0;
}

