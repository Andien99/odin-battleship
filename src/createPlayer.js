import { gameboard } from "./createGameboard";

class player {
  constructor(playerType = "player1") {
    this.playerType = playerType;
    this.gameboard = new gameboard(this.playerType);
  }
}

export { player };
