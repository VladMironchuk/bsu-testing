const Page = require('./BasePage')

class AirbnbHomePage extends Page {

  static HOME_PAGE = 'https://www.airbnb.ru'

  static searchButtonLocator = "//*[@id=\"search-tabpanel\"]//button"
  static popUpLocator = "//*[@id=\"bigsearch-query-location-listbox\"]"

  constructor(driver) {
    super(driver);
  }

  openHomePage() {
    (async () => {
      await this.driver.get(AirbnbHomePage.HOME_PAGE)
    })()
    return this
  }

  clickSearchButton() {
    (async () => {
      const element = await super.findElementByXpath(AirbnbHomePage.searchButtonLocator)
      element.click()
    })()
    return this
  }

  isPopUpIsVisible() {
    return this.isVisible(AirbnbHomePage.popUpLocator)
  }
}

module.exports = AirbnbHomePage