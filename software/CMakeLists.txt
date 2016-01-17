
set( SOFTWARE_VERSION "\"1.0.0\"" )

project( lcu03 )
cmake_minimum_required(VERSION 2.8)

set( ROOT ${CMAKE_CURRENT_SOURCE_DIR} )
#set( CMAKE_INSTALL_PREFIX ${ROOT}/.build.app )
set( CMAKE_INSTALL_PREFIX ${ROOT}/app )
set( _3DPARTY ${CMAKE_CURRENT_SOURCE_DIR}/3dparty )

if ( WIN32 )
    include( "./settings.win32.cmake" )
elseif ( UNIX )
    include( "./settings.unix.cmake" )
endif ( WIN32 )

message( STATUS $ENV{PATH} )


add_subdirectory( "./3dparty" )
add_subdirectory( "./libio" )
add_subdirectory( "./ser_num_assigner" )
add_subdirectory( "./test" )
if ( WIN32 )
    add_subdirectory( "./lcu03" )
    add_subdirectory( "./libextctrl" )
    add_subdirectory( "./libluafactory" )
endif ( WIN32 )

CONFIGURE_FILE( ${CMAKE_CURRENT_SOURCE_DIR}/version.h.in ${CMAKE_BINARY_DIR}/version.h )
