def on_button_pressed_a():
    global _switch, 歩数
    _switch = 0
    for index in range(100000):
        if _switch == 0:
            歩数 += 1
            basic.show_number(歩数)
input.on_button_pressed(Button.A, on_button_pressed_a)

def on_button_pressed_b():
    global _switch
    _switch = 1
    basic.show_number(歩数)
input.on_button_pressed(Button.B, on_button_pressed_b)

_switch = 0
歩数 = 0
basic.show_string("START")
歩数 = 0
basic.show_number(歩数)

def on_forever():
    pass
basic.forever(on_forever)
