
#ifndef __EEPROM_CTRL_H_
#define __EEPROM_CTRL_H_

#include "ch.h"

void eepromInit( void );
int eepromWrite( uint8_t addr, uint8_t cnt, uint8_t * data );
int eepromRead( uint8_t addr, uint8_t cnt, uint8_t * data );

// What will be written on shutdown.
//
void eepromClrSdData( void );
void eepromSetSdAddr( uint8_t addr );
uint8_t eepromSdAddr( void );
void eepromAddSdData( uint8_t cnt, uint8_t * data );

// Emergency EEPROM write.
void eepromEmergencyI( void );
// Read motor positions.
void eepromReadMotorPos( int * pos0, int * pos1 );

#endif


