import { ship } from "./createShip";

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
      finalSet.push(new node([currentRow, rowLocation[i]], false));
      i++;
      createGrid();
    }
  }

  recieveAttack(coordinate) {}

  missedAttacks() {
    return (this.missedAttacks += 1);
  }

  placeShip(start, end) {}
}

class node {
  constructor(coordinate, hit) {
    this.coordinate = coordinate;
    this.hit = hit;
  }
}

export { gameboard };
