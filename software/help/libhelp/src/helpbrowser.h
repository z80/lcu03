
#ifndef HELPBROWSER_H
#define HELPBROWSER_H

#include <QtWidgets/QTextBrowser>

QT_BEGIN_NAMESPACE
class QHelpEngineCore;
QT_END_NAMESPACE;

class HelpBrowser : public QTextBrowser
{
    Q_OBJECT

public:
    HelpBrowser(QWidget *parent);
    void showHelpForKeyword(const QString &id);

private:
    QVariant loadResource(int type, const QUrl &name);

    QHelpEngineCore *m_helpEngine;
};

#endif
