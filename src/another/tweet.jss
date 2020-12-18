(async () => {
  const { chromium } = require("playwright");
  const browser = await chromium.launch();
  //   const browser = await chromium.launch();
  const page = await browser.newPage();
  await page.goto("https://twitter.com/login");
  await page.fill('input[type="text"]', "<username>");
  await page.fill('input[type="password"]', "<password>");
  page.click('div[data-testid="LoginForm_Login_Button"]');
  await page.fill(
    ".public-DraftEditor-content",
    "This is a test tweet using Microsoft Playwright"
  );
  page.click('div[data-testid="tweetButton"]');
  await browser.close();
})();
