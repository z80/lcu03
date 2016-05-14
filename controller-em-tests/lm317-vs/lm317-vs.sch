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
L LM317EMP U1
U 1 1 572B9637
P 5350 3175
F 0 "U1" H 5150 3375 50  0000 C CNN
F 1 "LM317EMP" H 5350 3375 50  0000 L CNN
F 2 "TO_SOT_Packages_SMD:SOT-223" H 5350 3275 50  0000 C CIN
F 3 "" H 5350 3175 50  0000 C CNN
	1    5350 3175
	1    0    0    -1  
$EndComp
$Comp
L R R1
U 1 1 572B968F
P 6000 3350
F 0 "R1" V 6080 3350 50  0000 C CNN
F 1 "6k8" V 6000 3350 50  0000 C CNN
F 2 "Capacitors_SMD:C_0805_HandSoldering" V 5930 3350 50  0001 C CNN
F 3 "" H 6000 3350 50  0000 C CNN
	1    6000 3350
	1    0    0    -1  
$EndComp
Wire Wire Line
	6000 3200 6000 3125
Wire Wire Line
	5750 3125 7350 3125
Wire Wire Line
	6000 3500 6000 3850
Wire Wire Line
	5350 3425 5350 3650
Wire Wire Line
	5350 3650 6000 3650
Connection ~ 6000 3650
$Comp
L R R2
U 1 1 572B972E
P 6000 4000
F 0 "R2" V 6080 4000 50  0000 C CNN
F 1 "820R" V 6000 4000 50  0000 C CNN
F 2 "Capacitors_SMD:C_0805_HandSoldering" V 5930 4000 50  0001 C CNN
F 3 "" H 6000 4000 50  0000 C CNN
	1    6000 4000
	1    0    0    -1  
$EndComp
$Comp
L GND #PWR01
U 1 1 572B977C
P 6000 4350
F 0 "#PWR01" H 6000 4100 50  0001 C CNN
F 1 "GND" H 6000 4200 50  0000 C CNN
F 2 "" H 6000 4350 50  0000 C CNN
F 3 "" H 6000 4350 50  0000 C CNN
	1    6000 4350
	1    0    0    -1  
$EndComp
Wire Wire Line
	6000 4150 6000 4350
$Comp
L C C3
U 1 1 572B97E2
P 5700 4000
F 0 "C3" H 5725 4100 50  0000 L CNN
F 1 "100n" H 5725 3900 50  0000 L CNN
F 2 "Capacitors_SMD:C_0805_HandSoldering" H 5738 3850 50  0001 C CNN
F 3 "" H 5700 4000 50  0000 C CNN
	1    5700 4000
	1    0    0    -1  
$EndComp
Wire Wire Line
	5700 3850 5700 3650
Connection ~ 5700 3650
Wire Wire Line
	5700 4150 5700 4350
$Comp
L GND #PWR02
U 1 1 572B984B
P 5700 4350
F 0 "#PWR02" H 5700 4100 50  0001 C CNN
F 1 "GND" H 5700 4200 50  0000 C CNN
F 2 "" H 5700 4350 50  0000 C CNN
F 3 "" H 5700 4350 50  0000 C CNN
	1    5700 4350
	1    0    0    -1  
$EndComp
Wire Wire Line
	4000 3125 4950 3125
$Comp
L C C2
U 1 1 572B995B
P 4875 3375
F 0 "C2" H 4900 3475 50  0000 L CNN
F 1 "100n" H 4900 3275 50  0000 L CNN
F 2 "Capacitors_SMD:C_0805_HandSoldering" H 4913 3225 50  0001 C CNN
F 3 "" H 4875 3375 50  0000 C CNN
	1    4875 3375
	1    0    0    -1  
$EndComp
Wire Wire Line
	4875 3025 4875 3225
Connection ~ 4875 3125
Wire Wire Line
	4875 3525 4875 3700
$Comp
L GND #PWR03
U 1 1 572B9A7F
P 4875 3700
F 0 "#PWR03" H 4875 3450 50  0001 C CNN
F 1 "GND" H 4875 3550 50  0000 C CNN
F 2 "" H 4875 3700 50  0000 C CNN
F 3 "" H 4875 3700 50  0000 C CNN
	1    4875 3700
	1    0    0    -1  
$EndComp
$Comp
L C C1
U 1 1 572B9AF5
P 4550 3375
F 0 "C1" H 4575 3475 50  0000 L CNN
F 1 "4u7" H 4575 3275 50  0000 L CNN
F 2 "Capacitors_SMD:C_0805_HandSoldering" H 4588 3225 50  0001 C CNN
F 3 "" H 4550 3375 50  0000 C CNN
	1    4550 3375
	1    0    0    -1  
$EndComp
Wire Wire Line
	4550 3525 4550 3700
$Comp
L GND #PWR04
U 1 1 572B9AFC
P 4550 3700
F 0 "#PWR04" H 4550 3450 50  0001 C CNN
F 1 "GND" H 4550 3550 50  0000 C CNN
F 2 "" H 4550 3700 50  0000 C CNN
F 3 "" H 4550 3700 50  0000 C CNN
	1    4550 3700
	1    0    0    -1  
$EndComp
Wire Wire Line
	4550 3225 4550 3125
Connection ~ 4550 3125
$Comp
L TST P1
U 1 1 572B9B47
P 4000 3125
F 0 "P1" H 4000 3425 50  0000 C BNN
F 1 "in-15v" H 4000 3375 50  0000 C CNN
F 2 "Connect:1pin" H 4000 3125 50  0001 C CNN
F 3 "" H 4000 3125 50  0000 C CNN
	1    4000 3125
	0    -1   -1   0   
$EndComp
Connection ~ 6000 3125
$Comp
L TST P3
U 1 1 572B9BAE
P 7350 3125
F 0 "P3" H 7350 3425 50  0000 C BNN
F 1 "out-12v" H 7350 3375 50  0000 C CNN
F 2 "Connect:1pin" H 7350 3125 50  0001 C CNN
F 3 "" H 7350 3125 50  0000 C CNN
	1    7350 3125
	0    1    1    0   
$EndComp
$Comp
L C C4
U 1 1 572B9C6F
P 6450 3450
F 0 "C4" H 6475 3550 50  0000 L CNN
F 1 "100n" H 6475 3350 50  0000 L CNN
F 2 "Capacitors_SMD:C_0805_HandSoldering" H 6488 3300 50  0001 C CNN
F 3 "" H 6450 3450 50  0000 C CNN
	1    6450 3450
	1    0    0    -1  
$EndComp
Wire Wire Line
	6450 3300 6450 3125
Connection ~ 6450 3125
Wire Wire Line
	6450 3600 6450 3800
$Comp
L GND #PWR05
U 1 1 572B9CF2
P 6450 3800
F 0 "#PWR05" H 6450 3550 50  0001 C CNN
F 1 "GND" H 6450 3650 50  0000 C CNN
F 2 "" H 6450 3800 50  0000 C CNN
F 3 "" H 6450 3800 50  0000 C CNN
	1    6450 3800
	1    0    0    -1  
$EndComp
$Comp
L C C5
U 1 1 572B9D68
P 6750 3450
F 0 "C5" H 6775 3550 50  0000 L CNN
F 1 "4u7" H 6775 3350 50  0000 L CNN
F 2 "Capacitors_SMD:C_0805_HandSoldering" H 6788 3300 50  0001 C CNN
F 3 "" H 6750 3450 50  0000 C CNN
	1    6750 3450
	1    0    0    -1  
$EndComp
Wire Wire Line
	6750 3600 6750 3800
$Comp
L GND #PWR06
U 1 1 572B9D6F
P 6750 3800
F 0 "#PWR06" H 6750 3550 50  0001 C CNN
F 1 "GND" H 6750 3650 50  0000 C CNN
F 2 "" H 6750 3800 50  0000 C CNN
F 3 "" H 6750 3800 50  0000 C CNN
	1    6750 3800
	1    0    0    -1  
$EndComp
Wire Wire Line
	6750 3125 6750 3300
Connection ~ 6750 3125
Wire Wire Line
	7150 3600 7150 3800
$Comp
L GND #PWR07
U 1 1 572B9DEF
P 7150 3800
F 0 "#PWR07" H 7150 3550 50  0001 C CNN
F 1 "GND" H 7150 3650 50  0000 C CNN
F 2 "" H 7150 3800 50  0000 C CNN
F 3 "" H 7150 3800 50  0000 C CNN
	1    7150 3800
	1    0    0    -1  
$EndComp
$Comp
L CP C6
U 1 1 572B9E01
P 7150 3450
F 0 "C6" H 7175 3550 50  0000 L CNN
F 1 "CP" H 7175 3350 50  0000 L CNN
F 2 "Capacitors_ThroughHole:C_Radial_D8_L11.5_P3.5" H 7188 3300 50  0001 C CNN
F 3 "" H 7150 3450 50  0000 C CNN
	1    7150 3450
	1    0    0    -1  
$EndComp
Wire Wire Line
	7150 3125 7150 3300
Connection ~ 7150 3125
$Comp
L TST P2
U 1 1 572B9F41
P 4250 4300
F 0 "P2" H 4250 4600 50  0000 C BNN
F 1 "gnd" H 4250 4550 50  0000 C CNN
F 2 "Connect:1pin" H 4250 4300 50  0001 C CNN
F 3 "" H 4250 4300 50  0000 C CNN
	1    4250 4300
	1    0    0    -1  
$EndComp
Wire Wire Line
	4250 4300 4250 4500
$Comp
L GND #PWR08
U 1 1 572B9FD2
P 4250 4500
F 0 "#PWR08" H 4250 4250 50  0001 C CNN
F 1 "GND" H 4250 4350 50  0000 C CNN
F 2 "" H 4250 4500 50  0000 C CNN
F 3 "" H 4250 4500 50  0000 C CNN
	1    4250 4500
	1    0    0    -1  
$EndComp
$Comp
L PWR_FLAG #FLG09
U 1 1 572BA058
P 4875 3025
F 0 "#FLG09" H 4875 3120 50  0001 C CNN
F 1 "PWR_FLAG" H 4875 3205 50  0000 C CNN
F 2 "" H 4875 3025 50  0000 C CNN
F 3 "" H 4875 3025 50  0000 C CNN
	1    4875 3025
	1    0    0    -1  
$EndComp
$Comp
L PWR_FLAG #FLG010
U 1 1 572BA1D3
P 3925 4300
F 0 "#FLG010" H 3925 4395 50  0001 C CNN
F 1 "PWR_FLAG" H 3925 4480 50  0000 C CNN
F 2 "" H 3925 4300 50  0000 C CNN
F 3 "" H 3925 4300 50  0000 C CNN
	1    3925 4300
	1    0    0    -1  
$EndComp
Wire Wire Line
	3925 4300 3925 4350
Wire Wire Line
	3925 4350 4425 4350
Connection ~ 4250 4350
$Comp
L TST P4
U 1 1 572BA5FE
P 4425 4300
F 0 "P4" H 4425 4600 50  0000 C BNN
F 1 "gnd" H 4425 4550 50  0000 C CNN
F 2 "Connect:1pin" H 4425 4300 50  0001 C CNN
F 3 "" H 4425 4300 50  0000 C CNN
	1    4425 4300
	1    0    0    -1  
$EndComp
Wire Wire Line
	4425 4350 4425 4300
$EndSCHEMATC