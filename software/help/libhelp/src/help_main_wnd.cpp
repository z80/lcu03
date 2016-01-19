
#include "help_main_wnd.h"
#include <QtHelp>
#include <QPrinter>
#include <QtPrintSupport/QPrinter>
#include <QtPrintSupport/QPrintDialog>
#include "ui_help_main_wnd.h"


HelpMainWnd::HelpMainWnd( const QString & fileName )
    : QMainWindow()
{
    ui = new Ui_MainWindow();
    ui->setupUi( this );
    ui->splitter->setStretchFactor( 0, 1 );
    ui->splitter->setStretchFactor( 1, 4 );
    
    m_helpEngine   = new QHelpEngine( fileName );
    ui->helpBrowser->setHelpEngine( m_helpEngine );
    m_searchEngine = m_helpEngine->searchEngine();
    connect( m_searchEngine, SIGNAL( indexingStarted() ),  this, SLOT(indexingStarted()) );
    connect( m_searchEngine, SIGNAL( indexingFinished() ), this, SLOT(indexingFinished()) );
    bool res = m_helpEngine->setupData();

    ui->contentsLt->addWidget( m_helpEngine->contentWidget() );

    connect( m_helpEngine->contentWidget(), SIGNAL( linkActivated(const QUrl &) ),
             ui->helpBrowser, SLOT(setSource(const QUrl &)));

    m_helpEngine->contentWidget()->reset();

    // Связи действий со слотами.
    connect( ui->actionQuit,     SIGNAL( triggered() ), this,            SLOT( close() ) );
    connect( ui->actionPrint,    SIGNAL( triggered() ), this,            SLOT( print() ) );
    connect( ui->actionNext,     SIGNAL( triggered() ), ui->helpBrowser, SLOT( forward() ) );
    connect( ui->actionPrevious, SIGNAL( triggered() ), ui->helpBrowser, SLOT( backward() ) );
    connect( ui->actionHome,     SIGNAL( triggered() ), ui->helpBrowser, SLOT( home() ) );
    connect( ui->actionAbout,    SIGNAL( triggered() ), this,            SLOT( about() ) );
}

HelpMainWnd::~HelpMainWnd()
{
    m_helpEngine->deleteLater();
    delete ui;
}

void HelpMainWnd::print()
{
    QTextDocument * text = ui->helpBrowser->document();
    QPrinter printer( QPrinter::HighResolution );

  	QPrintDialog dialog( &printer, this );
    dialog.setWindowTitle( tr("Send to printer") );
    if ( dialog.exec() != QDialog::Accepted )
        return;
    printer.setFullPage( true );
    printer.setPageSize( QPrinter::A4 );
    text->print( &printer );
}

void HelpMainWnd::about()
{
    QMessageBox box;
    box.setText( "Lcu03 help window." );
    box.exec();
}

void HelpMainWnd::indexingStarted()
{
}

void HelpMainWnd::indexingFinished()
{
}





