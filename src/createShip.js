//board is a 10 by 10 grid
//horizontally it is coded in alphabetical order

class ship {
  constructor(length, hitcount, sunk) {
    (this.length = length), (this.hitcount = hitcount), (this.sunk = sunk);
  }

  hit() {
    return (this.hitcount += 1);
  }

  isSunk() {
    if (this.hitcount >= this.length) {
      this.sunk = true;
      return "This ship has sunk";
    }
  }
}

let jetski = new ship(4, 0, false);

module.exports = { ship };
