
#ifndef __LCU03_H_
#define __LCU03_H_

class Lcu03
{
public:
    Lcu03();
    ~Lcu03();

    bool moveMotor( int index, int value );
    int  setShutter( bool open );
    bool setLeds( int value );
private:
    class PD;
    PD * pd;
};


#endif
