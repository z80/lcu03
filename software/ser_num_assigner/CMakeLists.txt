
#find_package( Qt4 )
#include( ${QT_USE_FILE} )

    SET(CMAKE_INCLUDE_CURRENT_DIR ON)
    FIND_PACKAGE(Qt5Widgets)
    FIND_PACKAGE(Qt5Core)
    #FIND_PACKAGE(Qt5Xml)
    #FIND_PACKAGE(Qt5Svg)
    SET(CMAKE_AUTOMOC ON)

include_directories( "./src"
                     ${ROOT}/libio/src
                     ${ROOT}/3dparty/qextserialport/src
                     ${CMAKE_CURRENT_BINARY_DIR} )

aux_source_directory( "./src" src )

add_executable( set_num_assigner ${src} )
qt5_use_modules( set_num_assigner Widgets Core )
target_link_libraries( set_num_assigner libio ${QT_LIBRARIES} )
#install( TARGETS set_num_assigner DESTINATION ./ )



