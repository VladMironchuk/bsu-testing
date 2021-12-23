class PriceFrom {
  constructor(minPrice, maxPrice) {
    this.minPrice = minPrice
    this.maxPrice = maxPrice
  }

  getMinPrice() {
    return this.minPrice
  }

  setMinPrice(minPrice) {
    this.minPrice = minPrice
  }

  getMaxPrice() {
    return this.maxPrice
  }

  setMaxPrice(maxPrice) {
    this.maxPrice = maxPrice
  }
}

module.exports = PriceFrom