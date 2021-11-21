const Page = require('./BasePage')

class AirbnbHomePage extends Page {

  static HOME_PAGE = 'https://www.airbnb.ru'

  constructor(driver) {
    super(driver);
  }

  openHomePage() {
    (async () => {
      await this.driver.get(AirbnbHomePage.HOME_PAGE)
    })()
    return this
  }

  clickElement(xPathLocator) {
    (async () => {
      const element = await super.findElementByXpath(xPathLocator)
      element.click()
    })()
    return this
  }
}

module.exports = AirbnbHomePage