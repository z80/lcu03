setwd( "c:/projects/lcu03.git/controller-em-tests/em-data/grid-improved" )

dClosed <- read.csv( './RFExplorer_MultipleSweepData_2016_05_25_00_02_18__0p12_AFM_closed_on.csv', header=F, sep="\t", dec=".", skip=5 )
specSz <- length( dClosed[1,] )
sampleSz <- length( dClosed[,1] )
wl <- t( dClosed[1, 5:specSz] )[, 1]
closed <- apply( dClosed[3:sampleSz, 5:specSz], 2, mean )
#sdOff <- apply( dClosed[3:sampleSz, 5:specSz], 2, sd )

dROpen <- read.csv( './RFExplorer_MultipleSweepData_2016_05_25_00_15_22__0p12_AFM_R_open_on.csv', header=F, sep="\t", dec=".", skip=5 )
sampleSz <- length( dROpen[,1] )
rOpen <- apply( dROpen[3:sampleSz, 5:specSz], 2, mean )

dRLOpen <- read.csv( './RFExplorer_MultipleSweepData_2016_05_25_00_29_16__0p12_AFM_LR_open_on.csv', header=F, sep="\t", dec=".", skip=5 )
sampleSz <- length( dRLOpen[,1] )
rlOpen <- apply( dRLOpen[3:sampleSz, 5:specSz], 2, mean )

dRLHVOpen <- read.csv( './RFExplorer_MultipleSweepData_2016_05_25_00_42_04__0p12_AFM_LR_HV1_L_open_on.csv', header=F, sep="\t", dec=".", skip=5 )
sampleSz <- length( dRLHVOpen[,1] )
rlhvOpen <- apply( dRLHVOpen[3:sampleSz, 5:specSz], 2, mean )

dOff  <- read.csv( './RFExplorer_MultipleSweepData_2016_05_24_20_38_35__far_regular_unscrewed_off.csv', header=F, sep="\t", dec=".", skip=5 )
sampleSz <- length( dOff[,1] )
off <- apply( dOff[3:sampleSz, 5:specSz], 2, mean )





dOff <- list()

dOff1  <- read.csv( './RFExplorer_MultipleSweepData_2016_05_25_10_14_08__0p15_AFM_off1.csv', header=F, sep="\t", dec=".", skip=5 )
sampleSz <- length( dOff1[,1] )
off1 <- apply( dOff1[3:sampleSz, 5:specSz], 2, mean )
wl <- t( dOff1[1, 5:specSz] )[, 1]
dOff <- dOff1[3:sampleSz, 5:specSz]

dOff2  <- read.csv( './RFExplorer_MultipleSweepData_2016_05_25_10_40_16__0p15_AFM_off2.csv', header=F, sep="\t", dec=".", skip=5 )
sampleSz <- length( dOff2[,1] )
off2 <- apply( dOff2[3:sampleSz, 5:specSz], 2, mean )
for(i in 3:sampleSz )
{
  dOff[ length(dOff[,1])+1, 1:(specSz-5) ] <- dOff2[i, 5:specSz]
}

dOff3  <- read.csv( './RFExplorer_MultipleSweepData_2016_05_25_13_36_37__0P15_AFM_OFF3.csv', header=F, sep="\t", dec=".", skip=5 )
sampleSz <- length( dOff3[,1] )
off3 <- apply( dOff3[3:sampleSz, 5:specSz], 2, mean )
for(i in 3:sampleSz )
{
  dOff[ length(dOff[,1])+1, 1:(specSz-5) ] <- dOff3[i, 5:specSz]
}

dOff4  <- read.csv( './RFExplorer_MultipleSweepData_2016_05_25_13_50_28__0P15_AFM_OFF4.csv', header=F, sep="\t", dec=".", skip=5 )
sampleSz <- length( dOff4[,1] )
off4 <- apply( dOff4[3:sampleSz, 5:specSz], 2, mean )
for(i in 3:sampleSz )
{
  dOff[ length(dOff[,1])+1, 1:(specSz-5) ] <- dOff4[i, 5:specSz]
}

dOff5  <- read.csv( './RFExplorer_MultipleSweepData_2016_05_25_14_06_58__0P15_AFM_OFF5.csv', header=F, sep="\t", dec=".", skip=5 )
sampleSz <- length( dOff5[,1] )
off5 <- apply( dOff5[3:sampleSz, 5:specSz], 2, mean )
for(i in 3:sampleSz )
{
  dOff[ length(dOff[,1])+1, 1:(specSz-5) ] <- dOff5[i, 5:specSz]
}

off <- apply( dOff, 2, mean )



dOn1 <- read.csv( './RFExplorer_MultipleSweepData_2016_05_25_10_57_24__0p15_AFM_on1.csv', header=F, sep="\t", dec=".", skip=5 )
sampleSz <- length( dOn1[,1] )
on1 <- apply( dOn1[3:sampleSz, 5:specSz], 2, mean )

dOn2 <- read.csv( './RFExplorer_MultipleSweepData_2016_05_25_11_53_59__0p15_AFM_on2.csv', header=F, sep="\t", dec=".", skip=5 )
sampleSz <- length( dOn2[,1] )
on2 <- apply( dOn2[3:sampleSz, 5:specSz], 2, mean )

dOn3 <- read.csv( './RFExplorer_MultipleSweepData_2016_05_25_12_18_46__0p15_AFM_on3.csv', header=F, sep="\t", dec=".", skip=5 )
sampleSz <- length( dOn3[,1] )
on3 <- apply( dOn3[3:sampleSz, 5:specSz], 2, mean )

dOn4 <- read.csv( './RFExplorer_MultipleSweepData_2016_05_25_12_43_51__0p15_AFM_ON4.csv', header=F, sep="\t", dec=".", skip=5 )
sampleSz <- length( dOn4[,1] )
on4 <- apply( dOn4[3:sampleSz, 5:specSz], 2, mean )

dOn5 <- read.csv( './RFExplorer_MultipleSweepData_2016_05_25_13_18_17__0P15_AFM_ON5.csv', header=F, sep="\t", dec=".", skip=5 )
sampleSz <- length( dOn5[,1] )
on5 <- apply( dOn5[3:sampleSz, 5:specSz], 2, mean )



par(mfrow=c(3, 1))

#plot( x=wl, y=closed, type="b", col="red", main="Fully closed (background suptracted)" )
#grid( col="grey", lty="dotted" )

plot( x=wl, y=rOpen-closed, type="b", col="green", main="Right open - closed" )
grid( col="grey", lty="dotted" )

plot( x=wl, y=rlOpen-closed, type="b", col="green", main="Right and left open - closed" )
grid( col="grey", lty="dotted" )

plot( x=wl, y=rlhvOpen-closed, type="b", col="green", main="Right, left, hv open - closed" )
grid( col="grey", lty="dotted" )




par(mfrow=c(2, 1))

plot( x=wl, y=off1, type="b", col="black", main="Off comparison" )
grid( col="grey", lty="dotted" )
lines( x=wl, y=off2, type="b", col="blue" )
lines( x=wl, y=off3, type="b", col="pink" )
lines( x=wl, y=off4, type="b", col="red" )
lines( x=wl, y=off5, type="b", col="green" )

plot( x=wl, y=on1-off, type="b", col="black", main="On comparison" )
grid( col="grey", lty="dotted" )
lines( x=wl, y=on2-off, type="b", col="blue" )
lines( x=wl, y=on3-off, type="b", col="pink" )
lines( x=wl, y=on4-off, type="b", col="red" )
lines( x=wl, y=on5-off, type="b", col="green" )



setwd( "c:/projects/lcu03.git/controller-em-tests/em-data/" )

dPOff <- read.csv( './RFExplorer_MultipleSweepData_2016_06_29_11_58_33-panelled-off.csv', header=F, sep="\t", dec=".", skip=5 )
specSz <- length( dPOff[1,] )
sampleSz <- length( dPOff[,1] )
wl <- t( dPOff[1, 5:specSz] )[, 1]
pbg <- apply( dPOff[3:sampleSz, 5:specSz], 2, mean )

dPOn <- read.csv( './RFExplorer_MultipleSweepData_2016_06_29_11_14_06-panelled-on.csv', header=F, sep="\t", dec=".", skip=5 )
sampleSz <- length( dPOn[,1] )
pon <- apply( dPOn[3:sampleSz, 5:specSz], 2, mean )


dROn <- read.csv( './RFExplorer_MultipleSweepData_2016_06_29_12_29_23-reg-on.csv', header=F, sep="\t", dec=".", skip=5 )
sampleSz <- length( dROn[,1] )
ron <- apply( dROn[3:sampleSz, 5:specSz], 2, mean )

dROff <- read.csv( './RFExplorer_MultipleSweepData_2016_06_29_12_29_23-reg-off.csv', header=F, sep="\t", dec=".", skip=5 )
sampleSz <- length( dROff[,1] )
roff <- apply( dROff[3:sampleSz, 5:specSz], 2, mean )


par(mfrow=c(3, 1))
plot( x=wl, y=pon-pbg-ron+roff, type="b", col="black", main="Improved - regular" )
grid( col="grey", lty="dotted" )

#par(mfrow=c(1, 1))
plot( x=wl, y=pon-pbg, type="b", col="black", main="Improved" )
grid( col="grey", lty="dotted" )

#par(mfrow=c(1, 1))
plot( x=wl, y=ron-roff, type="b", col="black", main="Regular" )
grid( col="grey", lty="dotted" )
