
#include "bipot.h"
#include "voltamp_io.h"
#include <QMessageBox>



class Bipot::PD
{
public:
    PD() {}
    ~PD() {}

    VoltampIo  * io;

    static const int MEASURES_CNT;
};

const int Bipot::PD::MEASURES_CNT = 128;



Bipot::Bipot()
{
    pd = new PD();
    VoltampIo * io = new VoltampIo();
    pd->io = io;


}

Bipot::~Bipot()
{
    delete pd->io;
    delete pd;
}

QStringList Bipot::deviceList()
{
    VoltampIo & io = *(pd->io);
    QStringList l = io.enumDevices();
    return l;
}

bool Bipot::open( int index )
{
    VoltampIo & io = *(pd->io);
    bool res = io.open( index );
    return res;
}

bool Bipot::isOpen()
{
    VoltampIo & io = *(pd->io);
    bool res = io.isOpen();
    return res;
}

void Bipot::close()
{
    VoltampIo & io = *(pd->io);
    io.close();
}

QString Bipot::hardwareVersion()
{
    VoltampIo & io = *(pd->io);
    QString stri;
    bool res = io.hardware_version( stri );    
    if ( !res )
        return QString();
    return stri;
}

QString Bipot::firmwareVersion()
{
    VoltampIo & io = *(pd->io);
    QString stri;
    bool res = io.firmware_version( stri );    
    if ( !res )
        return QString();
    return stri;
}

bool Bipot::runBootloader()
{
    VoltampIo & io = *(pd->io);

    bool res = io.runBootloader();
    if ( !res )
        return false;
    return true;
}

bool Bipot::bootloaderHardwareVersion( QString & stri )
{
    VoltampIo & io = *(pd->io);

    bool res = io.bootloaderHardwareVersion( stri );
    if ( !res )
        return false;
    return true;
}

bool Bipot::bootloaderFirmwareVersion( QString & stri )
{
    VoltampIo & io = *(pd->io);

    bool res = io.bootloaderFirmwareVersion( stri );
    if ( !res )
        return false;
    return true;
}

bool Bipot::firmwareUpgrade( const QString & fileName )
{
    VoltampIo & io = *(pd->io);

    bool res = io.firmwareUpgrade( fileName );
    if ( !res )
        return false;
    return true;
}







