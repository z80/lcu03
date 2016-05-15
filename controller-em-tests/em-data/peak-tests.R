setwd( "~/projects/lcu03.git/controller-em-tests/em-data" )

doff <- read.csv( './off3m.csv', header=F, sep="\t", dec=".", skip=5 )
specSz <- length( doff[1,] )
sampleSz <- length( doff[,1] )
wl <- t( doff[1, 5:specSz] )[, 1]
off <- apply( doff[3:sampleSz, 5:specSz], 2, mean )
sdOff <- apply( doff[3:sampleSz, 5:specSz], 2, sd )

dOnNoUsb <- read.csv( './on3m-init-no-usb.csv', header=F, sep="\t", dec=".", skip=5 )
sampleSz <- length( dOnNoUsb[,1] )
onNoUsb <- apply( dOnNoUsb[3:sampleSz, 5:specSz], 2, mean )

dShieldedOnNoUsb <- read.csv( './shielded-on3m-init-no-usb.csv', header=F, sep="\t", dec=".", skip=5 )
sampleSz <- length( dShieldedOnNoUsb[,1] )
shieldedOnNoUsb <- apply( dShieldedOnNoUsb[3:sampleSz, 5:specSz], 2, mean )


par(mfrow=c(2, 1))

plot( x=wl, y=onNoUsb-off, type="b", col="black", main="6 main peaks" )
grid( col="grey", lty="dotted" )
inds = which( onNoUsb-off > 3 )
noInds = which(abs(onNoUsb-off) <= 3)

statOnNoUsb = dOnNoUsb[3:sampleSz, 5:specSz]
statShieldedOnNoUsb = dShieldedOnNoUsb[3:sampleSz, 5:specSz]

# Analyze substrate (all places where no peaks are confidently detected).
noPeakData = unlist( statOnNoUsb[,noInds] )
shieldedNoPeakData = unlist( statShieldedOnNoUsb[,noInds] )
hist( x=noPeakData, breaks=100, col=rgb(0.7, 0, 0, 0.5), ylim=c(0, 15000), main="Noise substrates for regular and shielded controllers are different." )
hist( x=shieldedNoPeakData, breaks=100, col=rgb(0, 0.7, 0, 0.4), add=T )
mean(noPeakData)
mean(shieldedNoPeakData)
# Shielded noise area is a little bit higher. So it might affect peaks.
#wilcox.test( noPeakData, shieldedNoPeakData, paired=F, conf.int=T )
t.test( noPeakData, shieldedNoPeakData, paired=F, var.equal=F )
# Statistical tests say that mean value is different.
# p-value=2.006e-5. Null hypothesis is rejected. Mean difference is true.


par(mfrow=c(3, 2))
# Examine first peak.
d = statOnNoUsb[,inds[1]]
ds = statShieldedOnNoUsb[,inds[1]]
#qqnorm( d )
hist( x=d, col=rgb(0.7, 0, 0, 0.5), ylim=c(0, 300), main="1 peak, shift -3dBm" )
hist( x=ds, col=rgb(0, 0.7, 0, 0.4), add=T )
mean( d )
mean( ds )
sd( d )
sd( ds )
wilcox.test( d, ds, paired=F, conf.int=T )



# Examine second peak.
d = statOnNoUsb[,inds[2]]
ds = statShieldedOnNoUsb[,inds[2]]
#qqnorm( d )
hist( x=d, breaks=20, col=rgb(0.7, 0, 0, 0.5), ylim=c(0, 300) , main="2 peak, shift -4dBm" )
hist( x=ds, breaks=50, col=rgb(0, 0.7, 0, 0.4), add=T )
mean( d )
mean( ds )
sd( d )
sd( ds )
wilcox.test( d, ds, paired=F, conf.int=T )


# Examine 3-d peak.
d = statOnNoUsb[,inds[3]]
ds = statShieldedOnNoUsb[,inds[3]]
#qqnorm( d )
hist( x=d, breaks=40, col=rgb(0.7, 0, 0, 0.5), ylim=c(0, 300) , main="3 peak, shift -1.5dBm" )
hist( x=ds, breaks=40, col=rgb(0, 0.7, 0, 0.4), add=T )
mean( d )
mean( ds )
sd( d )
sd( ds )
wilcox.test( d, ds, paired=F, conf.int=T )

# Examine 4-th peak.
d = statOnNoUsb[,inds[4]]
ds = statShieldedOnNoUsb[,inds[4]]
#qqnorm( d )
hist( x=d, breaks=20, col=rgb(0.7, 0, 0, 0.5), ylim=c(0, 450), main="4 peak, shift -8.5dBm" )
hist( x=ds, breaks=10, col=rgb(0, 0.7, 0, 0.4), add=T )
mean( d )
mean( ds )
sd( d )
sd( ds )
wilcox.test( d, ds, paired=F, conf.int=T )


# Examine 5-th peak.
d = statOnNoUsb[,inds[5]]
ds = statShieldedOnNoUsb[,inds[5]]
#qqnorm( d )
hist( x=d, breaks=20, col=rgb(0.7, 0, 0, 0.5), ylim=c(0, 300), main="5 peak, shift 2.5dBm" )
hist( x=ds, breaks=15,  col=rgb(0, 0.7, 0, 0.4), add=T )
mean( d )
mean( ds )
sd( d )
sd( ds )
wilcox.test( d, ds, paired=F, conf.int=T )



# Examine 6-th peak.
d = statOnNoUsb[,inds[6]]
ds = statShieldedOnNoUsb[,inds[6]]
#qqnorm( d )
hist( x=d, breaks=20, col=rgb(0.7, 0, 0, 0.5), ylim=c(0, 300), main="6 peak, shift -1.5dBm" )
hist( x=ds, col=rgb(0, 0.7, 0, 0.4), add=T )
mean( d )
mean( ds )
sd( d )
sd( ds )
wilcox.test( d, ds, paired=F, conf.int=T )



