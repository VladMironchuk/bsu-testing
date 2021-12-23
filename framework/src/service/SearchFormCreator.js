const SearchForm = require("../model/SearchForm")
const DataReader = require("./DataReader");

class SearchFormCreator {
  static destination = "accommodation.search.destination";
  static checkIn = "accommodation.search.checkIn";
  static checkOut = "accommodation.search.checkOut";
  static personsNumber = "accommodation.search.personsNumber";

  static async getSearchForm() {
    return new SearchForm(
      await DataReader.read(this.destination),
      await DataReader.read(this.checkIn),
      await DataReader.read(this.checkOut),
      await DataReader.read(this.personsNumber)
    );
  }
}

module.exports = SearchFormCreator
