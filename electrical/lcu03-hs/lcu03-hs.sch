EESchema Schematic File Version 2
LIBS:power
LIBS:device
LIBS:transistors
LIBS:conn
LIBS:linear
LIBS:regul
LIBS:74xx
LIBS:cmos4000
LIBS:adc-dac
LIBS:memory
LIBS:xilinx
LIBS:microcontrollers
LIBS:dsp
LIBS:microchip
LIBS:analog_switches
LIBS:motorola
LIBS:texas
LIBS:intel
LIBS:audio
LIBS:interface
LIBS:digital-audio
LIBS:philips
LIBS:display
LIBS:cypress
LIBS:siliconi
LIBS:opto
LIBS:atmel
LIBS:contrib
LIBS:valves
LIBS:lcu03-hs-cache
EELAYER 25 0
EELAYER END
$Descr A4 11693 8268
encoding utf-8
Sheet 1 1
Title ""
Date ""
Rev ""
Comp ""
Comment1 ""
Comment2 ""
Comment3 ""
Comment4 ""
$EndDescr
$Comp
L a110x U1
U 1 1 56671B77
P 5300 3700
F 0 "U1" H 5300 3650 60  0000 C CNN
F 1 "a110x" H 5300 3750 60  0000 C CNN
F 2 "lcu03:SOT-23-wide" H 5300 3700 60  0001 C CNN
F 3 "" H 5300 3700 60  0000 C CNN
	1    5300 3700
	0    -1   1    0   
$EndComp
Wire Wire Line
	4800 3700 4600 3700
Wire Wire Line
	4600 3550 4600 3850
$Comp
L GND #PWR01
U 1 1 56671E5D
P 4600 3850
F 0 "#PWR01" H 4600 3600 50  0001 C CNN
F 1 "GND" H 4600 3700 50  0000 C CNN
F 2 "" H 4600 3850 50  0000 C CNN
F 3 "" H 4600 3850 50  0000 C CNN
	1    4600 3850
	1    0    0    -1  
$EndComp
Wire Wire Line
	5750 3500 5950 3500
Wire Wire Line
	5950 3500 5950 3300
$Comp
L VCC #PWR02
U 1 1 56671E7A
P 5950 3300
F 0 "#PWR02" H 5950 3150 50  0001 C CNN
F 1 "VCC" H 5950 3450 50  0000 C CNN
F 2 "" H 5950 3300 50  0000 C CNN
F 3 "" H 5950 3300 50  0000 C CNN
	1    5950 3300
	1    0    0    -1  
$EndComp
$Comp
L R R1
U 1 1 56671E90
P 6200 3600
F 0 "R1" V 6280 3600 50  0000 C CNN
F 1 "10k" V 6200 3600 50  0000 C CNN
F 2 "Resistors_SMD:R_0603" V 6130 3600 50  0001 C CNN
F 3 "" H 6200 3600 50  0000 C CNN
	1    6200 3600
	1    0    0    -1  
$EndComp
Wire Wire Line
	5750 3900 6550 3900
Wire Wire Line
	6200 3900 6200 3750
Connection ~ 6200 3900
Wire Wire Line
	6200 3450 6200 3300
$Comp
L VCC #PWR03
U 1 1 56671EF4
P 6200 3300
F 0 "#PWR03" H 6200 3150 50  0001 C CNN
F 1 "VCC" H 6200 3450 50  0000 C CNN
F 2 "" H 6200 3300 50  0000 C CNN
F 3 "" H 6200 3300 50  0000 C CNN
	1    6200 3300
	1    0    0    -1  
$EndComp
$Comp
L C C1
U 1 1 56671F0C
P 6950 3600
F 0 "C1" H 6975 3700 50  0000 L CNN
F 1 "100n" H 6975 3500 50  0000 L CNN
F 2 "Capacitors_SMD:C_0603" H 6988 3450 50  0001 C CNN
F 3 "" H 6950 3600 50  0000 C CNN
	1    6950 3600
	1    0    0    -1  
$EndComp
Wire Wire Line
	6950 3450 6950 3300
$Comp
L VCC #PWR04
U 1 1 56672046
P 6950 3300
F 0 "#PWR04" H 6950 3150 50  0001 C CNN
F 1 "VCC" H 6950 3450 50  0000 C CNN
F 2 "" H 6950 3300 50  0000 C CNN
F 3 "" H 6950 3300 50  0000 C CNN
	1    6950 3300
	1    0    0    -1  
$EndComp
Wire Wire Line
	6950 3750 6950 3900
$Comp
L GND #PWR05
U 1 1 56672069
P 6950 3900
F 0 "#PWR05" H 6950 3650 50  0001 C CNN
F 1 "GND" H 6950 3750 50  0000 C CNN
F 2 "" H 6950 3900 50  0000 C CNN
F 3 "" H 6950 3900 50  0000 C CNN
	1    6950 3900
	1    0    0    -1  
$EndComp
Text Label 6400 3900 0    60   ~ 0
out
$Comp
L PWR_FLAG #FLG06
U 1 1 566720CC
P 7250 3350
F 0 "#FLG06" H 7250 3445 50  0001 C CNN
F 1 "PWR_FLAG" H 7250 3530 50  0000 C CNN
F 2 "" H 7250 3350 50  0000 C CNN
F 3 "" H 7250 3350 50  0000 C CNN
	1    7250 3350
	1    0    0    -1  
$EndComp
Wire Wire Line
	7250 3350 7250 3400
Wire Wire Line
	7250 3400 6950 3400
Connection ~ 6950 3400
$Comp
L CONN_01X03 P2
U 1 1 5667232D
P 6000 1850
F 0 "P2" H 6000 2050 50  0000 C CNN
F 1 "Side conns" V 6100 1850 50  0000 C CNN
F 2 "Pin_Headers:Pin_Header_Angled_1x03" H 6000 1850 50  0001 C CNN
F 3 "" H 6000 1850 50  0000 C CNN
	1    6000 1850
	0    -1   -1   0   
$EndComp
Wire Wire Line
	6000 2050 6000 2400
$Comp
L GND #PWR07
U 1 1 566723D2
P 6000 2400
F 0 "#PWR07" H 6000 2150 50  0001 C CNN
F 1 "GND" H 6000 2250 50  0000 C CNN
F 2 "" H 6000 2400 50  0000 C CNN
F 3 "" H 6000 2400 50  0000 C CNN
	1    6000 2400
	1    0    0    -1  
$EndComp
Wire Wire Line
	5900 2050 5900 2250
Wire Wire Line
	5900 2250 5650 2250
Wire Wire Line
	5650 2250 5650 2150
$Comp
L VCC #PWR08
U 1 1 56672420
P 5650 2150
F 0 "#PWR08" H 5650 2000 50  0001 C CNN
F 1 "VCC" H 5650 2300 50  0000 C CNN
F 2 "" H 5650 2150 50  0000 C CNN
F 3 "" H 5650 2150 50  0000 C CNN
	1    5650 2150
	1    0    0    -1  
$EndComp
Wire Wire Line
	6100 2050 6100 2250
Wire Wire Line
	6100 2250 6400 2250
Text Label 6250 2250 0    60   ~ 0
out
$Comp
L CONN_01X01 P1
U 1 1 566724B9
P 4650 1850
F 0 "P1" H 4650 1950 50  0000 C CNN
F 1 "Screw hole" V 4750 1850 50  0000 C CNN
F 2 "Connect:1pin" H 4650 1850 50  0001 C CNN
F 3 "" H 4650 1850 50  0000 C CNN
	1    4650 1850
	0    -1   -1   0   
$EndComp
Wire Wire Line
	4650 2050 4650 2400
$Comp
L PWR_FLAG #FLG010
U 1 1 5667299A
P 4600 3550
F 0 "#FLG010" H 4600 3645 50  0001 C CNN
F 1 "PWR_FLAG" H 4600 3730 50  0000 C CNN
F 2 "" H 4600 3550 50  0000 C CNN
F 3 "" H 4600 3550 50  0000 C CNN
	1    4600 3550
	1    0    0    -1  
$EndComp
Connection ~ 4600 3700
NoConn ~ 4650 2400
$EndSCHEMATC
