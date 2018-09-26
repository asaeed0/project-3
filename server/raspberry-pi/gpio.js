const Gpio = require("pigpio-mock").Gpio;
const relayController = require("../models/data").relayController;

// initializeRelaysOutput(relaysRaw);
// toggleRelay(relaysRaw[2]);

const relays = new relayController.Relays(Gpio, relayController.pins);
console.log(relays);
