const Gpio = require("pigpio-mock").Gpio;
// const Gpio = require("pigpio").Gpio;
const relays = require("../models/data").relays;

const relayControl = new relays.RelayController(Gpio, relays.pins);
relayControl.toggleRelay(2);
relayControl.toggleRelay(1);
relayControl.toggleRelay(2);
relayControl.toggleRelay(1);
