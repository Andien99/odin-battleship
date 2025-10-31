import { gameboard } from "./createGameboard";
import { gameboardUI } from "./displayGameboardUI";

class player {
  constructor(playerType = "player1") {
    this.playerType = playerType;
    this.gameboard = new gameboard(this.playerType);
    this.displayGamebaord = new gameboardUI(this.playerType);
  }
}

export { player };
