
    SET(CMAKE_INCLUDE_CURRENT_DIR ON)
    FIND_PACKAGE(Qt5Widgets)
    FIND_PACKAGE(Qt5Core)
    SET(CMAKE_AUTOMOC ON)


file( GLOB src     "./src/*.cpp" )
file( GLOB headers "./src/*.h" )
include_directories( "./src" 
                     "${ROOT}/libextctrl/src" 
                     "${_3DPARTY}/lua-5.1.5/src" )
                     
set( src ${src} )

add_library( lualcu03 SHARED ${src} )
list( APPEND libs liblua-5.1.5 libremote )
qt5_use_modules( lualcu03 Widgets Core )

target_link_libraries( lualcu03 ${libs} ${QT_LIBRARIES} )


install( TARGETS lualcu03 DESTINATION "./bin" )
install( DIRECTORY "./lua/" DESTINATION "./.lua" )

