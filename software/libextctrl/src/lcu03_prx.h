
#ifndef __LCU03_PRX_H_
#define __LCU03_PRX_H_

#include <string>
#include <QtCore>

class FactoryPrx;

class Lcu03Prx
{
public:
    ~Lcu03Prx();

    bool setShutter( bool open );
    bool shutter( bool & open );
    bool setPower( qreal pwr );
    bool power( qreal & pwr );
    bool setPolHor( bool hor );
    bool polHor( bool & hor );

private:
    Lcu03Prx( FactoryPrx * owner );

    class PD;
    PD * pd;

    friend class FactoryPrx;
};



#endif





