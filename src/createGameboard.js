class gameboard {
  constructor() {
    this.grid = [];
    this.missedAttacks = 0;
    this.ships = [];
    this.sunkedShips = null;
  }

  createGameboard() {
    let self = this;
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

  getLetterIndex(letterStr) {
    //prettier-ignore
    let rowLocation = ["A","B","C","D","E","F","G","H","I","J"];
    return rowLocation.indexOf(letterStr);
  }

  getNextLetter(letterStr) {
    let rowLocation = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J"];
    let currentLetter = rowLocation.indexOf(letterStr);
    return rowLocation[currentLetter + 1];
  }

  find(coordinate) {
    let colIndex = coordinate[0] - 1;
    return this.grid[colIndex][this.getLetterIndex(coordinate[1])];
  }

  checkOutOfBounds(ship, coordinate, gridlist) {
    if (
      ship.orientation == "horizontal" &&
      this.getLetterIndex(coordinate[1]) + ship.length - 1 >=
        this.grid[0].length
    ) {
      throw new Error("This ship placement is out of bounds");
    } else if (
      ship.orientation == "vertical" &&
      this.grid[coordinate[0] + ship.length - 1] == undefined
    ) {
      throw new Error("This ship placement is out of bounds");
    } else {
    }
  }

  checkConflictingShips(coordinateSet) {
    coordinateSet.forEach((node) => {
      if (node.ship !== null) {
        throw new Error("Ship is already here!");
      }
    });
  }

  placeShip(ship, start) {
    let currentCoordinate = start;
    let coordinateSet = [];
    // checks if ship can fit into selected grid
    try {
      this.checkOutOfBounds(ship, start);
    } catch (error) {
      throw new Error(
        "This ship placement is out of bounds or a ship is already here!"
      );
    }
    // should be able to determine if the ship is vertical or horizontal
    if (ship.orientation == "horizontal") {
      for (let i = 0; i < ship.length; i++) {
        let currentNode = this.find(currentCoordinate);
        // currentNode.ship = ship;
        coordinateSet.push(currentNode);
        currentCoordinate[1] = this.getNextLetter(currentCoordinate[1]);
      }
      this.checkConflictingShips(coordinateSet);
      this.ships.push(ship);
      coordinateSet.forEach((node) => {
        node.ship = ship;
      });
    } else if (ship.orientation == "vertical") {
      for (let i = 0; i < ship.length; i++) {
        let currentNode = this.find(currentCoordinate);
        // currentNode.ship = ship;
        coordinateSet.push(currentNode);
        currentCoordinate[0] = currentCoordinate[0] + 1;
      }
      this.checkConflictingShips(coordinateSet);
      this.ships.push(ship);
      coordinateSet.forEach((node) => {
        node.ship = ship;
      });
    }
  }

  recieveAttack(coordinate) {
    const currentNode = this.find(coordinate);
    let self = this;
    if (currentNode.hit == true) {
      throw new Error("This coordinate has already been selected");
    } else {
      currentNode.hit = true;
    }
    if (currentNode.ship !== null) {
      currentNode.ship.hitcount += 1;
      if (currentNode.ship.isSunk() == true) {
        self.sunkedShips += 1;
        if (self.checkWinner() == true) {
          return "All ships have sunk! You win!";
        } else {
          return "A ship has sunk!";
        }
      }
      return "A ship has been hit!";
    } else {
      self.addMissedAttacks();
      return "No ships were hit!";
    }
  }

  addMissedAttacks() {
    this.missedAttacks += 1;
    return;
  }

  checkWinner() {
    if (this.ships.length == this.sunkedShips) {
      return true;
    }
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
