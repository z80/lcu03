
#include "lualcu03.h"
#include "lcu03_prx.h"

static const char lmMeta[]    = "LUALCU03PRX_META";


static int gc( lua_State * L )
{
    Lcu03Envelope * de = *reinterpret_cast<Lcu03Envelope * *>( lua_touserdata( L, 1 ) );
    if ( de )
        delete de;
    return 0;
}

static int pointer( lua_State * L )
{
    Lcu03Envelope * h = *reinterpret_cast<Lcu03Envelope * *>( lua_touserdata( L, 1 ) );
    void * res = reinterpret_cast<void *>( h );
    lua_pushlightuserdata( L, res );
    return 1;
}


static int setShutter( lua_State * L )
{
    Lcu03Envelope * de = *reinterpret_cast<Lcu03Envelope * *>( lua_touserdata( L, 1 ) );
    bool sh;
    sh = ( lua_toboolean( L, 1 ) > 0 );
    bool res = de->d->setShutter( sh );
    lua_pushboolean( L, res ? 1 : 0 );
    return 1;
}

static int shutter( lua_State * L )
{
    Lcu03Envelope * de = *reinterpret_cast<Lcu03Envelope * *>( lua_touserdata( L, 1 ) );
    bool sh;
    bool res = de->d->shutter( sh );
    lua_pushboolean( L, res ? 1 : 0 );
    lua_pushnumber( L, res ? sh : false );
    return 2;
}

static int setPower( lua_State * L )
{
    Lcu03Envelope * de = *reinterpret_cast<Lcu03Envelope * *>( lua_touserdata( L, 1 ) );
    qreal power;
    power = lua_tonumber( L, 1 );
    bool res = de->d->setPower( power );
    lua_pushboolean( L, res ? 1 : 0 );
    return 1;
}

static int power( lua_State * L )
{
    Lcu03Envelope * de = *reinterpret_cast<Lcu03Envelope * *>( lua_touserdata( L, 1 ) );
    qreal power;
    bool res = de->d->power( power );
    lua_pushboolean( L, res ? 1 : 0 );
    lua_pushnumber( L, res ? power : 0.0 );
    return 2;
}

static int setPolHor( lua_State * L )
{
    Lcu03Envelope * de = *reinterpret_cast<Lcu03Envelope * *>( lua_touserdata( L, 1 ) );
    bool hor;
    hor = ( lua_toboolean( L, 1 ) > 0 );
    bool res = de->d->setPolHor( hor );
    lua_pushboolean( L, res ? 1 : 0 );
    return 1;
}

static int polHor( lua_State * L )
{
    Lcu03Envelope * de = *reinterpret_cast<Lcu03Envelope * *>( lua_touserdata( L, 1 ) );
    bool hor;
    bool res = de->d->polHor( hor );
    lua_pushboolean( L, res ? 1 : 0 );
    lua_pushnumber( L, res ? hor : false );
    return 2;
}




static const struct luaL_reg lmMetaFunctions[] = {
    { "pointer",            pointer }, 
    { "setShutter",         setShutter }, 
    { "shutter",            shutter }, 
    { "setPower",           setPower }, 
    { "power",              power }, 
    { "setPolHor",          setPolHor }, 
    { "polHor",             polHor }, 
    { NULL,                 NULL }, 
};

void createLcu03Meta( lua_State * L )
{
    int n = lua_gettop( L );
    luaL_newmetatable( L, lmMeta );  // create new metatable for file handles
    // file methods
    lua_pushliteral( L, "__index" );
    lua_pushvalue( L, -2 );  // push metatable
    lua_rawset( L, -3 );     // metatable.__index = metatable

    lua_pushliteral( L, "__gc" );
    lua_pushcfunction( L, gc );
    lua_rawset( L, -3 );

    luaL_register( L, NULL, lmMetaFunctions );
    // Очищаем стек.
    lua_settop( L, n );
}

void applyLcu03Meta( lua_State * L )
{
    luaL_getmetatable( L, lmMeta );
    lua_setmetatable( L, -2 );
}

