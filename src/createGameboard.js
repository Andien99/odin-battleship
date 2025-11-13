class gameboard {
  constructor(playerType) {
    this.grid = [];
    this.missedAttacks = 0;
    this.ships = [];
    this.sunkedShips = null;
    this.createGameboard();
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
      if (currentRow < 11) {
        finalSet.push(new node([currentRow, rowLocation[i]], false, null));
      }
      i++;
      createGrid();
    }
  }

  getIndexfromLetter(letterStr) {
    //prettier-ignore
    let rowLocation = ["A","B","C","D","E","F","G","H","I","J"];
    return rowLocation.indexOf(letterStr);
  }

  getIndexofLetter(index) {
    let rowLocation = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J"];
    return rowLocation[index];
  }

  getNextLetter(letterStr) {
    let rowLocation = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J"];
    let currentLetter = rowLocation.indexOf(letterStr);
    return rowLocation[currentLetter + 1];
  }

  find(coordinate) {
    let colIndex = coordinate[0] - 1;
    return this.grid[colIndex][this.getIndexfromLetter(coordinate[1])];
  }

  checkOutOfBounds(ship, coordinate) {
    if (
      ship.orientation == "horizontal" &&
      this.getIndexfromLetter(coordinate[1]) + ship.length - 1 >=
        this.grid[0].length
    ) {
      console.error("This ship placement is out of bounds");
      return true;
    } else if (
      ship.orientation == "vertical" &&
      this.grid[coordinate[0] + ship.length - 1] == undefined
    ) {
      console.error("This ship placement is out of bounds");
      return true;
    } else {
      return false;
    }
  }

  getShipGridList(ship, coordinate) {
    let coordinateSet = [];
    let currentCoordinate = [...coordinate];
    if (ship.orientation == "horizontal") {
      for (let i = 0; i < ship.length; i++) {
        let currentNode = this.find(currentCoordinate);
        coordinateSet.push(currentNode);
        currentCoordinate[1] = this.getNextLetter(currentCoordinate[1]);
      }
    } else if (ship.orientation == "vertical") {
      for (let i = 0; i < ship.length; i++) {
        let currentNode = this.find(currentCoordinate);
        coordinateSet.push(currentNode);
        currentCoordinate[0] = currentCoordinate[0] + 1;
      }
    }
    return coordinateSet;
  }

  checkConflictingShips(coordinateSet) {
    let isConflicting = false;
    coordinateSet.forEach((node) => {
      if (node == undefined) console.log(coordinateSet);
      if (node.ship !== null) {
        isConflicting = true;
      }
    });
    if (isConflicting == true) {
      console.error("A ship is already placed there!");
      return true;
    } else {
      return false;
    }
  }

  placeShip(ship, start) {
    let startingCoordinate = start;
    // checks if ship can fit into selected grid
    // try {
    //   this.checkOutOfBounds(ship, startingCoordinate);
    // } catch (error) {
    //   console.error(
    //     "This ship placement is out of bounds or a ship is already here!"
    //   );
    // }
    if (this.checkOutOfBounds(ship, startingCoordinate) == true) {
      return;
    }
    let coordinateSet = this.getShipGridList(ship, startingCoordinate);

    if (this.checkConflictingShips(coordinateSet) == true) return;
    this.ships.push(ship);
    coordinateSet.forEach((node) => {
      node.ship = ship;
    });
    console.log("ship has been placed");
    return "ship has been placed";
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
          console.log("All ships have sunk! You win!");
          return "All ships have sunk! You win!";
        } else {
          console.log("A ship has sunk!");
          return "A ship has sunk!";
        }
      }
      console.log("A ship has been hit!");
      return "A ship has been hit!";
    } else {
      self.addMissedAttacks();
      console.log("No ships were hit!");
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
