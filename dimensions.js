const puppeteer = require("puppeteer");
const uuidv4 = require("uuid").v4;
const getElementDOM = async (host) => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto(host);
  await page.screenshot("images_log/" + uuidv4() + ".png");
  const dimensions = await page.evaluate(() => {
    return Array.from(document.all, (e) => {
      return {
        tag: e.nodeName,
        content: e.innerHTML,
      };
    });
  });
  await browser.close();
  return dimensions;
};

module.exports = {
  getElementDOM,
};
