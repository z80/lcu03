
#include "ch.h"
#include "hal.h"

#include "iwdg.h"
#include "moto_ctrl.h"
#include "led_ctrl.h"
#include "shutter_ctrl.h"
//#include "dac_ctrl.h"
//#include "adc_ctrl.h"
//#include "timer_ctrl.h"
//#include "temp_ctrl.h"
//#include "sweep_ctrl.h"
//#include "output_ctrl.h"
#include "cpu_io.h"



#define PWM_FREQ 10000

static PWMConfig pwmcfgMotor0 = {
  PWM_FREQ,
  PWM_FREQ, // Initial PWM period 1S.
  NULL,
  {
   { PWM_OUTPUT_DISABLED, NULL },
   { PWM_OUTPUT_DISABLED, NULL },
   { PWM_OUTPUT_ACTIVE_HIGH, NULL },
   { PWM_OUTPUT_DISABLED, NULL }
  },
  0,
  //0,
#if STM32_PWM_USE_ADVANCED
  0
#endif
};

static PWMConfig pwmcfgMotor1 = {
  PWM_FREQ,
  PWM_FREQ, // Initial PWM period 1S.
  NULL,
  {
   { PWM_OUTPUT_DISABLED, NULL },
   { PWM_OUTPUT_DISABLED, NULL },
   { PWM_OUTPUT_ACTIVE_HIGH, NULL },
   { PWM_OUTPUT_DISABLED, NULL }
  },
  0,
  //0,
#if STM32_PWM_USE_ADVANCED
  0
#endif
};


int main(void)
{
    halInit();
    chSysInit();

    initCpuIo();
    initLed();
    shutterInit();
    motorInit();
    setLeds( 3 );


    //pwmStart( &PWMD3, &pwmcfgMotor0 );
    //pwmDisableChannel( &PWMD3, 2 );
    //palSetPadMode( GPIOB, 0, PAL_MODE_STM32_ALTERNATE_PUSHPULL );

    int period;
    period = PWM_FREQ / 100;
    //pwmChangePeriod( &PWMD3, period );
    //pwmEnableChannel( &PWMD3, 2, PWM_PERCENTAGE_TO_WIDTH( &PWMD3, 5000 ) );


    /*
    palSetPadMode( GPIOA, 1, PAL_MODE_OUTPUT_PUSHPULL );
    int i;
    for ( i=0; i<100; i++ )
    {
        palClearPad( GPIOA, 1 );
        palSetPad( GPIOA, 1 );
    }


    pwmStart( &PWMD2, &pwmcfgMotor1 );
    pwmDisableChannel( &PWMD2, 1 );
    palSetPadMode( GPIOA, 1, PAL_MODE_STM32_ALTERNATE_PUSHPULL );

    pwmChangePeriod( &PWMD2, period );
    pwmEnableChannel( &PWMD2, 0, PWM_PERCENTAGE_TO_WIDTH( &PWMD2, 5000 ) );
    pwmEnableChannel( &PWMD2, 1, PWM_PERCENTAGE_TO_WIDTH( &PWMD2, 5000 ) );
    pwmEnableChannel( &PWMD2, 2, PWM_PERCENTAGE_TO_WIDTH( &PWMD2, 5000 ) );
    pwmEnableChannel( &PWMD2, 3, PWM_PERCENTAGE_TO_WIDTH( &PWMD2, 5000 ) );
    */

    // High current.
    //palClearPad( GPIOB, 13 );


    while ( 1 )
    {
        //processCpuIo();

        chThdSleepSeconds( 5 );

        while ( 1 )
        {
            //setShutter( 1 );
            motorMove( 0, 10000 );
            chThdSleepSeconds( 5 );





            //setShutter( 0 );
            motorMove( 0, -10000 );
            chThdSleepSeconds( 5 );
        }

    }
    return 0;
}

