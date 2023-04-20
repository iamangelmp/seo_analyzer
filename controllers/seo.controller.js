var seochecker = require("seo-checker");

const url = "https://buggydesert.com/";
const auditSEO = async (req, res, next) => {
  const metaTags = await metaReport();
  const crawl = await crawlReport();
  res.json({ metaTags, crawl });
};

const metaReport = async () => {
  return new Promise((resolve, reject) => {
    seochecker.load(url, async function (response) {
      if (!response) {
        console.log(error);
        reject(error);
      } else {
        const data = await seochecker.meta(response);
        resolve(data);
      }
    });
  });
};

const crawlReport = async () => {
  return new Promise((resolve, reject) => {
    seochecker.crawl(url, async function (response) {
      if (!response) {
        console.log(error);
        reject(error);
      } else {
        const data = await seochecker.crawl(response);
        resolve(data);
      }
    });
  });
};

module.exports = auditSEO;
