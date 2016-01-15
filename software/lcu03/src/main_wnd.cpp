
#include "main_wnd.h"

#include "main_wnd.h"
#include <QFileDialog>
//#include "setup_dlg.h"
#include "settings_dlg.h"
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

    bindSlots();
    io = new VoltampIo();
    refreshDevicesList();
    loadSettings( false );
    reopen();
    loadSettings( true );
}

MainWnd::~MainWnd()
{
    delete io;
}

void MainWnd::loadSettings( bool hdw )
{
    QSettings s( SETTINGS_INI, QSettings::IniFormat );

    deviceIndex  = s.value( "deviceIndex",  "0" ).toInt();
    //m_host   = s.value( "host", "" ).toString();
    //m_port   = s.value( "port", 21345 ).toInt();
    //m_doListen = s.value( "listen", false ).toBool();

    shutterOpened = s.value( "shutterOpened", 1 ).toInt();
    shutterClosed = s.value( "shutterClosed", 0 ).toInt();
    shutter       = s.value( "shutter", 2 ).toInt();

    
    if ( hdw )
    {
        bool res = ensureOpen();
        if ( !res )
            return;
        int pos[4];
        bool valid;
        res = io->readEndPositions( pos, valid );
        if ( !res )
        {
            QMessageBox::critical( this, "Error", "Falied to load positions!" );
            io->close();
            return;
        }
        else
        {
            if ( valid )
            {
                filterMin = pos[0];
                filterMax = pos[1];
                pol0deg   = pos[2];
                pol90deg  = pos[3];
            }
            else
            {
                filterMin = -1000;
                filterMax = 1000;
                pol0deg   = -1000;
                pol90deg  = 1000;
            }
        }

        // Read current positions.
        res = ( io->motorPos( 0, pos[0] ) ) && 
              ( io->motorPos( 1, pos[1] ) );
        if ( !res )
        {
            QMessageBox::critical( this, "Error", "Falied to load current positions!" );
            io->close();
            return;
        }
        else
        {
            if ( valid )
            {
                int filter = pos[0];
                qreal power = stepToPower( filter );
                ui.power->setValue( power );

                int polarization = pos[1];
                bool vert = stepToPloarization( polarization );
                ui.vert->setChecked( vert );
                ui.hor->setChecked( !vert );
            }
        }
    }
}

void MainWnd::saveSettings( bool hdw )
{
    QSettings s( SETTINGS_INI, QSettings::IniFormat );

    s.setValue( "deviceIndex",  deviceIndex );
    //m_host   = s.value( "host", "" ).toString();
    //m_port   = s.value( "port", 21345 ).toInt();
    //m_doListen = s.value( "listen", false ).toBool();

    s.setValue( "shutterOpened", shutterOpened );
    s.setValue( "shutterClosed", shutterClosed );
    s.setValue( "shutter",       shutter );

    if ( hdw )
    {
        bool res = ensureOpen();
        if ( !res )
            return;
        int pos[4];
        pos[0] = filterMin;
        pos[1] = filterMax;
        pos[2] = pol0deg;
        pos[3] = pol90deg;
        res = io->writeEndPositions( pos );
        if ( !res )
        {
            QMessageBox::critical( this, "Error", "Falied to save positions!" );
            io->close();
        }
    }
}

void MainWnd::slotQuit()
{
    saveSettings( true );
}

void MainWnd::slotShutter()
{
    QObject * snd = sender();
    QRadioButton * rad = qobject_cast<QRadioButton *>( snd );
    int sh;
    if ( rad == ui.shutterOpen )
    {
        sh = shutterOpened;
        shutter = true;
    }
    else
    {
        sh = shutterClosed;
        shutter = false;
    }
    bool res = ensureOpen();
    if ( !res )
        return;
    res = io->setShutter( sh );
    if ( !res )
    {
        QMessageBox::critical( this, "Error", "Falied to set shutter!" );
        io->close();
    }
}

void MainWnd::slotPower()
{
    qreal pwr = ui.power->value();
    int step = powerToStep( pwr );
    bool res = ensureOpen();
    if ( !res )
        return;
    res = io->moveMotor( 0, step );
    if ( !res )
    {
        QMessageBox::critical( this, "Error", "Falied to set power!" );
        io->close();
    }
}

void MainWnd::slotPolarization()
{
    QObject * snd = sender();
    QRadioButton * rad = qobject_cast<QRadioButton *>( snd );
    int step;
    if ( rad == ui.vert )
        step = polarizationToStep( true );
    else
        step = polarizationToStep( false );
    
    bool res = ensureOpen();
    if ( !res )
        return;
    res = io->moveMotor( 1, step );
    if ( !res )
    {
        QMessageBox::critical( this, "Error", "Falied to set polarization!" );
        io->close();
    }
}

void MainWnd::slotDevice()
{
    foreach( QAction * a, devicesList )
        a->setChecked( false );
    QAction * a = qobject_cast<QAction *>( sender() );
    int index = devicesList.indexOf( a );
    bool res = io->open( index );
    a->setChecked( res );
    deviceIndex = index;
    // Save only device index. And non't touch hardware settings.
    saveSettings( false );
}

void MainWnd::slotReopen()
{
}

void MainWnd::slotSetup()
{
    SettingsDlg sd( this );
    int res = sd.exec();
    if ( res == QDialog::Accepted )
        saveSettings( true );
}

void MainWnd::slotRemoteSetup()
{
    //SetupDlg sd;
    //sd.setPort( m_port );
    //sd.setListen( m_doListen );
    //if ( sd.exec() )
    //{
    //    m_host = sd.host();
    //    if ( m_host == "All interfaces" )
    //        m_host = "";
    //    m_port = sd.port();
    //    m_doListen = sd.listen();
    //    
    //    if ( m_doListen )
    //        this->listen();
    //    else
    //    {
    //        if ( m_thread )
    //            m_thread->shutdown();
    //    }
    //}    
}

void MainWnd::slotAbout()
{
    QString fmwVer;
    if ( io->isOpen() )
    {
        bool res = io->firmware_version( fmwVer );
        if ( !res )
        {
            fmwVer = "undefined";
        }
    }
    else
        fmwVer = "undefined";
    QString stri = QString( "LCU03 control module version %1\nfirmware version: \"%2\"" ).arg( SOFTWARE_VERSION ).arg( fmwVer );
    QMessageBox::about( this, "About", stri );
}

void MainWnd::slotFirmwareUpdate()
{
    //disconnect( this,      SIGNAL(sigReplot()), this, SLOT(slotReplot()) );
    //disconnect( tempTimer, SIGNAL(timeout()),   this, SLOT(slotTemp()) );
    qApp->processEvents();

    //QMutexLocker lock( &mutex );
    do {
        if ( !io->isOpen() )
        {
            reopen();
            if ( !io->isOpen() )
            {
                QMessageBox::critical( this, "Error", "Falied to get access to hardware! It might be it isn't even connected." );
                return;
            }
        }

        QString stri;

        QString fileName = QFileDialog::getOpenFileName( this,
                        tr("Open firmware file"), "", tr("Text Files (*.bin)") );
        if ( fileName.length() > 0 )
        {
            stri = QString( "Press \'Ok\' button to upgrade firmware." );
            QMessageBox::StandardButton choise =QMessageBox::warning( this, "Directions", stri, QMessageBox::Ok | QMessageBox::Cancel );
            if ( choise != QMessageBox::Ok )
                break;

            bool res = io->runBootloader();
            if ( !res )
            {
                QMessageBox::critical( this, "Error", "Falied to run bootloader!" );
                break;
            }

            QString version;
            res = io->bootloaderFirmwareVersion( version );
            if ( !res )
            {
                QMessageBox::critical( this, "Error", "Falied to retrive bootloader version!" );
                break;
            }

            res = io->firmwareUpgrade( fileName );
            if ( !res )
            {
                QMessageBox::critical( this, "Error", "Firmware upgrade has failed! But don't worry, hardware is not bricked after that. Bootloader fires up each time hardware is powered on and waits for instructions for a few seconds. In order to complete firmware upgrade one should fire up firmware upgrade just after powering haddware up." );
                break;
            }

            QString stri;
            res = io->firmware_version( stri );
            if ( !res )
            {
                stri = QString( "Bootloader version: %1. Firmware upgrade most probably succeded. But can\'t retrieve new firmware version." ).arg( version );
                QMessageBox::warning( this, "Warning", stri );
                break;
            }
            stri = QString( "Bootloader version: %1. Firmware was successfully upgraded. New firmware version is: %2. Please, take into account that due to upgrade all values are reset to their defaults. So user interface might not reflect hardware state properly. In order to make things match reality please manually set all potentials again." ).arg( version ).arg( stri );
            QMessageBox::information( this, "Success", stri );
        }
    } while ( false );

    //connect( this,      SIGNAL(sigReplot()), this, SLOT(slotReplot()) );
    //connect( tempTimer, SIGNAL(timeout()),   this, SLOT(slotTemp()) );

}




void MainWnd::closeEvent( QCloseEvent * e )
{
    hide();
    e->ignore();
}

void MainWnd::refreshDevicesList()
{
    foreach( QAction * a, devicesList )
        a->deleteLater();
    devicesList.clear();
    QStringList l = io->enumDevices();
    foreach( QString stri, l )
    {
        QAction * a = new QAction( stri, ui.menuDevice );
        ui.menuDevice->addAction( a );
        a->setCheckable( true );
        connect( a, SIGNAL(triggered()), this, SLOT(slotDevice()) );
        devicesList.append( a );
    }
}

void MainWnd::reopen()
{
    io->close();
    io->open( deviceIndex );
}

bool MainWnd::ensureOpen()
{
    bool res;
    if ( !io->isOpen() )
    {
        res = io->open( deviceIndex );
        if ( !res )
        {
            QString stri = QString( "Probably device is not connected or wrong device is chosen!" );
            QMessageBox::critical( this, "Error", stri );            
        }
    }
    else
        res = true;
    return res;
}

int MainWnd::powerToStep( qreal power )
{
    qreal vmin = ui.power->minimum();
    qreal vmax = ui.power->maximum();
    qreal stepMin = static_cast<qreal>( filterMin );
    qreal stepMax = static_cast<qreal>( filterMax );
    qreal step = stepMin + (stepMax - stepMin) * (power - vmin)/(vmax - vmin);
    int   istep =static_cast<int>( step );
    return istep;
}

int MainWnd::polarizationToStep( bool vert )
{
    int step;
    if ( vert )
        step = pol0deg;
    else
        step = pol90deg;
    return step;
}

qreal MainWnd::stepToPower( int step )
{
    qreal vmin = ui.power->minimum();
    qreal vmax = ui.power->maximum();
    qreal stepMin = static_cast<qreal>( filterMin );
    qreal stepMax = static_cast<qreal>( filterMax );
    qreal fstep = static_cast<qreal>( step );
    qreal power = vmin + (vmax - vmin)/(stepMax - stepMin) * (fstep - stepMin);
    return power;
}

bool MainWnd::stepToPloarization( int step )
{
    int d0 = step - pol0deg;
    d0 = (d0 >= 0) ? d0 : -d0;
    int d90 = step - pol90deg;
    d90 = (d90 >= 0) ? d90 : -d90;
    return (d0 <= d90);
}

void MainWnd::bindSlots()
{
    // Setup section.
    connect( ui.actionSettings, SIGNAL(triggered()), this, SLOT(slotSetup()) );
    connect( ui.actionRemote_control_setup, SIGNAL(triggered()), this, SLOT(slotRemoteSetup()) );

    // Help section.
    connect( ui.actionAbout,    SIGNAL(triggered()), this, SLOT(slotAbout()) );
    connect( ui.actionFirmware_upgrade, SIGNAL(triggered()), this, SLOT(slotFirmwareUpdate()) );

    // Shutter controls.
    connect( ui.shutterOpen,   SIGNAL(clicked()), this, SLOT(slotShutter()) );
    connect( ui.shutterClosed, SIGNAL(clicked()), this, SLOT(slotShutter()) );

    // Power controls.
    connect( ui.power,   SIGNAL(editingFinished()), this, SLOT(slotPower()) );

    // Polarization controls.
    connect( ui.vert, SIGNAL(clicked()), this, SLOT(slotPolarization()) );
    connect( ui.hor,  SIGNAL(clicked()), this, SLOT(slotPolarization()) );
}

void MainWnd::listen()
{
    //if ( m_thread )
    //{
    //    bool started = m_thread->isAlive();
    //    if ( started )
    //        m_thread->shutdown();
    //}
    //if ( m_doListen )
    //{
    //    std::ostringstream os;
    //    if ( m_host.length() > 0 )
    //        os << "tcp -h " << m_host.toStdString() << " -p " << m_port;
    //    else
    //        os << "tcp" << " -p " << m_port;
    //    m_thread = new ThreadIce( os.str() );
    //    if ( !m_thread->listen( this ) )
    //        setTrayToolTip( "Not in service" );
    //    else
    //    {
    //        QString stri;
    //        if ( m_host.length() > 0 )
    //            stri = QString( "Listening interface %1, port %2" ).arg( m_host ).arg( m_port );
    //        else
    //            stri = QString( "Listening port %1" ).arg( m_port );
    //        setTrayToolTip( stri );
    //    }
    //}
}






