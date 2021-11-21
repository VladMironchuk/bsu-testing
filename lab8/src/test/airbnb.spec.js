const {assert} = require('chai')
const driverInit = require("../utils/driverInit");
const AirbnbHomePage = require("../pages/AirbnbHomePage");

describe('Airbnb home page', () => {
  let driver;
  let airbnbHomePage

  beforeEach(() => {
    driver = driverInit()
    driver.manage().window().maximize();

    airbnbHomePage = new AirbnbHomePage(driver).openHomePage()
  })

  it('Should display pop up which allows you to enter a place', async () => {
    try {
      const isVisible = await airbnbHomePage
        .clickElement("//*[@id=\"search-tabpanel\"]/div/div[5]/div[2]/button")
        .isVisible("//*[@id=\"search-tabpanel\"]/div/div[1]/div/div/div")
      assert.isTrue(isVisible)
    } finally {
      await driver.quit();
    }
  });
});