
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

    ui.shutterOpened->setChecked( mainWnd->shutter );
    ui.shutterClosed->setChecked( !mainWnd->shutter );

    updateLabels();

    m_save = false;
}

SettingsDlg::~SettingsDlg()
{
}

bool SettingsDlg::save() const
{
    return m_save;
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
    updateLabels();
}

void SettingsDlg::slotSaveHor()
{
    mainWnd->pol90deg = ui.pos->value();
    updateLabels();
}

void SettingsDlg::slotSaveMaxPwr()
{
    mainWnd->filterMax = ui.pos->value();
    updateLabels();
}

void SettingsDlg::slotSaveMinPwr()
{
    mainWnd->filterMin = ui.pos->value();
    updateLabels();
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
    int btn = QMessageBox::question( this, "Shutter state", 
                                           "This procedure will make all " 
                                           "drivers movement. Please, make "
                                           "sure laser is off or shutter is "
                                           "closed before proceeding! Proceed?", QMessageBox::Ok, QMessageBox::Cancel );
    if ( btn != QMessageBox::Ok )
        return;

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
    while ( timeout.elapsed() < TIMEOUT )
    {
        sleep();

        bool running0;
        res = io->motorInMotion( 0, running0, pos0 );
        if ( !res )
        {
            io->close();
            QString stri = QString( "Failed to query driver 0!" );
            QMessageBox::critical( this, "Error", stri );
            return;
        }

        sleep();

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

    sleep();
    int pos;
    res = io->motorPos( motor, pos );
    ui.pos->setValue( pos );
}

void SettingsDlg::slotFirmwareUpgrade()
{
    mainWnd->slotFirmwareUpdate();
}

void SettingsDlg::slotMore()
{
    int motor = ui.motor->currentIndex();

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
        return;
    }

    pos += ui.step->value();
    res = io->moveMotor( motor, pos );
    if ( !res )
    {
        io->close();
        QString stri = QString( "Failed to run driver!" );
        QMessageBox::critical( this, "Error", stri );
        return;
    }
    ui.pos->setValue( pos );
}

void SettingsDlg::slotLess()
{
    int motor = ui.motor->currentIndex();

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
        return;
    }

    pos -= ui.step->value();
    res = io->moveMotor( motor, pos );
    if ( !res )
    {
        io->close();
        QString stri = QString( "Failed to run driver!" );
        QMessageBox::critical( this, "Error", stri );
        return;
    }
    ui.pos->setValue( pos );
}

void SettingsDlg::slotOk()
{
    m_save = true;
    accept();
}

void SettingsDlg::slotOkNo()
{
    m_save = false;
    accept();
}

void SettingsDlg::slotCancel()
{
    reject();
}

void SettingsDlg::closeEvent( QCloseEvent * e )
{
    //e->ignore();
    reject();
}

void SettingsDlg::bindSlots()
{
    ui.saveVert->setDefault( false );
    ui.saveVert->setAutoDefault( false );
    ui.saveHor->setDefault( false );
    ui.saveHor->setAutoDefault( false );
    ui.saveMaxPwr->setDefault( false );
    ui.saveMaxPwr->setAutoDefault( false );
    ui.saveMinPwr->setDefault( false );
    ui.saveMinPwr->setAutoDefault( false );

    ui.findPos->setDefault( false );
    ui.findPos->setAutoDefault( false );

    ui.firmwareUpgrade->setDefault( false );
    ui.firmwareUpgrade->setAutoDefault( false );

    ui.ok->setDefault( false );
    ui.ok->setAutoDefault( false );
    ui.cancel->setDefault( false );
    ui.cancel->setAutoDefault( false );

    ui.more->setDefault( false );
    ui.more->setAutoDefault( false );
    ui.less->setDefault( false );
    ui.less->setAutoDefault( false );


    connect( ui.motor, SIGNAL(currentIndexChanged(int)), this, SLOT(slotMotorSelected()) );
    connect( ui.pos,   SIGNAL(editingFinished()),        this, SLOT(slotPositionChanged()) );

    connect( ui.saveVert, SIGNAL(clicked()),   this, SLOT(slotSaveVert()) );
    connect( ui.saveHor,  SIGNAL(clicked()),   this, SLOT(slotSaveHor()) );
    connect( ui.saveMaxPwr, SIGNAL(clicked()), this, SLOT(slotSaveMaxPwr()) );
    connect( ui.saveMinPwr, SIGNAL(clicked()), this, SLOT(slotSaveMinPwr()) );

    connect( ui.shutterOpened, SIGNAL(clicked()), this, SLOT(slotShutter()) );

    connect( ui.findPos,         SIGNAL(clicked()), this, SLOT(slotFindMotorPos()) );
    connect( ui.firmwareUpgrade, SIGNAL(clicked()), this, SLOT(slotFirmwareUpgrade()) );

    connect( ui.more,  SIGNAL(clicked()), this, SLOT(slotMore()) );
    connect( ui.less,  SIGNAL(clicked()), this, SLOT(slotLess()) );

    connect( ui.ok,     SIGNAL(clicked()), this, SLOT(slotOk()) );
    connect( ui.ok_no,  SIGNAL(clicked()), this, SLOT(slotOkNo()) );
    connect( ui.cancel, SIGNAL(clicked()), this, SLOT(slotCancel()) );
}

void SettingsDlg::updateLabels()
{
    ui.maxPowerLbl->setText( QString( "%1" ).arg( mainWnd->filterMax ) );
    ui.minPowerLbl->setText( QString( "%1" ).arg( mainWnd->filterMin ) );
    ui.vertPolLbl->setText( QString( "%1" ).arg( mainWnd->pol0deg ) );
    ui.horPolLbl->setText( QString( "%1" ).arg( mainWnd->pol90deg ) );
}

void SettingsDlg::sleep()
{
    const int DT = 200;
    QTime tsleep;
    tsleep.start();
    while ( tsleep.elapsed() < DT )
        qApp->processEvents();
}


