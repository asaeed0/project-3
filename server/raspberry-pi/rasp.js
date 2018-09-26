const Gpio = require("pigpio-mock").Gpio;

module.exports = {
  handleRelayClick: switchNumber => {
    return new Promise(async (resolve, reject) => {
      // TODO: Function to toggle GPIO output - should return true false
      pin.digitalWrite(1);
      // TODO: If true
      // TODO: update database
      // TODO: get updated relay from database
      // TODO: return new relay object
      resolve("hello mars");
    });
  }
};
