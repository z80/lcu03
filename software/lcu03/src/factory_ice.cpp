
#include "factory_ice.h"
#include "thread_ice.h"
#include "lcu03_ice.h"

FactoryIce::FactoryIce( ThreadIce * parent, MainWnd * mw  )
: ::Factory::DeviceFactory()
{
    m_lcu03    = new Lcu03Ice( mw );
    m_lcu03Prx = ::Factory::DeviceAbsPrx::uncheckedCast( parent->adapter()->addWithUUID( m_lcu03 ) );
}

FactoryIce::FactoryIce()
{
}

::Factory::TStringArray FactoryIce::interfaces(const ::Ice::Current & c )
{
    ::Factory::TStringArray types;
    types.push_back( "lcu03" );
    return types;
}

::Factory::DeviceAbsPrx FactoryIce::query(const ::std::string & interfaceName, const ::Ice::Current & c )
{
    if ( interfaceName == "lcu03" )
        return m_lcu03Prx;
    return 0;
}


