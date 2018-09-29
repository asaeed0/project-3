const Gpio = require("pigpio-mock").Gpio;
// const Gpio = require("pigpio").Gpio;
const relays = require("../models/data").relays;

class RelayController {
  constructor(Gpio, relays, presets) {
    this.presets = presets;
    this.presetSelected = false;
    this.activeRelays = (() => {
      const relaysActive = relays.filter(relay => {
        return relay.isActive;
      });
      relaysActive.map(relay => {
        relay.gpio = new Gpio(relay.gpioNumber, {
          mode: Gpio.OUTPUT,
          alert: true
        });
      });
      console.log("Relays successfully initialized");
      return relaysActive;
    })();
  }
  toggleRelay(switchNumber) {
    this.activeRelays.map((relay, i) => {
      if (relay.switchNumber === switchNumber) {
        const relayStatus = this.activeRelays[i].gpio.digitalRead();
        if (relayStatus === 0) {
          this.activeRelays[i].gpio.digitalWrite(1);
          this.presetSelected = false;
          console.log("Changed switch " + switchNumber + " to ON");
        } else if (relayStatus === 1) {
          this.activeRelays[i].gpio.digitalWrite(0);
          this.presetSelected = false;
          console.log("Changed switch " + switchNumber + " to ON");
        }
      }
    });
    return true;
  }
  togglePreset(presetId) {
    const presetToToggleArr = this.presets.filter(preset => {
      return preset.id === presetId;
    });
    const switchesToToggle = presetToToggleArr[0].switchNumbers;
    this.activeRelays.map((relay, i) => {
      if (switchesToToggle.includes(relay.switchNumber)) {
        this.activeRelays[i].gpio.digitalWrite(1);
      } else {
        this.activeRelays[i].gpio.digitalWrite(0);
      }
    });
    return true;
  }
  returnRelaysRaw() {
    return this.activeRelays;
  }
  returnRelaysClean() {
    const relaysClean = [];
    this.activeRelays.map(relay => {
      const cleanRelay = {
        name: relay.name,
        group: relay.group,
        switchNumber: relay.switchNumber,
        status: relay.gpio.digitalRead() === 0 ? false : true
      };
      relaysClean.push(cleanRelay);
    });
    return relaysClean;
  }
  returnPresetsRaw() {
    return this.presets;
  }
  returnPresetsClean() {
    let cleanPresets = [];
    this.presets.map(preset => {
      let cleanPreset = {
        id: preset.id,
        name: preset.name
      };
      cleanPresets.push(cleanPreset);
    });
    return cleanPresets;
  }
}

module.exports = relayControl = new RelayController(
  Gpio,
  relays.pins,
  relays.presets
);
