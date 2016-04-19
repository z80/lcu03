
#ifndef __MOTOR_CTRL_H_
#define __MOTOR_CTRL_H_

#include "ch.h"

void motorInit( void );
void motorSetPos( int index, int pos );
void motorSetParams( int vmin, int vmax, int acc );
void motorSetRevSteps( int cnt );
//void motorMove( int index, int pos );
void motorSensorData( int index, int * activated, int * pos );
int motorInMotion( int index, int * pos );
int motorPos( int index );
void motorStop( int index );
void motorMove( int8_t * s );


#endif

