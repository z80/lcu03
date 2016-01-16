
require( "lualcu03" )

factory = lualcu03.create()
lcu03 = factory:lcu03()
lcu03:setPower( 30 )
lcu03:setPower( 100 )
lcu03:setPower( 8 )
digit = nil
factory = nil
collectgarbage()

