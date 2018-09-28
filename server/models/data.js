module.exports = {
  userSettings: {
    greetings: [
      "Hello World",
      "Hello Mars",
      "Hello Idiot",
      "Hows it going?",
      "Whats up?"
    ],
    clock: "12hr",
    weatherLocation: "",
    newsOutlet: "globe and mail"
  },
  news: {
    apiKey: "85aa17b353774f9fa7d6360459e6673d",
    options: ["globe and mail"],
    apiCalls: [
      {
        outlet: "globe and mail",
        apiUrl:
          "https://newsapi.org/v2/top-headlines?sources=the-globe-and-mail&apiKey="
      }
    ]
  },
  weather: {
    apiKey: "",
    apiCall:
      "http://dataservice.accuweather.com/currentconditions/v1/55488?apikey=b6myurKAMGUZIjoWJ7Xf6XYQAP45lhOg&details=true"
  },
  relays: {
    pins: [
      {
        name: "Lamp 1",
        group: "Living Room",
        switchNumber: 1,
        gpioNumber: 5,
        isActive: true
      },
      {
        name: "Lamp 2",
        group: "Living Room",
        switchNumber: 2,
        gpioNumber: 6,
        isActive: true
      },
      {
        name: "Fan",
        group: "Bedroom",
        switchNumber: 3,
        gpioNumber: 13,
        isActive: true
      },
      {
        name: "Ceiling Light",
        group: "Bedroom",
        switchNumber: 4,
        gpioNumber: 19,
        isActive: true
      },
      {
        name: "Heater",
        group: "Garage",
        switchNumber: 5,
        gpioNumber: 26,
        isActive: true
      },
      {
        name: "",
        group: "",
        switchNumber: 6,
        gpioNumber: 39,
        isActive: false
      },
      {
        name: "",
        group: "",
        switchNumber: 7,
        gpioNumber: 0,
        isActive: false
      },
      {
        name: "",
        group: "",
        switchNumber: 8,
        gpioNumber: 0,
        isActive: false
      },
      {
        name: "",
        group: "",
        switchNumber: 9,
        gpioNumber: 0,
        isActive: false
      },
      {
        name: "",
        group: "",
        switchNumber: 10,
        gpioNumber: 0,
        isActive: false
      },
      {
        name: "",
        group: "",
        switchNumber: 11,
        gpioNumber: 0,
        isActive: false
      },
      {
        name: "",
        group: "",
        switchNumber: 12,
        gpioNumber: 0,
        isActive: false
      },
      {
        name: "",
        group: "",
        switchNumber: 13,
        gpioNumber: 0,
        isActive: false
      },
      {
        name: "",
        group: "",
        switchNumber: 14,
        gpioNumber: 0,
        isActive: false
      },
      {
        name: "",
        group: "",
        switchNumber: 15,
        gpioNumber: 0,
        isActive: false
      },
      {
        name: "",
        group: "",
        switchNumber: 16,
        gpioNumber: 0,
        isActive: false
      }
    ],
    RelayController: class {
      constructor(Gpio, relays = this.pins) {
        this.lastToggle = "";
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
              console.log("Changed switch " + switchNumber + " to ON");
            } else if (relayStatus === 1) {
              this.activeRelays[i].gpio.digitalWrite(0);
              console.log("Changed switch " + switchNumber + " to ON");
            }
          }
        });
        this.lastToggle = Date.now();
        return this.lastToggle;
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
      returnRelaysRaw() {
        return this.activeRelays;
      }
    }
  }
};
