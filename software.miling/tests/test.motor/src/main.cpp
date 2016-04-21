
#include <QtGui>
#include <QApplication>
#include "voltamp_io.h"

int main( int argc, char * argv[] )
{
    QApplication app( argc, argv );

    VoltampIo * io = new VoltampIo();
    QStringList l = io->enumDevices();
    qDebug() << l;

    if ( !io->open( 0 ) )
        return false;

    int8_t pos[4] = { 100, -100, 100, -100 };
    io->moveMotor( pos );
    io->moveMotor( pos );
    io->moveMotor( pos );
    io->moveMotor( pos );
    io->moveMotor( pos );



    io->close();
    delete io;

    int res = app.exec();
    
    return 0;
}

