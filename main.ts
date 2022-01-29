input.onButtonPressed(Button.A, function () {
    count += -1
    if (count < 0) {
        count = 0
    } else {
    	
    }
})
input.onButtonPressed(Button.B, function () {
    count += 1
    if (count > 9) {
        count = 9
    } else {
    	
    }
})
let count = 0
count = 9
let heartbeat = 0
basic.showIcon(IconNames.Duck)
basic.forever(function () {
    if (count < 1) {
        basic.showIcon(IconNames.Duck)
    } else if (count < 2) {
        basic.showIcon(IconNames.Tortoise)
    } else if (count < 3) {
        basic.showIcon(IconNames.Cow)
    } else if (count < 4) {
        basic.showIcon(IconNames.Giraffe)
    } else if (count < 5) {
        basic.showIcon(IconNames.Butterfly)
    } else if (count < 6) {
        basic.showIcon(IconNames.Rollerskate)
    } else if (count < 7) {
        basic.showIcon(IconNames.Umbrella)
    } else if (count < 8) {
        basic.showString("6")
    } else if (count < 9) {
        basic.showIcon(IconNames.House)
    } else {
        if (heartbeat == 0) {
            basic.showIcon(IconNames.Heart)
            heartbeat = 1
        } else {
            basic.showIcon(IconNames.SmallHeart)
            heartbeat = 0
        }
    }
    basic.pause(100)
})
