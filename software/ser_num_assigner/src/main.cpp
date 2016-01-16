
#include <QtGui>
#include <QApplication>
#include "voltamp_io.h"

#include "qextserialport.h"

#include <iostream>

int main( int argc, char * argv[] )
{
    QApplication app( argc, argv );

    if ( argc < 2 )
    {
        std::cout << "Usage: [<COM PORT>] <SN> [<OVERWRITE>]" << std::endl;
        return 0;
    }

    int portIndex;
    if ( argc < 3 )
        portIndex = 4;
    else
        portIndex = QString( argv[1] ).toInt();
    VoltampIo io;
    bool res;
    QStringList l = io.enumDevices();
    //qDebug() << l;
    res = io.open( portIndex );
    if ( !res )
        return -1;

    std::cout << std::endl;
    std::cout << std::endl;
    std::cout << std::endl;

    quint16 sn;

    res = io.serialNumber( sn );
    qDebug() << QString( "Read serial number: %1" ).arg( sn );

    sn = (argc < 3) ? QString( argv[1] ).toInt() : QString( argv[2] ).toInt();

    bool overwrite = ( argc <= 3 ) ? false : ( QString( argv[3] ).toInt() > 0 );

    if ( overwrite )
    {
        std::string choise;
        std::cout << "Really overwrite serial number? (yes/no): ";
        std::cin >> choise;
        if ( choise != "yes" )
            overwrite = false;
    }

    res = io.setSerialNumber( sn, overwrite );
    qDebug() << ( ( res ) ? "Write ok" : "Error" );

    res = io.serialNumber( sn );
    qDebug() << QString( "Read back: %1" ).arg( sn );

    io.close();
    
    return 0;
}

