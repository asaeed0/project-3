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
    apiKey: {
      key1: "GlU6KaKPpPk9MyTvfMocJ9stJn7mMf1q",
      key2: "b6myurKAMGUZIjoWJ7Xf6XYQAP45lhOg"
    },
    apiCall: {
      current:
        "http://dataservice.accuweather.com/currentconditions/v1/55488?apikey=GlU6KaKPpPk9MyTvfMocJ9stJn7mMf1q",
      forecast:
        "http://dataservice.accuweather.com/forecasts/v1/hourly/12hour/55488?apikey=GlU6KaKPpPk9MyTvfMocJ9stJn7mMf1q&details=true"
    }
  },
  relays: {
    presets: [
      {
        id: 1,
        name: "Energy Saver",
        switchNumbers: [1, 2, 4]
      },
      {
        id: 2,
        name: "Evening",
        switchNumbers: [1, 2, 3, 4, 5]
      },
      {
        id: 3,
        name: "Night",
        switchNumbers: [2]
      }
    ],
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
    ]
  }
};
