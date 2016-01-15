
#ifndef __DIGITIZER_ICE_H_
#define __DIGITIZER_ICE_H_

#include <Ice/Ice.h>
#include "lcu03.h"
class MainWnd;

class Lcu03Ice: public Device::Lcu03
{
public:
    Lcu03Ice( MainWnd * mw );
    ~Lcu03Ice();
    
    ::std::string status( const ::Ice::Current& = ::Ice::Current() );
    void release(const ::Ice::Current& = ::Ice::Current() );

    bool setShutter( bool open, const ::Ice::Current& = ::Ice::Current() );
    bool shutter( bool & open, const ::Ice::Current& = ::Ice::Current() );
    bool setPower( ::Ice::Double power, const ::Ice::Current& = ::Ice::Current() );
    bool power( ::Ice::Double & power, const ::Ice::Current& = ::Ice::Current() );
    bool setPolHor( bool hor, const ::Ice::Current& = ::Ice::Current() );
    bool polHor( bool & hor, const ::Ice::Current& = ::Ice::Current() );

private:
    MainWnd * m_mainWnd;
    IceUtil::Mutex  m_mutex;
};

#endif



