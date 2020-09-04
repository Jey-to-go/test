input.onButtonPressed(Button.A, function () {
    _switch = 0
    for (let index = 0; index < 100000; index++) {
        if (_switch == 0) {
            basic.pause(1)
            歩数 += 1
            basic.showNumber(歩数)
        }
    }
})
input.onButtonPressed(Button.AB, function () {
    歩数 = 0
    basic.showNumber(歩数)
})
input.onButtonPressed(Button.B, function () {
    _switch = 1
    basic.showNumber(歩数)
})
let _switch = 0
let 歩数 = 0
basic.showString("START")
歩数 = 0
basic.showNumber(歩数)
