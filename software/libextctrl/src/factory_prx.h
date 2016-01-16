
#ifndef __FACTORY_PRX_H_
#define __FACTORY_PRX_H_

#include <string>
#include <vector>
#include "Ice/Ice.h"
#include "factory.h"

#include "lcu03.h"
class Lcu03Prx;

class FactoryPrx: public ::Ice::Object
{
public:
    typedef IceUtil::Handle<FactoryPrx> Factory;

    ~FactoryPrx();

    static Factory factory( const std::string & host = "", int port = 31415 );
    Lcu03Prx * lcu03();

    std::string status();
protected:
    void setStatus( const std::string & stri );
    ::IceUtil::Mutex &    mutex();
    ::Device::Lcu03Prx lcu03Prx();

private:
    FactoryPrx();
private:
    class PD;
    PD * pd;

    friend class Lcu03Prx;
};



#endif


