
#ifndef __FACTORY_CLIENT_H_
#define __FACTORY_CLIENT_H_

#include <string>
class Lcu03Prx;

class FactoryClient
{
public:
    static FactoryClient * factory( const std::string & host = "", int port = 21346 );
    ~FactoryClient();

    std::string status();
    static const std::string & version();
    Lcu03Prx * lcu03();

private:
    FactoryClient();
    class PD;
    PD * pd;
};



#endif

