const { chromium } = require("playwright");
const path = require( 'path' )

const LOGPATH = process.env.LOG_DIR || path.resolve(__dirname, "..", "log");

describe("Wikipedia Home Page", () => {
  let response, browser, page;

  beforeAll(async () => {
    browser = await chromium.launch();
    page = await browser.newPage();
    response = await page.goto("https://www.wikipedia.org/");
  });

  beforeEach(async () => {
    	await page.screenshot({
        path: `${LOGPATH}/screenshot.png`,
      });
  })

  afterAll(async () => {
    await browser.close();
  });

  it("should check if page sub title is correct", async () => {
    const subTitleText = await page.innerText(".localized-slogan");
    expect(subTitleText).toEqual("The Free Encyclopedia");
  });
});
