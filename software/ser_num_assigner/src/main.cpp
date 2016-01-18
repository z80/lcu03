
#include <QtGui>
#include <QApplication>
#include "voltamp_io.h"

#include "qextserialport.h"

#include <iostream>

int main( int argc, char * argv[] )
{
    QApplication app( argc, argv );

    VoltampIo io;
    bool res;
    QStringList l = io.enumDevices();
    qDebug() << l;

    int portIndex;
    std::cout << "Serial port index: ";
    std::cin >> portIndex;

    res = io.open( portIndex );
    if ( !res )
    {
        std::cout << "Failed to open port!\n";
        return -1;
    }

    std::cout << std::endl;
    std::cout << std::endl;
    std::cout << std::endl;

    quint16 sn;

    res = io.serialNumber( sn );
    qDebug() << QString( "Read serial number: %1" ).arg( sn );

    int newSerial;
    std::string choise;
    std::cout << "New serial number (<=0 to do nothing): ";
    std::cin >> newSerial;

    bool overwrite = ( newSerial > 0 );
    if ( !overwrite )
        return 0;
    sn = static_cast<quint16>( newSerial );

    res = io.setSerialNumber( sn, true );
    qDebug() << ( ( res ) ? "Write ok" : "Error" );

    res = io.serialNumber( sn );
    qDebug() << QString( "Read back: %1" ).arg( sn );

    io.close();
    
    return 0;
}

