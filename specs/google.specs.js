describe("Google", () => {
  beforeAll(async () => {
    // const page = await browser.newPage();
    await page.goto("https://google.com");
  });
  it("should display google text on page", async () => {
    await expect(page).toMatch("google");
  });
});
