class SearchForm {
  constructor(destination, checkIn, checkOut, personsNumber) {
    this.destination = destination;
    this.checkIn = checkIn;
    this.checkOut = checkOut;
    this.personsNumber = personsNumber;
  }

  getDestination() {
    return this.destination
  }

  setDestination(destination) {
    this.destination = destination
  }

  getCheckIn() {
    return this.checkIn
  }

  setCheckIn(checkIn) {
    this.checkIn = checkIn
  }

  getCheckOut() {
    return this.checkOut
  }

  setCheckOut(checkOut) {
    this.checkOut = checkOut
  }

  getPersonsNumber() {
    return this.personsNumber
  }

  setPersonsNumber(personsNumber) {
    this.personsNumber = personsNumber
  }
}

module.exports = SearchForm
