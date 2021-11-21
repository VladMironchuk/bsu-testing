const {until, By} =  require("selenium-webdriver");

class BasePage {
  constructor(driver) {
    this.driver = driver
  }

  async findElementByXpath(locator) {
    return await this.driver.wait(until.elementLocated(By.xpath(locator)), 5000)
  }

  async isVisible(locator) {
    const element = await this.findElementByXpath(locator)
    return await element.isEnabled()
  }
}

module.exports = BasePage