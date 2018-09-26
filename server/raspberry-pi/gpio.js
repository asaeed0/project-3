const Gpio = require("pigpio-mock").Gpio;
// const Gpio = require("pigpio").Gpio;
const relays = require("../models/data").relays;

const relayControl = new relays.RelayController(Gpio, relays.pins);
relayControl.toggleRelay(0);
relayControl.toggleRelay(3);
relayControl.toggleRelay(0);
relayControl.toggleRelay(3);
