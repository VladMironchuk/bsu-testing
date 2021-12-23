const DriverManager = require("../driver/DriverManager")
const logger = require("../utils/logger")
const AirbnbBookingsPage = require('../pages/AirbnbBookingsPage')

describe("Booking home page", () => {
  let driver
  let airbnbBookingPage

  beforeAll(async () => {
    driver = await DriverManager.getDriver()
  })

  beforeEach(() => {
    airbnbBookingPage = new AirbnbBookingsPage(driver).openBookingPage()
  })

  afterAll(async () => {
    await DriverManager.closeDriver()
  })

  it("should be initialized", async () => {
    expect(
      await airbnbBookingPage.isOpened()
    ).toBeTruthy()
  })


  it("user should be authorized to add to favourites", async () => {
    expect(
      await airbnbBookingPage.likeItemInList()
    ).toBeTruthy()
  })

  it("vrvr", async () => {
    expect(
      await airbnbBookingPage.sendPriceForm()
    ).toEqual("740")
  })

})