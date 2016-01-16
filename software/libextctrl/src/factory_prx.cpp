
#include "factory_prx.h"
#include "lcu03_prx.h"
#include <sstream>

class FactoryPrx::PD
{
public:
    Ice::CommunicatorPtr        comm;
    //Ice::ObjectAdapterPtr       adapter;
    
    ::Factory::DeviceFactoryPrx factory;
    ::Device::Lcu03Prx          lcu03;
    std::string                 status;

    IceUtil::Mutex  mutex;
};

FactoryPrx::Factory FactoryPrx::factory( const std::string & host, int port )
{
    FactoryPrx::Factory result;
    try {
        Ice::InitializationData initData;
        Ice::PropertiesPtr      props;
        props = Ice::createProperties();
        props->setProperty( "client_adapter.Endpoints", "tcp" );
        initData.properties = props;
        Ice::CommunicatorPtr comm = Ice::initialize( initData );
        //Ice::CommunicatorPtr comm = Ice::initialize();
        //Ice::ObjectAdapterPtr adapter = comm->createObjectAdapter( "adapter" );
        std::ostringstream os;
        if ( host.length() > 0 )
            os << "factory: tcp -h " << host << " -p " << port;
        else
            os << "factory: tcp -p " << port;
        ::Factory::DeviceFactoryPrx factory = ::Factory::DeviceFactoryPrx::uncheckedCast( comm->stringToProxy( os.str() ) );
        if ( !factory )
            return 0;
        ::Factory::DeviceAbsPrx dev;

        dev = factory->query( "lcu03" );
        if ( !dev )
            return 0;
        ::Device::Lcu03Prx lcu03 = ::Device::Lcu03Prx::uncheckedCast( dev );
        if ( !lcu03 )
            return 0;


        FactoryPrx * f = new FactoryPrx();
        f->pd->comm    = comm;
        //f->pd->adapter = adapter;
        f->pd->factory = factory;

        f->pd->lcu03 = lcu03;

        f->pd->status = "connected";

        result = f;
    } catch ( const Ice::Exception & e )
    {
        qDebug() << e.ice_name().c_str();
        result = 0;
    }
    return result;
}

FactoryPrx::FactoryPrx()
: ::Ice::Object()
{
    pd = new PD();
}

FactoryPrx::~FactoryPrx()
{
    delete pd;
}

Lcu03Prx * FactoryPrx::lcu03()
{
    Lcu03Prx * d = new Lcu03Prx( this );
    return d;
}

std::string FactoryPrx::status()
{
    IceUtil::Mutex::Lock lock( pd->mutex );
    return pd->status;
}

void FactoryPrx::setStatus( const std::string & stri )
{
    IceUtil::Mutex::Lock lock( pd->mutex );
    pd->status = stri;
}

::IceUtil::Mutex & FactoryPrx::mutex()
{
    return pd->mutex;
}

::Device::Lcu03Prx FactoryPrx::lcu03Prx()
{
    return pd->lcu03;
}





