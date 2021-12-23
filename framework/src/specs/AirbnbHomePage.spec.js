const AirbnbHomePage = require("../pages/AirbnbHomePage")
const DriverManager = require("../driver/DriverManager")
const logger = require("../utils/logger")

describe("Booking home page", () => {
  let driver
  let airbnbHomePage

  beforeAll(async () => {
    driver = await DriverManager.getDriver()
  })

  beforeEach(() => {
    airbnbHomePage = new AirbnbHomePage(driver).openHomePage()
  })

  afterAll(async () => {
    await DriverManager.closeDriver()
  })

  it("should be initialized", async () => {
    expect(
      await airbnbHomePage.isOpened()
    ).toBeTruthy()
  })

  it("should open language and currency pop up on button click", async () => {
    expect(
      await airbnbHomePage
        .openPopUp()
    ).toBeTruthy()
  })

})

describe("Booking home page", () => {
  let driver
  let airbnbHomePage

  beforeAll(async () => {
    driver = await DriverManager.getDriver()
  })

  beforeEach(() => {
    airbnbHomePage = new AirbnbHomePage(driver).openHomePage()
  })

  afterAll(async () => {
    await DriverManager.closeDriver()
  })

  it("should search hotel on given criteria", async () => {
    const bookingDestinationPage = await airbnbHomePage
      .openExperiencesPage()
    logger.info("open")
    expect(
      await bookingDestinationPage
        .isOpened()
    ).toBeTruthy()
  })

})
