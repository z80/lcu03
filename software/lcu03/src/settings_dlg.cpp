
#include "settings_dlg.h"

#include "main_wnd.h"

SettingsDlg::SettingsDlg( MainWnd * mainWnd )
    : QDialog( mainWnd )
{
    this->mainWnd = mainWnd;
    ui.setupUi( this );
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
        QString stri = QString( "Failed to query driver position for hardware!" );
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

void SettingsDlg::closeEvent( QCloseEvent * e )
{
    e->ignore();
}

void SettingsDlg::bindSlots()
{
    connect( ui.motor, SIGNAL(activated(int)),    this, SLOT(slotMotorSelected()) );
    connect( ui.pos,   SIGNAL(editingFinished()), this, SLOT(slotPositionChanged()) );

    connect( ui.saveVert, SIGNAL(clicked()), this, SLOT(slotSaveVert()) );
    connect( ui.saveHor,  SIGNAL(clicked()), this, SLOT(slotSaveHor()) );
    connect( ui.saveMaxPwr, SIGNAL(clicked()), this, SLOT(slotSaveMaxPwr()) );
    connect( ui.saveMinPwr, SIGNAL(clicked()), this, SLOT(slotSaveMinPwr()) );

    connect( ui.shutterOpened, SIGNAL(clicked()), this, SLOT(slotShutter()) );
}


