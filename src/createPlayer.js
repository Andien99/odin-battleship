import { gameboard } from "./createGameboard";
import { gameboardUI } from "./displayGameboardUI";

class player {
  constructor(
    playerType = "player",
    containerID = "selection-gameboard",
    isPlayable = false
  ) {
    this.playerType = playerType;
    this.containerID = containerID;
    this.gameboard = new gameboardUI(this.playerType, containerID, isPlayable);
  }
}

export { player };
