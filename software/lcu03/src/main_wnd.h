
#ifndef __MAIN_WND_H_
#define __MAIN_WND_H_

#include <QtGui>
#include <QMessageBox>
#include <QtConcurrent/QtConcurrentRun>

#include "ui_main_wnd.h"
#include "exec.h"
#include "voltamp_io.h"

#include "thread_ice.h"

class HostTray;
class SettingsDlg;
class Lcu03Ice;
class HelpMainWnd;

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
    void slotHelp();
    void slotAbout();
    void slotFirmwareUpdate();

protected:
    void closeEvent( QCloseEvent * e );

protected:
    void  refreshDevicesList();
    void  reopen();
    bool  ensureOpen();
    int   powerToStep( qreal power );
    int   polarizationToStep( bool vert );
    qreal stepToPower( int step );
    bool  stepToPloarization( int step );
    void  bindSlots();

    // Ice procedures.
    bool setShutterIce( bool open );
    bool shutterIce( bool & open );
    bool setPowerIce( double power );
    bool powerIce( double & power );
    bool setPolHorIce( bool hor );
    bool polHorIce( bool & hor );
    // Ice slots.
private slots:
    void slotSetShutterIce();
    void slotShutterIce();
    void slotSetPowerIce();
    void slotPowerIce();
    void setPolHorIce();
    void slotPolHorIce();
    // Ice signals.
signals:
    void sigSetShutterIce();
    void sigShutterIce();
    void sigSetPowerIce();
    void sigPowerIce();
    void sigSetPolHorIce();
    void sigPolHorIce();
public:
    // Ice arguments.
    QQueue<QVariant> iceArgs;
    QMutex           iceMutex;
    QSemaphore       iceSemaphore;


    void listen();
    void setTrayToolTip( const QString & stri );

    HostTray * m_hostTray;

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
    ::IceUtil::Handle<ThreadIce> m_thread;
    QString m_host;
    int     m_port;
    bool    m_doListen;


    // Device servicing.
    VoltampIo * io;
    int deviceIndex;
    QList<QAction *> devicesList;


    Ui_MainWnd ui;

    HelpMainWnd * m_helpBrowser;
    
    static const QString SETTINGS_INI;

    friend class SettingsDlg;
    friend class Lcu03Ice;
};


#endif



