
#ifndef __LUA_LCU03_H_
#define __LUA_LCU03_H_

#include <vector>
#include <QtCore>

extern "C"
{
    #include "lua.h"
    #include "lualib.h"
    #include "lauxlib.h"
}

#include "lcu03_prx.h"

class Lcu03Envelope
{
public:
    Lcu03Prx * d;
    std::vector<qreal> workV;
    std::vector<qreal> workI;
    std::vector<qreal> probeV;
    std::vector<qreal> probeI;

    Lcu03Envelope()
    {
        d = 0;
    }

    ~Lcu03Envelope()
    {
        if ( d )
            delete d;
    }
};

void createLcu03Meta( lua_State * L );
void applyLcu03Meta( lua_State * L );


#endif


