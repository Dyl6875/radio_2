radio.onReceivedNumber(function (receivedNumber) {
    basic.showString("" + (radio.receivedPacket(RadioPacketProperty.SignalStrength)))
})
input.onButtonPressed(Button.A, function () {
    radio.sendString("A")
})
input.onButtonPressed(Button.AB, function () {
    radio.sendString("2")
})
radio.onReceivedString(function (receivedString) {
    basic.showString("" + (radio.receivedPacket(RadioPacketProperty.SignalStrength)))
})
input.onButtonPressed(Button.B, function () {
    radio.sendString("B")
})
radio.setGroup(68)
radio.setTransmitPower(7)
radio.setFrequencyBand(68)
