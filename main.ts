input.onButtonPressed(Button.A, function () {
    basic.showString("The Microbit Movie!!!!!!!!!!!!!!!")
    basic.showLeds(`
        # . . . .
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        `)
    basic.showLeds(`
        # # . . .
        # # . . .
        . . . . .
        . . . . .
        . . . . .
        `)
    basic.showLeds(`
        # # . # #
        # # . # #
        . . . . .
        # . . . #
        # # # # #
        `)
    basic.showString("A")
    basic.showNumber(12)
    basic.showString("A")
    basic.showNumber(1234)
    basic.showString("Dodo doc ran up To date and The End")
    basic.showLeds(`
        # # # # #
        # # # # #
        # # # # #
        # # # # #
        # # # # #
        `)
    basic.showIcon(IconNames.Square)
    basic.showString("I Stink!!!")
    basic.showLeds(`
        # # . # #
        # # . # #
        . . # . .
        # # # # #
        . . # . .
        `)
    basic.showLeds(`
        # # # # #
        # . # . #
        # # # # #
        # . # . #
        # # # # #
        `)
    basic.showString("I will be a good Meal for you")
    basic.showLeds(`
        . . # . .
        . # # # .
        # # # # #
        . # # # .
        . . # . .
        `)
    basic.showLeds(`
        . . # . .
        . # # # .
        # # # # #
        . # # # .
        . . # . .
        `)
    basic.showString("See!!")
    basic.showLeds(`
        . # # # .
        # # # # #
        . # # # .
        . # # # .
        # # # # #
        `)
    basic.showString("The tree")
    basic.showString("Once there was a seed")
    basic.showLeds(`
        . . # . .
        . # # # .
        . # # # .
        . # # # .
        . . # . .
        `)
    basic.showString("It turned into a...")
    basic.showLeds(`
        . # # # .
        # # # # #
        . # # # .
        . # # # .
        # # # # #
        `)
    basic.showString("... TREE!")
    basic.showString("Too be continued on The Microbit Movie 2")
})
input.onButtonPressed(Button.B, function () {
    basic.showString("The Microbit Cartoon!!!")
    basic.showLeds(`
        # # . # #
        # # . # #
        . . # . .
        # . . . #
        # # # # #
        `)
    basic.showString(" I Am A...       ...Oh!")
    basic.showLeds(`
        . . # . .
        . # # # .
        # # # # #
        . # # # .
        . . # . .
        `)
    basic.showString("Grrrrrrrrrrrrrrr")
    basic.showLeds(`
        . # . . #
        # . # . .
        . . . # .
        . # . . #
        . . . # .
        `)
    basic.showLeds(`
        # # . # #
        # # . # #
        . . . . .
        # . . . #
        # # # # #
        `)
    basic.showString("To The End?")
    basic.showString("The End!!!")
})
input.onGesture(Gesture.Shake, function () {
    basic.showString("LB Presents A LegoLeon Movie        The Microbit Movie!!!!!!!!!!!!!!!!!!")
})
basic.showString(" The Microbit Movie!!!!!!! A(Movie) B(Extra) Shake (Trailer")
