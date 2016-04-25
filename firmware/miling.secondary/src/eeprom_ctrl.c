
#include "eeprom_ctrl.h"
#include "hal.h"

#define MOTOR_POS_ADDR (16*3) // Start of 4-th page.
#define MOTOR_DEF_POS_ADDR (256-16) // Start of the last page.

#define WC_PORT GPIOB
#define WC_PAD  9

#define I2C_TIMEOUT 250
#define EEPROM_ADDR 0x50
#define EEPROM_BUFFER_SZ 32
#define EEPROM_SD_BUFFER_SZ 32
uint8_t eeprom_buffer[ EEPROM_BUFFER_SZ ];
uint8_t eeprom_sd_size = 0;
uint8_t eeprom_sd_buffer[ EEPROM_BUFFER_SZ ];

static WORKING_AREA( waEeprom, 1024 );
static msg_t eepromThread( void *arg );

#define     EEPROM_QUEUE_SZ   (1)
InputQueue  eeprom_queue;
uint8_t     eeprom_queue_buffer[EEPROM_QUEUE_SZ];


static uint8_t crc( uint8_t * data, uint8_t cnt );
static void    emergencyWrite( void );

static const I2CConfig i2ccfg =
{
    OPMODE_I2C,
    100000,
    STD_DUTY_CYCLE,
};

int eepromWrite( uint8_t addr, uint8_t cnt, uint8_t * data )
{
    uint8_t i;
    eeprom_buffer[0] = addr;
    for ( i=0; i<cnt; i++ )
        eeprom_buffer[i+1] = data[i];

    const systime_t tmo = MS2ST( I2C_TIMEOUT );
    // Write control to low.
    palClearPad( WC_PORT, WC_PAD );
    // Data exchange.
    msg_t res = i2cMasterTransmitTimeout( &I2CD1, EEPROM_ADDR, eeprom_buffer, cnt+1, 0, 0, tmo );
    // Write control high.
    palSetPad( WC_PORT, WC_PAD );

    return res;
}

int eepromRead( uint8_t addr, uint8_t cnt, uint8_t * data )
{
    eeprom_buffer[0] = addr;
    const systime_t tmo = MS2ST( I2C_TIMEOUT );
    msg_t res = i2cMasterTransmitTimeout( &I2CD1, EEPROM_ADDR, eeprom_buffer, 1, data, cnt, tmo );
    return res;
}

void eepromReadMotorPos( int * pos0, int * pos1 )
{
    const systime_t tmo = MS2ST( I2C_TIMEOUT );
    // First read CRC and compare it with current one.
    // And overwrite only if CRC doesn't match.
    uint8_t addr = eeprom_sd_buffer[0];
    // Should check if it is possible read just one byte after writing 1 byte.
    // As I remember there is a problem with it.
    msg_t res = i2cMasterTransmitTimeout( &I2CD1, EEPROM_ADDR, &addr, 1, &(eeprom_buffer[1]), 9, tmo );
    if ( res == RDY_OK )
    {
        uint8_t crc8 = crc(eeprom_buffer, 8);
        if ( crc8 == eeprom_buffer[9] )
        {
            *pos0 = ( (int)eeprom_buffer[1] ) +
                    ( (int)eeprom_buffer[2] << 8 ) +
                    ( (int)eeprom_buffer[3] << 16 ) +
                    ( (int)eeprom_buffer[4] << 24 );

            *pos1 = ( (int)eeprom_buffer[5] ) +
                    ( (int)eeprom_buffer[6] << 8 ) +
                    ( (int)eeprom_buffer[7] << 16 ) +
                    ( (int)eeprom_buffer[8] << 24 );
        }
    }
}


static void emergencyWrite( void )
{
    if ( eeprom_sd_size > 0 )
    {
        const systime_t tmo = MS2ST( I2C_TIMEOUT );
        // First read CRC and compare it with current one.
        // And overwrite only if CRC doesn't match.
        uint8_t addr = eeprom_sd_buffer[0];
        // Should check if it is possible read just one byte after writing 1 byte.
        // As I remember there is a problem with it.
        msg_t res = i2cMasterTransmitTimeout( &I2CD1, EEPROM_ADDR, &addr, 1, eeprom_buffer, eeprom_sd_size+1, tmo );
        if ( ( res != RDY_OK ) || ( eeprom_buffer[eeprom_sd_size] != eeprom_sd_buffer[eeprom_sd_size+1] ) )
        {
            // Write control to low.
            palClearPad( WC_PORT, WC_PAD );
            // Here size+2 because 1) address goes first and 2) CRC goes after data.
            res = i2cMasterTransmitTimeout( &I2CD1, EEPROM_ADDR, eeprom_sd_buffer, eeprom_sd_size+2, 0, 0, tmo );
            // Write control to high.
            palSetPad( WC_PORT, WC_PAD );
        }
    }
}

static msg_t eepromThread( void *arg )
{
    (void)arg;
    chRegSetThreadName( "sh" );
    while ( 1 )
    {
        msg_t msg;
        msg = chIQGet( &eeprom_queue );

        // If anything is received it means
        // immediate write is needed.
        emergencyWrite();
    }

    return 0;
}

void eepromAddSdData( uint8_t cnt, uint8_t * data )
{
    uint8_t i;
    for ( i=0; i<cnt; i++ )
    {
        eeprom_sd_size += 1;
        eeprom_sd_buffer[eeprom_sd_size] = data[i];
    }
    // The very next byte after data is CRC.
    eeprom_sd_buffer[eeprom_sd_size+1] = crc( eeprom_sd_buffer, eeprom_sd_size );
}


void eepromInit( void )
{
    i2cStart( &I2CD1, &i2ccfg );

    // Tune ports for I2C1.
    palSetPadMode( GPIOB, 6, PAL_MODE_STM32_ALTERNATE_OPENDRAIN );
    palSetPadMode( GPIOB, 7, PAL_MODE_STM32_ALTERNATE_OPENDRAIN );

    // Write control to high.
    palSetPad( WC_PORT, WC_PAD );
    palSetPadMode( WC_PORT, WC_PAD, PAL_MODE_OUTPUT_PUSHPULL );

    // Default position for shutdown (SD) data.
    eeprom_sd_buffer[0] = eepromSdAddr();
    // Default data size is zero.
    eeprom_sd_size = 0;

    // Command queue init.
    chIQInit( &eeprom_queue, eeprom_queue_buffer, EEPROM_QUEUE_SZ, NULL );
    // Execution thread init.
    chThdCreateStatic( waEeprom, sizeof(waEeprom), NORMALPRIO, eepromThread, NULL );
}


void eepromClrSdData( void )
{
    eeprom_sd_size = 0;
}

void eepromSetSdAddr( uint8_t addr )
{
    // Set the variable where it is supposed to be.
    eeprom_sd_buffer[0] = addr;

    // And overwrite EEPROM location of this value.
    const systime_t tmo = MS2ST( I2C_TIMEOUT );
    uint8_t data[2];
    data[0] = MOTOR_POS_ADDR;
    data[1] = addr;
    i2cMasterTransmitTimeout( &I2CD1, EEPROM_ADDR, data, 2, 0, 0, tmo );
}

uint8_t eepromSdAddr( void )
{
    const systime_t tmo = MS2ST( I2C_TIMEOUT );

    uint8_t data[2];
    uint8_t addr = MOTOR_POS_ADDR;
    // Can't read just one byte. Read two but use only first one.
    msg_t msg = i2cMasterTransmitTimeout( &I2CD1, EEPROM_ADDR, &addr, 1, data, 2, tmo );
    if ( ( msg == RDY_OK ) && ( data[0] <= (256-9) ) )
        addr = data[0];
    else
        addr = MOTOR_DEF_POS_ADDR;
    return addr;
}



void eepromEmergencyI( void )
{
    chIQPutI( &eeprom_queue, 1 );
}




static uint8_t crc( uint8_t * data, uint8_t cnt )
{
    const uint8_t POLY = 0x8C;
    uint8_t val;
    val = 0;
    uint8_t i;
    for ( i=1; i<(cnt+1); i++ )
    {
        val ^= data[i];
        uint8_t j;
        for ( j=0; j<8; j++ )
        {
            if ( val & 0x01 )
                val = ( val >> 1 ) ^ POLY;
            else
                val = ( val >> 1 );
        }
    }
    return val;
}











