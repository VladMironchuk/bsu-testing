const {assert} = require('chai')
const webdriver = require('selenium-webdriver');
const {By, until} = require('selenium-webdriver');
const chrome = require('selenium-webdriver/chrome');

describe('Airbnb test', () => {
  let driver;

  beforeEach(() => {
    const args = [
      "--disable-extensions",
      "--window-size=1366,768",
      "--no-sandbox", // required for Linux without GUI
      "--disable-gpu", // required for Windows,
      "--enable-logging --v=1", // write debug logs to file(debug.log),
      "--disable-dev-shm-usage",
      "--headless"
    ];

    const options = new chrome.Options();

    options.addArguments("--headless", "--no-sandbox", "--disable-dev-shm-usage")

    driver = new webdriver.Builder()
      .forBrowser('chrome')
      .setChromeOptions(options)
      .build();

    driver.manage().window().maximize();
  })

  it('Should display validation alert with correct text', async () => {
    try {
      await driver.get('https://www.airbnb.ru')

      const button = await driver.wait(until.elementLocated(By.xpath("//*[@id=\"search-tabpanel\"]/div/div[5]/div[2]/button")), 1000)
      button.click()

      const field = await driver.findElement(By.xpath("//*[@id=\"search-tabpanel\"]/div/div[1]/div/div/div"))

      const isEnabled = await field.isEnabled()

      assert.isTrue(isEnabled)
    } finally {
      await driver.quit();
    }
  });
});