
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

    res = io.setLed( 1 );
    res = io.setLed( 2 );

    int at;
    res = io.motorPos( 0, at );
    res = io.moveMotor( 0, 10000 ); 
    res = io.motorPos( 0, at );
    bool triggered;
    int pos;
    res = io.sensor( 0, triggered, pos ); 
    res = io.sensor( 1, triggered, pos ); 

    res = io.moveMotor( 0, -10000 );
    res = io.motorPos( 0, at );
    res = io.sensor( 0, triggered, pos ); 
    res = io.sensor( 1, triggered, pos ); 

    res = io.motorPos( 1, at );
    res = io.moveMotor( 1, 10000 ); 
    res = io.motorPos( 1, at );
    res = io.moveMotor( 1, -10000 );
    res = io.motorPos( 1, at );

    io.close();
    
    return 0;
}

