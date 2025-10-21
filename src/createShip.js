//board is a 10 by 10 grid
//horizontally it is coded in alphabetical order

class ship {
  constructor(length, hitcount, sunk, orientation = "horizontal") {
    (this.length = length),
      (this.hitcount = hitcount),
      (this.sunk = sunk),
      (this.orientation = orientation);
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

module.exports = { ship };
