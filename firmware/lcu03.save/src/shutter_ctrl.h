
#ifndef __SHUTTER_CTRL_H_
#define __SHUTTER_CTRL_H_

#include "ch.h"

void shutterInit( void );
void setShutter( uint8_t en );
// This is in case of poweroff to unpower shutter.
void haltShutterI( void );


#endif

