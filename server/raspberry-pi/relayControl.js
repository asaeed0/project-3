const Gpio = require("pigpio-mock").Gpio;
// const Gpio = require("pigpio").Gpio;
const relays = require("../models/data").relays;

module.exports = relayControl = new relays.RelayController(Gpio, relays.pins);
