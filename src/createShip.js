class ship {
  constructor(length, hitcount, sunk, orientation = "horizontal", color) {
    (this.length = length),
      (this.hitcount = hitcount),
      (this.sunk = sunk),
      (this.orientation = orientation),
      (this.color = color);
  }

  hit() {
    return (this.hitcount += 1);
  }

  isSunk() {
    if (this.hitcount >= this.length) {
      this.sunk = true;
      return true;
    } else {
      return false;
    }
  }
}

export { ship };
