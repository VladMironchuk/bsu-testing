const BasePage = require("./BasePage");
const logger = require("../utils/logger");
const { By } = require("selenium-webdriver");
const AirbnbBookingsPage = require("./AirbnbExperiencesPage")

class AirbnbHomePage extends BasePage {
  static HOME_PAGE_URL = "https://www.airbnb.com/";

  static homePageLogoLocator = By.xpath("//*[@data-section-id=\"EXPLORE_HEADER_LOGO\"]")
  static searchDestinationLocator = By.xpath("//*[@id=\"bigsearch-query-location-input\"]")
  static searchButton = By.xpath("//*[@id=\"search-tabpanel\"]//button")
  static popUp = By.xpath("//*[@id=\"bigsearch-query-location-listbox\"]")
  static experiencesPageButtonLocator = By.xpath("//*[@href=\"/s/experiences/online\"]")

  constructor(driver) {
    super(driver);
  }

  openHomePage() {
    (async () => {
      await this.driver.get(AirbnbHomePage.HOME_PAGE_URL);
    })();

    logger.info("Home page opened");
    return this;
  }

  isOpened(){
    logger.info("Home page initialized")
    return super.isInitialized(AirbnbHomePage.homePageLogoLocator)
  }

  async openPopUp() {
    await super.enterText(AirbnbHomePage.searchDestinationLocator, "")

    await this.findElementByLocator(AirbnbHomePage.searchButton).click()
    logger.info("pop up displayed")

    return super.isInitialized(AirbnbHomePage.popUp)
  }

  async openExperiencesPage() {
    await this.findElementByLocator(AirbnbHomePage.experiencesPageButtonLocator).click()
    logger.info("Hotels search form sent")
    return new AirbnbBookingsPage(this.driver)
  }
}

module.exports = AirbnbHomePage;
