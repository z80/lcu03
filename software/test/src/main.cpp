
#include <QtGui>
#include <QApplication>
#include "voltamp_io.h"

#include "help_main_wnd.h"

#include "qextserialport.h"


int main( int argc, char * argv[] )
{
    QApplication app( argc, argv );

    HelpMainWnd * hmw = new HelpMainWnd( "./help.qhc" );
    hmw->show();

    int res = app.exec();
    
    return 0;
}

