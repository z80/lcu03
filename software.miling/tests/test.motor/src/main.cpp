
#include <QtGui>
#include <QApplication>
#include "voltamp_io.h"

int main( int argc, char * argv[] )
{
    QApplication app( argc, argv );

    VoltampIo * io = new VoltampIo();
    QStringList l = io->enumDevices();
    qDebug() << l;

    if ( !io->open( 32 ) )
    {
        qDebug() << "ERROR: Failed to open serial port!";
        return 1;
    }

    qDebug() << "SUCCESS: Opened port successfully!";
    //return 0;

    QString stri;
    io->firmware_version( stri );
    qDebug() << stri;
    stri = "";
    qint8 pos[4] = { 100, -100, 100, -100 };
    io->moveMotor( pos );
    io->firmware_version( stri );
    qDebug() << stri;

    qDebug() << "Here!";
    return 0;



    io->moveMotor( pos );
    io->firmware_version( stri );
    qDebug() << stri;

    io->moveMotor( pos );
    io->firmware_version( stri );
    qDebug() << stri;

    io->moveMotor( pos );
    io->firmware_version( stri );
    qDebug() << stri;

    io->moveMotor( pos );
    io->firmware_version( stri );
    qDebug() << stri;


    io->close();
    delete io;

    //int res = app.exec();
    
    return 0;
}

