
#ifndef __DIGITIZER_ICE_
#define __DIGITIZER_ICE_

#include "factory.ice"

module Device
{
    interface Lcu03 extends Factory::DeviceAbs
    {
        bool setShutter( bool open );
        bool shutter( out bool open );
        bool setPower( double value );
        bool power( out double value );
        bool setPolHor( bool hor );
        bool polHor( out bool hor );
    };
};


#endif





