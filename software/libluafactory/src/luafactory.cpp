
#include "luafactory.h"
#include "lualcu03.h"
#include "factory_client.h"

static const char lmMeta[]    = "LUALCU03_META";
static const char lmLibName[] = "lualcu03";

static int version( lua_State * L )
{
    lua_pushstring( L, FactoryClient::version().data() );
    return 1;
}

static int create( lua_State * L )
{
    FactoryClient * f;
    if ( lua_gettop( L ) > 1 )
    {
        std::string host = lua_tostring( L, 1 );
        int         port = static_cast<int>( lua_tonumber( L, 2 ) );
        f = FactoryClient::factory( host, port );
    }
    else
        f = FactoryClient::factory();
    if ( !f )
    {
        lua_pushnil( L );
        return 1;
    }
    
    FactoryClient * * p = reinterpret_cast< FactoryClient * * >( lua_newuserdata( L, sizeof( FactoryClient * ) ) );
    *p = f;
    luaL_getmetatable( L, lmMeta ); // Она сама выталкивает из стека lmMeta
    lua_setmetatable( L, -2 );

    return 1;
}

static int gc( lua_State * L )
{
    FactoryClient * f = *reinterpret_cast<FactoryClient * *>( lua_touserdata( L, 1 ) );
    if ( f )
        delete f;
    return 0;
}

static int status( lua_State * L )
{
    FactoryClient * f = *reinterpret_cast<FactoryClient * *>( lua_touserdata( L, 1 ) );
    if ( f )
    {
        std::string res = f->status();
        lua_pushstring( L, res.data() );
    }
    else
        lua_pushnil( L );
    return 1;
}

static int lcu03( lua_State * L )
{
    FactoryClient * f = *reinterpret_cast<FactoryClient * *>( lua_touserdata( L, 1 ) );
    if ( f )
    {
        Lcu03Prx * d = f->lcu03();
        Lcu03Envelope * de = new Lcu03Envelope();
        de->d = d;
        Lcu03Envelope * * ppde = reinterpret_cast< Lcu03Envelope * * >( lua_newuserdata( L, sizeof( Lcu03Envelope * ) ) );
        *ppde = de;
        applyLcu03Meta( L );
        return 1;
    }
    else
        lua_pushnil( L );
    return 1;
}

static const struct luaL_reg lmMetaFunctions[] = {
    { "status",    status }, 
    { "lcu03",     lcu03 }, 
    { 0,           0 }, 
};

static void createMeta( lua_State * L )
{
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
    lua_pop( L, lua_gettop( L ) );
}

static const struct luaL_reg lmFunctions[] = {
    { "version",  version }, 
    { "create",   create }, 
    { 0,          0 },
};

static void registerFunctions( lua_State * L )
{
    luaL_register( L, lmLibName, lmFunctions );
}




extern "C" int EXT_FACTORY luaopen_lualcu03( lua_State * L )
{
    createLcu03Meta( L );

    createMeta( L );
    registerFunctions( L );
    lua_pop( L, lua_gettop( L ) );
    return 0;
}

