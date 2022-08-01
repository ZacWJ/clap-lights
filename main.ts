input.onSound(DetectedSound.Loud, function () {
    lightson = !(lightson)
    if (lightson) {
        basic.showLeds(`
            . # . # .
            # # # # #
            # # # # #
            . # # # .
            . . # . .
            `)
        music.playMelody("C5 A F D F A C5 C ", 500)
        for (let index = 0; index < 4; index++) {
            music.playMelody("B A F D F A C5 C ", 500)
            basic.showLeds(`
                # # # # #
                . . . # .
                . . # . .
                . # . . .
                # # # # #
                `)
        }
        basic.pause(1000)
    } else {
        basic.clearScreen()
    }
})
let lightson = false
input.setSoundThreshold(SoundThreshold.Loud, 128)
