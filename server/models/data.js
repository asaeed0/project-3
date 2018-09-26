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
        switchNumber: 1,
        gpioNumber: 5,
        isActive: true
      },
      {
        switchNumber: 2,
        gpioNumber: 6,
        isActive: true
      },
      {
        switchNumber: 3,
        gpioNumber: 13,
        isActive: true
      },
      {
        switchNumber: 4,
        gpioNumber: 19,
        isActive: true
      },
      {
        switchNumber: 5,
        gpioNumber: 26,
        isActive: true
      },
      {
        switchNumber: 6,
        gpioNumber: 39,
        isActive: false
      },
      {
        switchNumber: 7,
        gpioNumber: 0,
        isActive: false
      },
      {
        switchNumber: 8,
        gpioNumber: 0,
        isActive: false
      },
      {
        switchNumber: 9,
        gpioNumber: 0,
        isActive: false
      },
      {
        switchNumber: 10,
        gpioNumber: 0,
        isActive: false
      },
      {
        switchNumber: 11,
        gpioNumber: 0,
        isActive: false
      },
      {
        switchNumber: 12,
        gpioNumber: 0,
        isActive: false
      },
      {
        switchNumber: 13,
        gpioNumber: 0,
        isActive: false
      },
      {
        switchNumber: 14,
        gpioNumber: 0,
        isActive: false
      },
      {
        switchNumber: 15,
        gpioNumber: 0,
        isActive: false
      },
      {
        switchNumber: 16,
        gpioNumber: 0,
        isActive: false
      }
    ],
    RelayController: class {
      constructor(Gpio, relays = this.pins) {
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
      toggleRelay(switchNumber, activeRelays = this.activeRelays) {
        activeRelays.map((relay, i) => {
          if (relay.switchNumber === switchNumber) {
            if (activeRelays[i].gpio.digitalRead() === 0) {
              activeRelays[i].gpio.digitalWrite(1);
              // console.log("Turned Relay to 1");
            } else {
              activeRelays[i].gpio.digitalWrite(0);
              // console.log("Turned Relay to 0");
            }
          }
        });
      }
    }
  }
};
