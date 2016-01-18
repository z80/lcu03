
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

    bool save() const;

public slots:
    void slotMotorSelected();
    void slotPositionChanged();
    void slotSaveVert();
    void slotSaveHor();
    void slotSaveMaxPwr();
    void slotSaveMinPwr();
    void slotShutter();
    void slotFindMotorPos();
    void slotFirmwareUpgrade();
    void slotMore();
    void slotLess();

    void slotOk();
    void slotOkNo();
    void slotCancel();
protected:
    void closeEvent( QCloseEvent * e );
private:
    void bindSlots();
    void updateLabels();
    void sleep();

    Ui_SettingsDlg ui;
    MainWnd * mainWnd;
    bool m_save;
};



#endif



