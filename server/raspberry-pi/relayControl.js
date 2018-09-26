const Gpio = require("pigpio-mock").Gpio;
// const Gpio = require("pigpio").Gpio;
const relays = require("../models/data").relays;

module.exports = relayControl = new relays.RelayController(Gpio, relays.pins);
/* 
setTimeout(() => {
  relayControl.toggleRelay(1);
  relayControl.toggleRelay(2);
  relayControl.toggleRelay(3);
  relayControl.toggleRelay(4);
  relayControl.toggleRelay(5);
}, 2 * 1000);

setTimeout(() => {
  relayControl.toggleRelay(1);
  relayControl.toggleRelay(2);
  relayControl.toggleRelay(3);
  relayControl.toggleRelay(4);
  relayControl.toggleRelay(5);
}, 4 * 1000);

setTimeout(() => {
  relayControl.toggleRelay(1);
  relayControl.toggleRelay(2);
  relayControl.toggleRelay(3);
  relayControl.toggleRelay(4);
  relayControl.toggleRelay(5);
}, 6 * 1000);
 */
