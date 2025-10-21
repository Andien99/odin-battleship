class gameboard {
  constructor(grid, missedAttacks, ships, sunkedShips) {
    this.grid = grid;
    this.missedAttacks = missedAttacks;
    (this.ships = ships), (this.sunkedShips = sunkedShips);
  }

  createGameboard() {
    let self = this;
    this.grid = [];
    let currentRow = 1;
    let rowLocation = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J"];
    let finalSet = [];
    let i = 0;
    createGrid();
    function createGrid() {
      if (self.grid.length >= 10) {
        return self.grid;
      }
      if (finalSet.length >= 10) {
        self.grid.push(finalSet);
        i = 0;
        finalSet = [];
        currentRow += 1;
      }
      finalSet.push(new node([currentRow, rowLocation[i]], false, null));
      i++;
      createGrid();
    }
  }

  find(coordinate) {
    let rowLocation = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J"];
    let index = coordinate[0] - 1;

    return this.grid[index][rowLocation.indexOf(coordinate[1])];
  }
  //start = [1, 'B']
  placeShip(ship, start) {
    let currentCoordinate = start;
    let rowLocation = [
      "Buffer",
      "A",
      "B",
      "C",
      "D",
      "E",
      "F",
      "G",
      "H",
      "I",
      "J",
    ];
    let index = rowLocation.indexOf(currentCoordinate[1]);
    // checks if ship can fit into selected grid
    if (rowLocation[index + ship.length] == null) {
      throw new Error("This ship placement is out of bounds");
    }
    // should be able to determine if the ship is vertical or horizontal
    if (ship.orientation == "horizontal") {
      for (let i = 0; i < ship.length; i++) {
        let currentNode = this.find(currentCoordinate);
        currentNode.ship = ship;
        currentCoordinate[1] = rowLocation[index + 1];
        index += 1;
      }
    }
  }

  recieveAttack(coordinate) {
    const currentNode = this.find(coordinate);
    if (currentNode.hit == true) {
      throw new Error("This coordinate has already been selected");
    } else {
      currentNode.hit = true;
    }
    if (currentNode.ship !== null) {
      currentNode.ship.hitcount += 1;
      return "A ship has been hit!";
    } else {
      this.missedAttacks();
      return "No ships were hit!";
    }
  }

  missedAttacks() {
    return (this.missedAttacks += 1);
  }
}

class node {
  constructor(coordinate, hit, ship) {
    this.coordinate = coordinate;
    this.hit = hit;
    this.ship = ship;
  }
}

module.exports = { gameboard };
