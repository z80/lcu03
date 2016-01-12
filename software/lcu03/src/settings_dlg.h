
#ifndef __SETTINGS_DLG_H_
#define __SETTINGS_DLG_H_

#include <QtGui>
#include "ui_settings_dlg.h"

class MainWnd;

class SettingsDlg: public QDialog
{
    Q_OBJECT
public:
    SettingsDlg( MainWnd * parent );
    ~SettingsDlg();

public slots:
    void slotMotorSelected();
    void slotPositionChanged();
    void slotSaveVert();
    void slotSaveHor();
    void slotSaveMaxPwr();
    void slotSaveMinPwr();
    void slotShutter();
protected:
    void closeEvent( QCloseEvent * e );
private:
    void bindSlots();

    Ui_SettingsDlg ui;
    MainWnd * mainWnd;
};



#endif



