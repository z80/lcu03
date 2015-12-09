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
LIBS:cp2102
LIBS:crystal-4pin
LIBS:ncp3063
LIBS:stm32f103cbt6
LIBS:my_comps
LIBS:lb1930mc
LIBS:a4985
LIBS:ts881
LIBS:m24c02
LIBS:lcu03-cache
EELAYER 25 0
EELAYER END
$Descr A4 11693 8268
encoding utf-8
Sheet 2 3
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
L a4985 U?
U 1 1 5667C673
P 4650 3350
AR Path="/5667C1E7/5667C673" Ref="U?"  Part="1" 
AR Path="/56687F5B/5667C673" Ref="U?"  Part="1" 
F 0 "U?" H 4650 4550 60  0000 C CNN
F 1 "a4985" V 4650 3350 60  0000 C CNN
F 2 "" H 4650 3350 60  0000 C CNN
F 3 "" H 4650 3350 60  0000 C CNN
	1    4650 3350
	1    0    0    -1  
$EndComp
Wire Wire Line
	4050 3150 3600 3150
Wire Wire Line
	4050 3350 3600 3350
Wire Wire Line
	4050 3550 3450 3550
$Comp
L C C?
U 1 1 5667C682
P 3700 2350
AR Path="/5667C1E7/5667C682" Ref="C?"  Part="1" 
AR Path="/56687F5B/5667C682" Ref="C?"  Part="1" 
F 0 "C?" H 3725 2450 50  0000 L CNN
F 1 "100n" V 3650 2000 50  0000 L CNN
F 2 "" H 3738 2200 50  0000 C CNN
F 3 "" H 3700 2350 50  0000 C CNN
	1    3700 2350
	0    1    1    0   
$EndComp
Wire Wire Line
	4050 2350 3850 2350
Wire Wire Line
	4050 2550 3350 2550
Wire Wire Line
	3350 2550 3350 2350
Wire Wire Line
	3350 2350 3550 2350
$Comp
L C C?
U 1 1 5667C68D
P 3700 2750
AR Path="/5667C1E7/5667C68D" Ref="C?"  Part="1" 
AR Path="/56687F5B/5667C68D" Ref="C?"  Part="1" 
F 0 "C?" H 3725 2850 50  0000 L CNN
F 1 "100n" V 3650 2450 50  0000 L CNN
F 2 "" H 3738 2600 50  0000 C CNN
F 3 "" H 3700 2750 50  0000 C CNN
	1    3700 2750
	0    1    1    0   
$EndComp
Wire Wire Line
	4050 2750 3850 2750
Wire Wire Line
	3150 2750 3550 2750
Wire Wire Line
	3150 1600 3150 2750
$Comp
L C C?
U 1 1 5667C697
P 3700 2950
AR Path="/5667C1E7/5667C697" Ref="C?"  Part="1" 
AR Path="/56687F5B/5667C697" Ref="C?"  Part="1" 
F 0 "C?" H 3725 3050 50  0000 L CNN
F 1 "220n" V 3650 2650 50  0000 L CNN
F 2 "" H 3738 2800 50  0000 C CNN
F 3 "" H 3700 2950 50  0000 C CNN
	1    3700 2950
	0    1    1    0   
$EndComp
Wire Wire Line
	4050 2950 3850 2950
Wire Wire Line
	3550 2950 3150 2950
Wire Wire Line
	3150 2950 3150 3050
$Comp
L GND #PWR?
U 1 1 5667C6A1
P 3150 3050
AR Path="/5667C1E7/5667C6A1" Ref="#PWR?"  Part="1" 
AR Path="/56687F5B/5667C6A1" Ref="#PWR?"  Part="1" 
F 0 "#PWR?" H 3150 2800 50  0001 C CNN
F 1 "GND" H 3150 2900 50  0000 C CNN
F 2 "" H 3150 3050 50  0000 C CNN
F 3 "" H 3150 3050 50  0000 C CNN
	1    3150 3050
	1    0    0    -1  
$EndComp
Wire Wire Line
	4050 4150 3150 4150
Wire Wire Line
	3150 4050 3150 4250
$Comp
L C C?
U 1 1 5667C6AF
P 3150 4400
AR Path="/5667C1E7/5667C6AF" Ref="C?"  Part="1" 
AR Path="/56687F5B/5667C6AF" Ref="C?"  Part="1" 
F 0 "C?" H 3175 4500 50  0000 L CNN
F 1 "100n" H 3175 4300 50  0000 L CNN
F 2 "" H 3188 4250 50  0000 C CNN
F 3 "" H 3150 4400 50  0000 C CNN
	1    3150 4400
	1    0    0    -1  
$EndComp
Connection ~ 3150 4150
Wire Wire Line
	3150 4550 3150 4650
$Comp
L GND #PWR?
U 1 1 5667C6B8
P 3150 4650
AR Path="/5667C1E7/5667C6B8" Ref="#PWR?"  Part="1" 
AR Path="/56687F5B/5667C6B8" Ref="#PWR?"  Part="1" 
F 0 "#PWR?" H 3150 4400 50  0001 C CNN
F 1 "GND" H 3150 4500 50  0000 C CNN
F 2 "" H 3150 4650 50  0000 C CNN
F 3 "" H 3150 4650 50  0000 C CNN
	1    3150 4650
	1    0    0    -1  
$EndComp
Wire Wire Line
	4050 4350 3600 4350
Wire Wire Line
	4050 4550 3600 4550
Wire Wire Line
	5250 4550 5450 4550
Wire Wire Line
	5450 4550 5450 4750
$Comp
L GND #PWR?
U 1 1 5667C6C4
P 5450 4750
AR Path="/5667C1E7/5667C6C4" Ref="#PWR?"  Part="1" 
AR Path="/56687F5B/5667C6C4" Ref="#PWR?"  Part="1" 
F 0 "#PWR?" H 5450 4500 50  0001 C CNN
F 1 "GND" H 5450 4600 50  0000 C CNN
F 2 "" H 5450 4750 50  0000 C CNN
F 3 "" H 5450 4750 50  0000 C CNN
	1    5450 4750
	1    0    0    -1  
$EndComp
Wire Wire Line
	4550 4850 4550 5050
$Comp
L GND #PWR?
U 1 1 5667C6CB
P 4550 5050
AR Path="/5667C1E7/5667C6CB" Ref="#PWR?"  Part="1" 
AR Path="/56687F5B/5667C6CB" Ref="#PWR?"  Part="1" 
F 0 "#PWR?" H 4550 4800 50  0001 C CNN
F 1 "GND" H 4550 4900 50  0000 C CNN
F 2 "" H 4550 5050 50  0000 C CNN
F 3 "" H 4550 5050 50  0000 C CNN
	1    4550 5050
	1    0    0    -1  
$EndComp
Wire Wire Line
	5250 4350 5550 4350
Wire Wire Line
	5250 3950 7000 3950
Wire Wire Line
	7000 2950 7000 4050
Wire Wire Line
	5250 2950 7000 2950
Wire Wire Line
	6550 1900 6550 3050
Wire Wire Line
	4050 3750 2750 3750
Wire Wire Line
	2750 3750 2750 4450
$Comp
L GND #PWR?
U 1 1 5667C6DE
P 2750 4450
AR Path="/5667C1E7/5667C6DE" Ref="#PWR?"  Part="1" 
AR Path="/56687F5B/5667C6DE" Ref="#PWR?"  Part="1" 
F 0 "#PWR?" H 2750 4200 50  0001 C CNN
F 1 "GND" H 2750 4300 50  0000 C CNN
F 2 "" H 2750 4450 50  0000 C CNN
F 3 "" H 2750 4450 50  0000 C CNN
	1    2750 4450
	1    0    0    -1  
$EndComp
Connection ~ 6550 2950
Wire Wire Line
	6550 3350 6550 3450
$Comp
L GND #PWR?
U 1 1 5667C6E6
P 6550 3450
AR Path="/5667C1E7/5667C6E6" Ref="#PWR?"  Part="1" 
AR Path="/56687F5B/5667C6E6" Ref="#PWR?"  Part="1" 
F 0 "#PWR?" H 6550 3200 50  0001 C CNN
F 1 "GND" H 6550 3300 50  0000 C CNN
F 2 "" H 6550 3450 50  0000 C CNN
F 3 "" H 6550 3450 50  0000 C CNN
	1    6550 3450
	1    0    0    -1  
$EndComp
Wire Wire Line
	7000 4350 7000 4450
$Comp
L GND #PWR?
U 1 1 5667C6ED
P 7000 4450
AR Path="/5667C1E7/5667C6ED" Ref="#PWR?"  Part="1" 
AR Path="/56687F5B/5667C6ED" Ref="#PWR?"  Part="1" 
F 0 "#PWR?" H 7000 4200 50  0001 C CNN
F 1 "GND" H 7000 4300 50  0000 C CNN
F 2 "" H 7000 4450 50  0000 C CNN
F 3 "" H 7000 4450 50  0000 C CNN
	1    7000 4450
	1    0    0    -1  
$EndComp
Connection ~ 7000 3950
$Comp
L R-RESCUE-voltamper R?
U 1 1 5667C6F4
P 8450 3150
AR Path="/5667C1E7/5667C6F4" Ref="R?"  Part="1" 
AR Path="/56687F5B/5667C6F4" Ref="R?"  Part="1" 
F 0 "R?" V 8530 3150 40  0000 C CNN
F 1 "1 5%" V 8457 3151 40  0000 C CNN
F 2 "Resistors_SMD:R_0805_HandSoldering" V 8380 3150 30  0001 C CNN
F 3 "~" H 8450 3150 30  0000 C CNN
	1    8450 3150
	0    1    1    0   
$EndComp
Wire Wire Line
	5250 3150 5900 3150
Wire Wire Line
	5250 3750 5900 3750
Text Label 5500 3150 0    60   ~ 0
rsense2-1
Text Label 5500 3750 0    60   ~ 0
rsense1-1
Wire Notes Line
	2650 4150 2050 4850
Text Notes 1600 5450 0    60   ~ 0
Short circuit to ground.\n\nThis turns mixed decay mode \non both rising and falling \nparts of a step. It increases \nEM ripple but prevents steps loss.
$Comp
L C C?
U 1 1 5667C701
P 6550 3200
AR Path="/5667C1E7/5667C701" Ref="C?"  Part="1" 
AR Path="/56687F5B/5667C701" Ref="C?"  Part="1" 
F 0 "C?" H 6575 3300 50  0000 L CNN
F 1 "100n" H 6575 3100 50  0000 L CNN
F 2 "" H 6588 3050 50  0000 C CNN
F 3 "" H 6550 3200 50  0000 C CNN
	1    6550 3200
	1    0    0    -1  
$EndComp
$Comp
L C C?
U 1 1 5667C708
P 7000 4200
AR Path="/5667C1E7/5667C708" Ref="C?"  Part="1" 
AR Path="/56687F5B/5667C708" Ref="C?"  Part="1" 
F 0 "C?" H 7025 4300 50  0000 L CNN
F 1 "100n" H 7025 4100 50  0000 L CNN
F 2 "" H 7038 4050 50  0000 C CNN
F 3 "" H 7000 4200 50  0000 C CNN
	1    7000 4200
	1    0    0    -1  
$EndComp
Wire Wire Line
	8200 3150 7500 3150
Text Label 7600 3150 0    60   ~ 0
rsense2-1
Wire Wire Line
	8700 3150 8900 3150
Wire Wire Line
	8900 3150 8900 3350
$Comp
L GND #PWR?
U 1 1 5667C713
P 8900 3350
AR Path="/5667C1E7/5667C713" Ref="#PWR?"  Part="1" 
AR Path="/56687F5B/5667C713" Ref="#PWR?"  Part="1" 
F 0 "#PWR?" H 8900 3100 50  0001 C CNN
F 1 "GND" H 8900 3200 50  0000 C CNN
F 2 "" H 8900 3350 50  0000 C CNN
F 3 "" H 8900 3350 50  0000 C CNN
	1    8900 3350
	1    0    0    -1  
$EndComp
$Comp
L R-RESCUE-voltamper R?
U 1 1 5667C719
P 8450 3750
AR Path="/5667C1E7/5667C719" Ref="R?"  Part="1" 
AR Path="/56687F5B/5667C719" Ref="R?"  Part="1" 
F 0 "R?" V 8530 3750 40  0000 C CNN
F 1 "1 5%" V 8457 3751 40  0000 C CNN
F 2 "Resistors_SMD:R_0805_HandSoldering" V 8380 3750 30  0001 C CNN
F 3 "~" H 8450 3750 30  0000 C CNN
	1    8450 3750
	0    1    1    0   
$EndComp
Wire Wire Line
	8200 3750 7500 3750
Text Label 7600 3750 0    60   ~ 0
rsense1-1
Wire Wire Line
	8700 3750 8900 3750
Wire Wire Line
	8900 3750 8900 3950
$Comp
L GND #PWR?
U 1 1 5667C724
P 8900 3950
AR Path="/5667C1E7/5667C724" Ref="#PWR?"  Part="1" 
AR Path="/56687F5B/5667C724" Ref="#PWR?"  Part="1" 
F 0 "#PWR?" H 8900 3700 50  0001 C CNN
F 1 "GND" H 8900 3800 50  0000 C CNN
F 2 "" H 8900 3950 50  0000 C CNN
F 3 "" H 8900 3950 50  0000 C CNN
	1    8900 3950
	1    0    0    -1  
$EndComp
Text Notes 7850 2400 0    60   ~ 0
Imax = Vref/(8*Rsi)\nRsi should be big enough to \nresist high current going \nthrough motor winding and Rsi \nsequentially.
Wire Notes Line
	8400 2550 8400 2950
Wire Wire Line
	5250 2350 6100 2350
Wire Wire Line
	6100 2350 6100 2550
$Comp
L GND #PWR?
U 1 1 5667C72E
P 6100 2550
AR Path="/5667C1E7/5667C72E" Ref="#PWR?"  Part="1" 
AR Path="/56687F5B/5667C72E" Ref="#PWR?"  Part="1" 
F 0 "#PWR?" H 6100 2300 50  0001 C CNN
F 1 "GND" H 6100 2400 50  0000 C CNN
F 2 "" H 6100 2550 50  0000 C CNN
F 3 "" H 6100 2550 50  0000 C CNN
	1    6100 2550
	1    0    0    -1  
$EndComp
Wire Wire Line
	5250 2750 5600 2750
Text Label 5350 2750 0    60   ~ 0
out2b-1
Text Label 5350 3350 0    60   ~ 0
out2a-1
Wire Wire Line
	5250 3350 5600 3350
Wire Wire Line
	5250 3550 5600 3550
Text Label 5350 3550 0    60   ~ 0
out1a-1
Wire Wire Line
	5250 4150 5600 4150
Text Label 5350 4150 0    60   ~ 0
out1b-1
$Comp
L CONN_01X04 P?
U 1 1 5667C73C
P 10050 3600
AR Path="/5667C1E7/5667C73C" Ref="P?"  Part="1" 
AR Path="/56687F5B/5667C73C" Ref="P?"  Part="1" 
F 0 "P?" H 10050 3850 50  0000 C CNN
F 1 "step" V 10150 3600 50  0000 C CNN
F 2 "" H 10050 3600 50  0000 C CNN
F 3 "" H 10050 3600 50  0000 C CNN
	1    10050 3600
	1    0    0    -1  
$EndComp
Text Label 9400 3650 0    60   ~ 0
out2a-1
Text Label 9400 3450 0    60   ~ 0
out1a-1
Text Label 9400 3550 0    60   ~ 0
out1b-1
Text Label 9400 3750 0    60   ~ 0
out2b-1
Wire Wire Line
	9850 3450 9350 3450
Wire Wire Line
	9850 3550 9350 3550
Wire Wire Line
	9850 3650 9350 3650
Wire Wire Line
	9850 3750 9350 3750
Wire Wire Line
	6550 1900 3150 1900
Connection ~ 3150 1900
Text HLabel 3150 1600 1    60   Input ~ 0
Vbb
Text HLabel 3150 4050 1    60   Input ~ 0
Vdd
Text HLabel 3600 3150 0    60   Input ~ 0
ms1
Text HLabel 3600 3350 0    60   Input ~ 0
ms2
Text HLabel 3450 3550 0    60   Input ~ 0
~reset~
Text HLabel 3600 3950 0    60   Input ~ 0
~sleep~
Text HLabel 1000 4350 0    60   Input ~ 0
step
Text HLabel 3600 4550 0    60   Input ~ 0
ref
Text HLabel 1000 4600 0    60   Input ~ 0
dir
Text HLabel 5600 2550 2    60   Input ~ 0
~enable~
Wire Wire Line
	3600 3950 4050 3950
Wire Wire Line
	5600 2550 5250 2550
$Comp
L R R?
U 1 1 566C867B
P 1350 4350
F 0 "R?" V 1430 4350 50  0000 C CNN
F 1 "100 5%" V 1350 4350 50  0000 C CNN
F 2 "" V 1280 4350 50  0000 C CNN
F 3 "" H 1350 4350 50  0000 C CNN
	1    1350 4350
	0    1    1    0   
$EndComp
Wire Wire Line
	1500 4350 1800 4350
Wire Wire Line
	1200 4350 1000 4350
Text Label 1600 4350 0    60   ~ 0
step
Text Label 3650 4350 0    60   ~ 0
step
$Comp
L R R?
U 1 1 566C8917
P 1350 4600
F 0 "R?" V 1430 4600 50  0000 C CNN
F 1 "100 5%" V 1350 4600 50  0000 C CNN
F 2 "" V 1280 4600 50  0000 C CNN
F 3 "" H 1350 4600 50  0000 C CNN
	1    1350 4600
	0    1    1    0   
$EndComp
Wire Wire Line
	1500 4600 1800 4600
Wire Wire Line
	1200 4600 1000 4600
Text Label 1600 4600 0    60   ~ 0
dir
Text Label 5350 4350 0    60   ~ 0
dir
Wire Notes Line
	1300 4050 1200 3150
Text Notes 700  3100 0    60   ~ 0
These two through resistors \nbecause these two are switched \nvery often and to resuce a chance \nof false triggering because of digital \nnoise.
$EndSCHEMATC
