
#ifndef __MAIN_WND_H_
#define __MAIN_WND_H_

#include <QtGui>
#include <QMessageBox>
#include <QtConcurrent/QtConcurrentRun>

#include "ui_main_wnd.h"
#include "exec.h"

//#include "thread_ice.h"

class HostTray;

class MainWnd: public QMainWindow
{
    Q_OBJECT
public:
    MainWnd( HostTray * parent = 0 );
    ~MainWnd();

    void loadSettings();
    void saveSettings();

public slots:
    void slotQuit();
protected:
    void closeEvent( QCloseEvent * e );

private:
    Ui_MainWnd ui;
    
    static const QString SETTINGS_INI;
};


#endif



