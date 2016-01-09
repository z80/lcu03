
#include "main_wnd.h"

#include "main_wnd.h"
#include <QFileDialog>
//#include "setup_dlg.h"
#include "host_tray.h"

#include "qwt_text_label.h"

#include <boost/bind.hpp>
#include <boost/bind/arg.hpp>
#include <boost/bind/placeholders.hpp>

const QString MainWnd::SETTINGS_INI = "./settings.ini";

MainWnd::MainWnd( HostTray * parent )
    : QMainWindow( 0 )
{
    ui.setupUi( this );


}

MainWnd::~MainWnd()
{
}

void MainWnd::loadSettings()
{
}

void MainWnd::saveSettings()
{
}


