
#include "lcu03_prx.h"
#include "Ice/Ice.h"
#include "lcu03.h"
#include "factory_prx.h"

class Lcu03Prx::PD
{
public:
    ::Device::Lcu03Prx          prx;
    IceUtil::Handle<FactoryPrx> factory;
};

Lcu03Prx::Lcu03Prx( FactoryPrx * owner )
{
    pd = new PD();
    pd->factory = owner;
    pd->prx     = owner->lcu03Prx();
}

Lcu03Prx::~Lcu03Prx()
{
    delete pd;
}

bool Lcu03Prx::setShutter( bool open )
{
    int res;
    try {
        res = pd->prx->setShutter( open );
    } catch ( const Ice::Exception & e )
    {
        res = false;
        pd->factory->setStatus( std::string( "error: " ) + e.ice_name() );
    }
    return res;
}

bool Lcu03Prx::shutter( bool & open )
{
    int res;
    try {
        res = pd->prx->shutter( open );
    } catch ( const Ice::Exception & e )
    {
        res = false;
        pd->factory->setStatus( std::string( "error: " ) + e.ice_name() );
    }
    return res;
}

bool Lcu03Prx::setPower( qreal pwr )
{
    int res;
    try {
        res = pd->prx->setPower( pwr );
    } catch ( const Ice::Exception & e )
    {
        res = false;
        pd->factory->setStatus( std::string( "error: " ) + e.ice_name() );
    }
    return res;

}

bool Lcu03Prx::power( qreal & pwr )
{
    int res;
    try {
        res = pd->prx->power( pwr );
    } catch ( const Ice::Exception & e )
    {
        res = false;
        pd->factory->setStatus( std::string( "error: " ) + e.ice_name() );
    }
    return res;

}

bool Lcu03Prx::setPolHor( bool hor )
{
    int res;
    try {
        res = pd->prx->setPolHor( hor );
    } catch ( const Ice::Exception & e )
    {
        res = false;
        pd->factory->setStatus( std::string( "error: " ) + e.ice_name() );
    }
    return res;

}

bool Lcu03Prx::polHor( bool & hor )
{
    int res;
    try {
        res = pd->prx->polHor( hor );
    } catch ( const Ice::Exception & e )
    {
        res = false;
        pd->factory->setStatus( std::string( "error: " ) + e.ice_name() );
    }
    return res;

}












