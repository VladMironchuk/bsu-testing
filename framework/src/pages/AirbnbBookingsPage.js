const BasePage = require("./BasePage")
const {By} = require("selenium-webdriver")
const PriceFormService = require("../service/PriceFormService")
const logger = require("../utils/logger")

class AirbnbBookingsPage extends BasePage {
  static pageUrl = "https://www.airbnb.ru/s/Minsk/homes"
  static bookingsSubtitleLocator = By.xpath("//*[@data-plugin-in-point-id=\"EXPLORE_STRUCTURED_PAGE_TITLE\"]")
  static priceFilterButtonLocator = By.xpath("//*[@id=\"menuItemButton-price_range\"]")
  static priceFilterLocator = By.xpath("//*[@data-testid=\"menuBarPanel-price_range\"]")

  static minPriceInputLocator = By.xpath("//*[@id=\"price_filter_min\"]")
  static maxPriceInputLocator = By.xpath("//*[@id=\"price_filter_max\"]")
  static priceFilterClearButton = By.xpath("//div[@data-testid=\"menuBarPanel-price_range\"]//button[@data-testid=\"filter-panel-clear-button\"]")

  static addToFavouriteButton = By.xpath("//div[@class=\"i55ff1m dir dir-ltr\"]//button")
  static loginPopUp = By.xpath("//div[@role=\"dialog\"][@class=\"_my6j2s\"]")

  constructor(driver) {
    super(driver)
  }

  openBookingPage() {
    (async () => {
      await this.driver.get(AirbnbBookingsPage.pageUrl)
    })()

    logger.info("Home page opened");
    return this
  }

  isOpened() {
    logger.info("Home page initialized")
    return super.findElementByLocator(AirbnbBookingsPage.bookingsSubtitleLocator)
  }

  async likeItemInList() {
    await this.findElementByLocator(AirbnbBookingsPage.addToFavouriteButton).click()

    logger.info("like button clicked")
    return this.isInitialized(AirbnbBookingsPage.loginPopUp)
  }

  async sendPriceForm() {
    await this.findElementByLocator(AirbnbBookingsPage.priceFilterButtonLocator).click()

    await this.fillPriceForm()

    await this.findElementByLocator(AirbnbBookingsPage.priceFilterLocator).click()
    await this.findElementByLocator(AirbnbBookingsPage.priceFilterClearButton).click()

    logger.info("price filter was cleared")
    return await this.findElementByLocator(AirbnbBookingsPage.minPriceInputLocator).getAttribute("value")
  }

  async fillPriceForm() {
    await this.setPriceForm()
    await this.enterText(AirbnbBookingsPage.minPriceInputLocator, +this.priceForm.getMinPrice())
    await this.enterText(AirbnbBookingsPage.maxPriceInputLocator, +this.priceForm.getMaxPrice())
  }

  async setPriceForm () {
    this.priceForm = await PriceFormService.getPriceForm()
  }
}

module.exports = AirbnbBookingsPage