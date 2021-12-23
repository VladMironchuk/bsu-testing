const DataReader = require("./DataReader");
const PriceForm = require("../model/PriceFrom")

class PriceFormService {
  static minPrice = "priceForm.minPrice"
  static maxPrice = "priceForm.maxPrice"

  static async getPriceForm() {
    return new PriceForm(
      await DataReader.read(this.minPrice),
      await DataReader.read(this.maxPrice)
    )
  }
}

module.exports = PriceFormService