const BasePage = require("./BasePage")
const {By} = require("selenium-webdriver")
const logger = require("../utils/logger");

class AirbnbExperiencesPage extends BasePage {
  static filter = By.xpath("//*[@data-plugin-in-point-id=\"EXPLORE_WIDE_FILTER_BAR\"]")

  constructor(driver) {
    super(driver)
  }

  async isOpened() {
    logger.info("Experiences page initialized")
    return await super.findElementByLocator(AirbnbExperiencesPage.filter)
  }
}

module.exports = AirbnbExperiencesPage