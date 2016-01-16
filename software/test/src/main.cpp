
#include <QtGui>
#include <QApplication>
#include "voltamp_io.h"

#include "qextserialport.h"


int main( int argc, char * argv[] )
{
    QApplication app( argc, argv );

    VoltampIo io;
    bool res;
    QStringList l = io.enumDevices();
    qDebug() << l;
    res = io.open( 4 );
    if ( !res )
        return -1;

    /*
    quint8 v;
    bool eom;
    v = 234;
    int cnt;
    cnt = io.write( &v, 1 );
    cnt = io.read( &v, 1, eom );
    qDebug() << v;

    for ( v=0; v<30; v++ )
    {
        cnt = io.write( &v, 1 );
        cnt = io.read( &v, 1, eom );
        qDebug() << v;
    }
    */

    QString stri;
    QVector<int> data;

    res = io.hardware_version( stri );
    res = io.firmware_version( stri );

    int x[4];
    x[0] = -100;
    x[1] = 1234;
    x[2] = -4568;
    x[3] = 12345;

    int y[4];
    bool valid;
    res = io.readEndPositions( y, valid );

    res = io.writeEndPositions( x );

    res = io.readEndPositions( y, valid );

    res = io.motorPos( 0, x[0] );

    res = io.motorPos( 1, x[1] );

    res = io.readCurrentPositions( y, valid );

    res = io.writeCurrentPositions( x );

    res = io.readCurrentPositions( y, valid );


    /*
    quint8 bdata[8];
    quint8 bsize = sizeof( bdata );

    res = io.eepromRead( 0, bdata, bsize );


    for ( int i=0; i<sizeof( bdata ); i++ )
        bdata[i] = i+1;
    bsize = sizeof( bdata );
    res = io.eepromWrite( 0, bdata, bsize );

    quint8 bdata2[8];
    bsize = sizeof( bdata );
    res = io.eepromRead( 0, bdata2, bsize );
    */

    io.close();
    
    return 0;
}

