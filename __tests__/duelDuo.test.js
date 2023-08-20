const { Builder, Browser, By, until } = require("selenium-webdriver");

let driver;

beforeEach(async () => {
  driver = await new Builder().forBrowser(Browser.CHROME).build();
});

afterEach(async () => {
  await driver.quit();
});

describe("Duel Duo tests", () => {
  test("page loads with title", async () => {
    await driver.get("http://localhost:8000");

    await driver.wait(until.titleIs("Duel Duo"), 1000);
  });
  test("can See All Bots", async ()=> {
   await driver.get("http://localhost:8000");
   await driver.findElement(By.id("see-all")).click();
   const displayPage = await driver.wait(until.elementLocated(By.name("div")), 1000);
   expect(await displayPage.getText()).toBe("all-bots");
  });
  test("Draw button displays choices", async () => {
    await driver.get("http://localhost:8000");
    await driver.findElement(By.id("draw")).click();
    const currentPage = await driver.wait(until.elementLocated(By.name("section")), 1000);
    expect(await currentPage.getText()).toBe('div[id="choices]');
  })
});