setwd( "~/projects/lcu03.git/controller-em-tests/em-data/comp-bg/3" )

dOldOff <- read.csv( './old/off.csv', header=F, sep="\t", dec=".", skip=5 )
specSz <- length( dOldOff[1,] )
sampleSz <- length( dOldOff[,1] )
wl <- t( dOldOff[1, 5:specSz] )[, 1]
oldOff <- apply( dOldOff[3:sampleSz, 5:specSz], 2, mean )
sdOldOff <- apply( dOldOff[3:sampleSz, 5:specSz], 2, sd )

dOldOn <- read.csv( './old/on.csv', header=F, sep="\t", dec=".", skip=5 )
sampleSz <- length( dOldOn[,1] )
oldOn <- apply( dOldOn[3:sampleSz, 5:specSz], 2, mean )

dNewOff <- read.csv( './new/off.csv', header=F, sep="\t", dec=".", skip=5 )
sampleSz <- length( dNewOff[,1] )
newOff <- apply( dNewOff[3:sampleSz, 5:specSz], 2, mean )

dNewOn <- read.csv( './new/on.csv', header=F, sep="\t", dec=".", skip=5 )
sampleSz <- length( dNewOn[,1] )
newOn <- apply( dNewOn[3:sampleSz, 5:specSz], 2, mean )




newDiff = newOn-newOff
newNoise = sum( newDiff[ which( newDiff > 5 ) ] )

oldDiff = oldOn-oldOff
oldNoise = sum( oldDiff[ which( oldDiff > 5 ) ] )

par(mfrow=c(3, 1))

plot( x=wl, y=oldOn-oldOff, type="b", col="red", main="sum( oldDiff[ which( oldDiff > 5 ) ] )=308.50" )
grid( col="grey", lty="dotted" )

plot( x=wl, y=newOn-newOff, type="b", col="red", main="sum( newDiff[ which( newDiff > 5 ) ] )=419.94" )
grid( col="grey", lty="dotted" )

plot( x=wl, y=oldDiff-newDiff, type="b", col="red", main="standard-shielded" )
grid( col="grey", lty="dotted" )

