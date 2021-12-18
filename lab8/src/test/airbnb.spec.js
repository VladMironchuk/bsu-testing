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
        .clickSearchButton()
        .isPopUpIsVisible()
      assert.isTrue(isVisible)
    } finally {
      await driver.quit();
    }
  });
});