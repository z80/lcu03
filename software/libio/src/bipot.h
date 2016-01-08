
#ifndef __BIPOT_H_
#define __BIPOT_H_

#include <QtCore>

class Bipot
{
public:
    Bipot();
    ~Bipot();

    // Opening. closing the hardware.
    QStringList deviceList();
    bool open( int index = 0 );
    bool isOpen();
    void close();

    QString hardwareVersion();
    QString firmwareVersion();

    bool runBootloader();
    bool bootloaderHardwareVersion( QString & stri );
    bool bootloaderFirmwareVersion( QString & stri );
    bool firmwareUpgrade( const QString & fileName );

private:
    class PD;
    PD * pd;
};



#endif






