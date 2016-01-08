
#ifndef __VOLTAMP_IO_H_
#define __VOLTAMP_IO_H_

#include <QtCore>

class VoltampIo
{
public:
    VoltampIo();
    ~VoltampIo();

    QStringList enumDevices();
    bool open( int index = 0 );
    bool isOpen() const;
    void close();

    bool hardware_version( QString & stri );
    bool firmware_version( QString & stri );
    bool runBootloader();

    bool setLed( int leds );

    bool setShutter( bool open );
    bool moveMotor( int index, int pos );
    bool stopMotor( int index );
    bool motorInMotion( int index, bool & running, int & pos );
    bool sensor( int index, bool & triggered, int & pos );
    bool motorSetPos( int index, int pos );
    bool motorSetParams( int vmin, int vmax, int acc );
    bool motorPos( int index, int & at );

    /*
    bool setDac1( int dacA, int dacB );
    bool setDac2( int dacA, int dacB );
    bool instantAdc( int * data );

    bool setOscSignals( bool * en );
    bool setOscPeriod( int ptsCnt, qreal periodMs );
    bool oscData( QVector<int> & data );

    bool temperature( qreal & temp );

    bool setTriggerEn( bool en );

    bool setSweepRange( int * dacTo );
    bool setSweepTime( int ptsCnt, int period );
    bool setSweepEn( bool en );
    bool sweepEn( bool & en );
    bool sweepData( QVector<int> & data );

    bool setOutput( int o );
    */





    bool bootloaderHardwareVersion( QString & stri );
    bool bootloaderFirmwareVersion( QString & stri );
private:
    bool bootloaderPush( int cnt, quint8 * data );
    bool bootloaderWriteSector( int index );
    bool bootloaderStartFirmware();
public:
    bool firmwareUpgrade( const QString & fileName );

    bool setArgs( quint8 * data, int dataSz );
    bool execFunc( quint16 funcId );
    int  readData( quint8 * data, int dataSz );
public:
    int write( quint8 * data, int dataSz );
    int read( quint8 * data, int dataSz, bool & eom );

private:
    class PD;
    PD * pd;
};


#endif


