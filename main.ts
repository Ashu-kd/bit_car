input.onButtonPressed(Button.A, function () {
    BitKit.setMotormoduleAction(DirectionTpye.Forward, SpeedTpye.Medium)
    basic.showNumber(0)
})
input.onButtonPressed(Button.AB, function () {
    BitKit.setMotormoduleSpeed(119, 0)
})
input.onButtonPressed(Button.B, function () {
    BitKit.setMotormoduleAction(DirectionTpye.Backward, SpeedTpye.Fast)
    basic.showNumber(1)
})
BitKit.onColor(ColorEvent.Other, function () {
    BitKit.stopMotormodule()
})
basic.showIcon(IconNames.Heart)
basic.forever(function () {
    basic.showNumber(BitKit.getColor())
})
