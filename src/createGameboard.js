import { ship } from "./createShip";

class gameboard {
  constructor(gridSize, missedAttacks, ships, sunkedShips) {
    this.gridSize = gridSize;
    this.missedAttacks = missedAttacks;
    (this.ships = ships), (this.sunkedShips = sunkedShips);
  }

  recieveAttack(coordinate) {}

  missedAttacks() {
    return (this.missedAttacks += 1);
  }
}
