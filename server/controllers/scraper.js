const axios = require("axios");
const cheerio = require("cheerio");

function scrapeGlobeAndMail(articleUrl) {
  return new Promise(resolve => {
    axios.get(articleUrl).then(response => {
      const $ = cheerio.load(response.data);

      let story = [];

      $(".c-article-body__text").each(function(i, elem) {
        let paragraph = $(this)
          .text()
          .trim();
        story.push(paragraph);
      });

      resolve(story);
    });
  });
}

module.exports = scrapeGlobeAndMail;
