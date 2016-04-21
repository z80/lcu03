
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

    bool setShutter( int state );
    bool moveMotor( int8_t * pos );
    bool stopMotor( int index );
    bool motorInMotion( int index, bool & running, int & pos );
    bool sensor( int index, bool & triggered, int & pos );
    bool motorSetPos( int index, int pos );
    bool motorSetParams( int vmin, int vmax, int acc );
    bool motorPos( int index, int & at );

    // EEPROM low level.
    bool eepromWrite( quint8 addr, quint8 * data, quint8 size );
    bool eepromRead( quint8 addr, quint8 * data, quint8 & size );
    bool eepromSetSdAddr( quint8 addr );

    // EEPROM high level functions.
    // Serial number.
    bool setSerialNumber( quint16 sn, bool overwrite = false );
    bool serialNumber( quint16 & sn );
    // End positions.
    bool writeEndPositions( int * pos );
    bool readEndPositions( int * pos, bool & valid );
    // Current positions.
    bool writeCurrentPositions( int * pos );
    bool readCurrentPositions( int * pos, bool & valid );


    bool bootloaderHardwareVersion( QString & stri );
    bool bootloaderFirmwareVersion( QString & stri );

    void delay();
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


