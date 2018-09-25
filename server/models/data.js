module.exports = {
  userSettings: {
    greeting: "Hello Mars",
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
  pins: [
    {
      gpioNumber: 29,
      switchNumber: 1,
      active: true,
      status: false
    },
    {
      gpioNumber: 31,
      switchNumber: 2,
      active: true,
      status: false
    },
    {
      gpioNumber: 33,
      switchNumber: 3,
      active: true,
      status: false
    },
    {
      gpioNumber: 35,
      switchNumber: 4,
      active: true,
      status: false
    },
    {
      gpioNumber: 37,
      switchNumber: 5,
      active: false,
      status: false
    },
    {
      gpioNumber: 39,
      switchNumber: 6,
      active: false,
      status: false
    },
    {
      gpioNumber: 0,
      switchNumber: 7,
      active: false,
      status: false
    },
    {
      gpioNumber: 0,
      switchNumber: 8,
      active: false,
      status: false
    },
    {
      gpioNumber: 0,
      switchNumber: 9,
      active: false,
      status: false
    },
    {
      gpioNumber: 0,
      switchNumber: 10,
      active: false,
      status: false
    },
    {
      gpioNumber: 0,
      switchNumber: 11,
      active: false,
      status: false
    },
    {
      gpioNumber: 0,
      switchNumber: 12,
      active: false,
      status: false
    },
    {
      gpioNumber: 0,
      switchNumber: 13,
      active: false,
      status: false
    },
    {
      gpioNumber: 0,
      switchNumber: 14,
      active: false,
      status: false
    },
    {
      gpioNumber: 0,
      switchNumber: 15,
      active: false,
      status: false
    },
    {
      gpioNumber: 0,
      switchNumber: 16,
      active: false,
      status: false
    }
  ]
};
