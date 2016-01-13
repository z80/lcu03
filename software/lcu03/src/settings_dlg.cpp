
#include "settings_dlg.h"

#include "main_wnd.h"

SettingsDlg::SettingsDlg( MainWnd * mainWnd )
    : QDialog( mainWnd )
{
    this->mainWnd = mainWnd;
    ui.setupUi( this );

    bindSlots();
    // Prepare interface.
    slotMotorSelected();
}

SettingsDlg::~SettingsDlg()
{
}

void SettingsDlg::slotMotorSelected()
{
    int motor = ui.motor->currentIndex();
    // Choose appropriate page.
    ui.pager->setCurrentIndex( motor );
    // Adjust position.
    bool res = mainWnd->ensureOpen();
    if ( !res )
        return;
    VoltampIo * io = mainWnd->io;
    int pos;
    res = io->motorPos( motor, pos );
    if ( !res )
    {
        io->close();
        QString stri = QString( "Failed to query driver position from hardware!" );
        QMessageBox::critical( this, "Error", stri );            
    }
    ui.pos->setValue( pos );
}

void SettingsDlg::slotPositionChanged()
{
    int motor = ui.motor->currentIndex();
    bool res = mainWnd->ensureOpen();
    if ( !res )
        return;
    VoltampIo * io = mainWnd->io;
    int pos = ui.pos->value();
    res = io->moveMotor( motor, pos );
    if ( !res )
    {
        io->close();
        QString stri = QString( "Failed to move driver!" );
        QMessageBox::critical( this, "Error", stri );            
    }
}

void SettingsDlg::slotSaveVert()
{
    mainWnd->pol0deg = ui.pos->value();
}

void SettingsDlg::slotSaveHor()
{
    mainWnd->pol90deg = ui.pos->value();
}

void SettingsDlg::slotSaveMaxPwr()
{
    mainWnd->filterMax = ui.pos->value();
}

void SettingsDlg::slotSaveMinPwr()
{
    mainWnd->filterMin = ui.pos->value();
}

void SettingsDlg::slotShutter()
{
    QObject * snd = sender();
    QRadioButton * rad = qobject_cast<QRadioButton *>( snd );
    bool realShutter =  ( rad == ui.shutterOpened );
    if ( realShutter != mainWnd->shutter )
    {
        mainWnd->shutter = realShutter;
        mainWnd->ui.shutterOpen->setChecked( realShutter );
        mainWnd->ui.shutterClosed->setChecked( !realShutter );
        int tmp;
        tmp = mainWnd->shutterOpened;
        mainWnd->shutterOpened = mainWnd->shutterClosed;
        mainWnd->shutterClosed = tmp;
    }
}

void SettingsDlg::slotFindMotorPos()
{
    bool res = mainWnd->ensureOpen();
    if ( !res )
        return;
    VoltampIo * io = mainWnd->io;

    int pos0;
    res = io->motorPos( 0, pos0 );
    if ( !res )
    {
        io->close();
        QString stri = QString( "Failed to query driver position from hardware!" );
        QMessageBox::critical( this, "Error", stri );            
        return;
    }

    int pos1;
    res = io->motorPos( 1, pos1 );
    if ( !res )
    {
        io->close();
        QString stri = QString( "Failed to query driver position from hardware!" );
        QMessageBox::critical( this, "Error", stri );
        return;
    }

    const int ONE_REVOLUTION = 5120;
    const int TIMEOUT = 10000;
    const int DT      = 200;

    res = io->moveMotor( 0, pos0 + ONE_REVOLUTION );
    if ( !res )
    {
        io->close();
        QString stri = QString( "Failed to run driver 0!" );
        QMessageBox::critical( this, "Error", stri );
        return;
    }

    res = io->moveMotor( 1, pos1 + ONE_REVOLUTION );
    if ( !res )
    {
        io->close();
        QString stri = QString( "Failed to run driver 1!" );
        QMessageBox::critical( this, "Error", stri );
        return;
    }

    int motor = ui.motor->currentIndex();
    QTime timeout;
    timeout.start();
    QTime tsleep;
    tsleep.start();
    while ( timeout.elapsed() < TIMEOUT )
    {
        while ( tsleep.elapsed() < DT )
            qApp->processEvents();
        tsleep.restart();

        bool running0;
        res = io->motorInMotion( 0, running0, pos0 );
        if ( !res )
        {
            io->close();
            QString stri = QString( "Failed to query driver 0!" );
            QMessageBox::critical( this, "Error", stri );
            return;
        }

        bool running1;
        res = io->motorInMotion( 1, running1, pos1 );
        if ( !res )
        {
            io->close();
            QString stri = QString( "Failed to query driver 1!" );
            QMessageBox::critical( this, "Error", stri );
            return;
        }

        // Inform user about motor movement.
        if ( motor == 0 )
            ui.pos->setValue( pos0 );
        else
            ui.pos->setValue( pos1 );

        if ( ( !running0 ) && ( !running1 ) )
            break;
    }

    // Read sensor data.
    bool triggered0;
    int  senPos0;
    res = io->sensor( 0, triggered0, senPos0 );
    if ( !res )
    {
        io->close();
        QString stri = QString( "Failed to query driver 0 sensor position!" );
        QMessageBox::critical( this, "Error", stri );
        return;
    }

    bool triggered1;
    int  senPos1;
    res = io->sensor( 1, triggered1, senPos1 );
    if ( !res )
    {
        io->close();
        QString stri = QString( "Failed to query driver 1 sensor position!" );
        QMessageBox::critical( this, "Error", stri );
        return;
    }

    // Read motor data.
    res = io->motorPos( 0, pos0 );
    if ( !res )
    {
        io->close();
        QString stri = QString( "Failed to query driver 0 position!" );
        QMessageBox::critical( this, "Error", stri );
        return;
    }

    res = io->motorPos( 1, pos1 );
    if ( !res )
    {
        io->close();
        QString stri = QString( "Failed to query driver 1 position!" );
        QMessageBox::critical( this, "Error", stri );
        return;
    }

    pos0 = pos0 - senPos0;
    res = io->motorSetPos( 0, pos0 );
    if ( !res )
    {
        io->close();
        QString stri = QString( "Failed to set driver 0 position!" );
        QMessageBox::critical( this, "Error", stri );
        return;
    }

    pos1 = pos1 - senPos1;
    res = io->motorSetPos( 1, pos1 );
    if ( !res )
    {
        io->close();
        QString stri = QString( "Failed to set driver 1 position!" );
        QMessageBox::critical( this, "Error", stri );
        return;
    }

    if ( motor == 0 )
        ui.pos->setValue( pos0 );
    else
        ui.pos->setValue( pos1 );
}

void SettingsDlg::slotFirmwareUpgrade()
{
    mainWnd->slotFirmwareUpdate();
}

void SettingsDlg::closeEvent( QCloseEvent * e )
{
    e->ignore();
}

void SettingsDlg::bindSlots()
{
    connect( ui.motor, SIGNAL(currentIndexChanged(int)), this, SLOT(slotMotorSelected()) );
    connect( ui.pos,   SIGNAL(editingFinished()),        this, SLOT(slotPositionChanged()) );

    connect( ui.saveVert, SIGNAL(clicked()),   this, SLOT(slotSaveVert()) );
    connect( ui.saveHor,  SIGNAL(clicked()),   this, SLOT(slotSaveHor()) );
    connect( ui.saveMaxPwr, SIGNAL(clicked()), this, SLOT(slotSaveMaxPwr()) );
    connect( ui.saveMinPwr, SIGNAL(clicked()), this, SLOT(slotSaveMinPwr()) );

    connect( ui.shutterOpened, SIGNAL(clicked()), this, SLOT(slotShutter()) );

    connect( ui.findPos,         SIGNAL(clicked()), this, SLOT(slotFindMotorPos()) );
    connect( ui.firmwareUpgrade, SIGNAL(clicked()), this, SLOT(slotFirmwareUpgrade()) );
}


