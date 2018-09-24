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
  }
};
