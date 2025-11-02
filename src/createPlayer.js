import { gameboard } from "./createGameboard";
import { gameboardUI } from "./displayGameboardUI";

class player {
  constructor(playerType = "player1") {
    this.playerType = playerType;
    this.gameboard = new gameboardUI(this.playerType);
  }
}

export { player };
