
#ifndef __MAIN_WND_H_
#define __MAIN_WND_H_

#include <QtGui>
#include <QMessageBox>
#include <QtConcurrent/QtConcurrentRun>

#include "ui_main_wnd.h"
#include "exec.h"
#include "voltamp_io.h"

//#include "thread_ice.h"

class HostTray;
class SettingsDlg;

class MainWnd: public QMainWindow
{
    Q_OBJECT
public:
    MainWnd( HostTray * parent = 0 );
    ~MainWnd();

    void loadSettings( bool hdw = false );
    void saveSettings( bool hdw = false );

public slots:
    void slotQuit();
    // Control slots.
    void slotShutter();
    void slotPower();
    void slotPolarization();
    // Device slots.
    void slotDevice();
    void slotReopen();
    // Setup slots.
    void slotSetup();
    void slotRemoteSetup();
    // Help slots.
    void slotAbout();
    void slotFirmwareUpdate();

protected:
    void closeEvent( QCloseEvent * e );

protected:
    void refreshDevicesList();
    void reopen();
    bool ensureOpen();
    int  powerToStep( qreal power );
    int  polarizationToStep( bool vert );
    qreal stepToPower( int step );
    bool stepToPloarization( int step );
    void bindSlots();
    void listen();


    // Shutte driver.
    int shutterOpened, 
        shutterClosed;
    bool shutter;

    // Polarization driver.
    int  pol0deg, 
         pol90deg;
    bool polVert;

    // Filter driver.
    int filterMin, 
        filterMax;
    int filter;

    // Remore control.
    //::IceUtil::Handle<ThreadIce> m_thread;
    //QString m_host;
    //int     m_port;
    //bool    m_doListen;


    // Device servicing.
    VoltampIo * io;
    int deviceIndex;
    QList<QAction *> devicesList;


    Ui_MainWnd ui;
    
    static const QString SETTINGS_INI;

    friend class SettingsDlg;
};


#endif



