
#include "lcu03_ice.h"
#include "main_wnd.h"


Lcu03Ice::Lcu03Ice( MainWnd * mw )
: Device::Lcu03()
{
    m_mainWnd = mw;
}

Lcu03Ice::~Lcu03Ice()
{
}

::std::string Lcu03Ice::status( const ::Ice::Current& c )
{
    return "ok";
}

void Lcu03Ice::release(const ::Ice::Current& c )
{
}

bool Lcu03Ice::setShutter( bool open, const ::Ice::Current& )
{
    bool res;
    res = m_mainWnd->setShutterIce( open );
    return res;
}

bool Lcu03Ice::shutter( bool & open, const ::Ice::Current& )
{
    bool res;
    res = m_mainWnd->shutterIce( open );
    return res;
}

bool Lcu03Ice::setPower( ::Ice::Double power, const ::Ice::Current& )
{
    bool res;
    res = m_mainWnd->setPowerIce( power );
    return res;
}

bool Lcu03Ice::power( ::Ice::Double & power, const ::Ice::Current& )
{
    bool res;
    res = m_mainWnd->powerIce( power );
    return res;
}

bool Lcu03Ice::setPolHor( bool hor, const ::Ice::Current& )
{
    bool res;
    res = m_mainWnd->setPolHorIce( hor );
    return res;
}

bool Lcu03Ice::polHor( bool & hor, const ::Ice::Current& )
{
    bool res;
    res = m_mainWnd->polHorIce( hor );
    return res;
}







