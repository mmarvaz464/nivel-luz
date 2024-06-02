input.onButtonPressed(Button.A, function () {
    basic.showNumber(input.temperature())
    led.plotBarGraph(
    input.temperature(),
    50
    )
})
input.onButtonPressed(Button.AB, function () {
    basic.showNumber(input.temperature())
    basic.showLeds(`
        # . . # #
        . . # . .
        . . # . .
        . . # . .
        . . . # #
        `)
    basic.showNumber(input.lightLevel())
})
input.onButtonPressed(Button.B, function () {
    basic.showNumber(input.lightLevel())
    led.plotBarGraph(
    input.lightLevel(),
    255
    )
})
basic.forever(function () {
	
})
