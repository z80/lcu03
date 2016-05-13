setwd( "~/projects/lcu03.git/controller-em-tests/em-data" )
doff <- read.csv( './off.csv', header=F, sep="\t", dec=".", skip=5 )
#str(d)
specSz <- length( doff[1,] )
sampleSz <- length( doff[,1] )
wl <- t( doff[1, 5:specSz] )[, 1]
off <- apply( doff[3:sampleSz, 5:specSz], 2, mean )
par(mfrow=c(1, 1))
plot( x=wl, y=off, type="b", col="black" )
grid( col="grey", lty="dotted" )

don <- read.csv( './on.csv', header=F, sep="\t", dec=".", skip=5 )
#str(d)
sampleSz <- length( don[,1] )
on <- apply( don[3:sampleSz, 5:specSz], 2, mean )
lines( x=wl, y=on, type="b", col="red" )

dson <- read.csv( './shielded-on.csv', header=F, sep="\t", dec=".", skip=5 )
#str(d)
sampleSz <- length( dson[,1] )
shieldedOn <- apply( dson[3:sampleSz, 5:specSz], 2, mean )
lines( x=wl, y=shieldedOn, type="b", col="green" )



par(mfrow=c(3, 1))
plot( x=wl, y=on-off, type="b", col="red" )
grid( col="grey", lty="dotted" )

plot( x=wl, y=shieldedOn-off, type="b", col="green" )
grid( col="grey", lty="dotted" )

plot( x=wl, y=on-shieldedOn, type="b", col="magenta" )
grid( col="grey", lty="dotted" )



par(mfrow=c(3, 1))
plot( x=wl, y=off, type="b", col="black" )
grid( col="grey", lty="dotted" )

plot( x=wl, y=on, type="b", col="red" )
grid( col="grey", lty="dotted" )

plot( x=wl, y=shieldedOn, type="b", col="green" )
grid( col="grey", lty="dotted" )

