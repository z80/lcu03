setwd( "c:/projects/lcu03.git/controller-em-tests/em-data" )

doff <- read.csv( './off3m.csv', header=F, sep="\t", dec=".", skip=5 )
specSz <- length( doff[1,] )
sampleSz <- length( doff[,1] )
wl <- t( doff[1, 5:specSz] )[, 1]
off <- apply( doff[3:sampleSz, 5:specSz], 2, mean )
sdOff <- apply( doff[3:sampleSz, 5:specSz], 2, sd )

don <- read.csv( './on3m-init.csv', header=F, sep="\t", dec=".", skip=5 )
sampleSz <- length( don[,1] )
on <- apply( don[3:sampleSz, 5:specSz], 2, mean )

dOnNoUsb <- read.csv( './on3m-init-no-usb.csv', header=F, sep="\t", dec=".", skip=5 )
sampleSz <- length( dOnNoUsb[,1] )
onNoUsb <- apply( dOnNoUsb[3:sampleSz, 5:specSz], 2, mean )





dShieldedOn <- read.csv( './shielded-on3m-init.csv', header=F, sep="\t", dec=".", skip=5 )
sampleSz <- length( dShieldedOn[,1] )
shieldedOn <- apply( dShieldedOn[3:sampleSz, 5:specSz], 2, mean )

dShieldedOnNoUsb <- read.csv( './shielded-on3m-init-no-usb.csv', header=F, sep="\t", dec=".", skip=5 )
sampleSz <- length( dShieldedOnNoUsb[,1] )
shieldedOnNoUsb <- apply( dShieldedOnNoUsb[3:sampleSz, 5:specSz], 2, mean )



par(mfrow=c(3, 1))
plot( x=wl, y=on-off, type="b", col="red" )
grid( col="grey", lty="dotted" )

plot( x=wl, y=onNoUsb-off, type="b", col="green" )
grid( col="grey", lty="dotted" )

plot( x=wl, y=on-onNoUsb, type="b", col="magenta" )
grid( col="grey", lty="dotted" )



par(mfrow=c(3, 1))
plot( x=wl, y=shieldedOn-off, type="b", col="black" )
grid( col="grey", lty="dotted" )

plot( x=wl, y=shieldedOnNoUsb-off, type="b", col="red" )
grid( col="grey", lty="dotted" )

plot( x=wl, y=shieldedOn-shieldedOnNoUsb, type="b", col="green" )
grid( col="grey", lty="dotted" )





par(mfrow=c(2, 1))
plot( x=wl, y=on-shieldedOn, type="b", col="black" )
grid( col="grey", lty="dotted" )

plot( x=wl, y=onNoUsb-shieldedOnNoUsb, type="b", col="red" )
grid( col="grey", lty="dotted" )




dsonc <- read.csv( './shielded-on3m-init-no-usb-canned.csv', header=F, sep="\t", dec=".", skip=5 )
sampleSz <- length( dsonc[,1] )
sonc <- apply( dsonc[3:sampleSz, 5:specSz], 2, mean )


par(mfrow=c(1, 1))
plot( x=wl, y=off, type="b", col="grey", ylim=c(-120, -60), main="\n\n\ngrey-environment, all off\nblue-environment RMS\nred-regular controller\nmagenta-improved controller\nblack-shielded initialized and canned" )
grid( col="grey", lty="dotted" )

#lines( x=wl, y=off+sdOff, type="l", col="blue" )
#lines( x=wl, y=off-sdOff, type="l", col="blue" )

lines( x=wl, y=onNoUsb-off-108, type="b", col="red" )
lines( x=wl, y=shieldedOnNoUsb-off-108, type="b", col="magenta" )
lines( x=wl, y=sonc-off-108, type="b", col="black" )
lines( x=wl, y=-108-sdOff, type="l", col="blue" )
lines( x=wl, y=-108+sdOff, type="l", col="blue" )



















# Near field examinations
doff <- read.csv( './off.csv', header=F, sep="\t", dec=".", skip=5 )
specSz <- length( doff[1,] )
sampleSz <- length( doff[,1] )
wl <- t( doff[1, 5:specSz] )[, 1]
off <- apply( doff[3:sampleSz, 5:specSz], 2, mean )
sdOff <- apply( doff[3:sampleSz, 5:specSz], 2, sd )

don <- read.csv( './on.csv', header=F, sep="\t", dec=".", skip=5 )
sampleSz <- length( don[,1] )
on <- apply( don[3:sampleSz, 5:specSz], 2, mean )

dson <- read.csv( './shielded-on.csv', header=F, sep="\t", dec=".", skip=5 )
sampleSz <- length( dson[,1] )
son <- apply( dson[3:sampleSz, 5:specSz], 2, mean )

par(mfrow=c(1, 1))
plot( x=wl, y=off, type="b", col="grey", ylim=c(-120, -60), main="\n\n\ngrey-environment, all off\nblue-environment RMS\nred-regular controller\nmagenta-improved controller" )
grid( col="grey", lty="dotted" )

#lines( x=wl, y=off+sdOff, type="l", col="blue" )
#lines( x=wl, y=off-sdOff, type="l", col="blue" )

lines( x=wl, y=on-off-108, type="b", col="red" )
lines( x=wl, y=son-off-108, type="b", col="magenta" )
lines( x=wl, y=-108-sdOff, type="l", col="blue" )
lines( x=wl, y=-108+sdOff, type="l", col="blue" )




doff <- read.csv( './off-canned.csv', header=F, sep="\t", dec=".", skip=5 )
specSz <- length( doff[1,] )
sampleSz <- length( doff[,1] )
wl <- t( doff[1, 5:specSz] )[, 1]
off <- apply( doff[3:sampleSz, 5:specSz], 2, mean )
sdOff <- apply( doff[3:sampleSz, 5:specSz], 2, sd )

dsonc <- read.csv( './shielded-on3m-init-no-usb-canned.csv', header=F, sep="\t", dec=".", skip=5 )
sampleSz <- length( dsonc[,1] )
sonc <- apply( dsonc[3:sampleSz, 5:specSz], 2, mean )

par(mfrow=c(1, 1))
plot( x=wl, y=off, type="b", col="grey", ylim=c(-120, -60), main="\n\n\ngrey-environment, all off\nblue-environment RMS\nblack-canned on shielded controller no USB cable" )
grid( col="grey", lty="dotted" )

lines( x=wl, y=sonc-off-108, type="b", col="black" )
lines( x=wl, y=-108-sdOff, type="l", col="blue" )
lines( x=wl, y=-108+sdOff, type="l", col="blue" )
