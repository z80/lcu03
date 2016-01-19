
#include "help_browser.h"
#include <QHelpEngineCore>

HelpBrowser::HelpBrowser( QWidget * parent )
    : QTextBrowser( parent )
{
    m_core = 0;
}

HelpBrowser::~HelpBrowser()
{
}

void HelpBrowser::setHelpEngine( QHelpEngineCore * engine )
{
    m_core = engine;
}

QVariant HelpBrowser::loadResource( int type,
                                     const QUrl & url )
{
    if ( url.scheme() == "qthelp" )
    {
        Q_ASSERT( m_core != 0 );
        return QVariant( m_core->fileData( url ) );
    }
    else
        return QTextBrowser::loadResource( type, url );
}
