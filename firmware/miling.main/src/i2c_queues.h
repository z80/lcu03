
#ifndef __I2C_QUEUES_H_
#define __I2C_QUEUES_H_

#include "ch.h"

void i2cQueuesInit( int rxSz, int txSz );

InputQueue * i2cSerialInputQueue( void );
OutputQueue * i2cSerialOutputQueue( void );



#endif


