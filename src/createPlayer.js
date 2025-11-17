import { gameboard } from "./createGameboard";
import { gameboardUI } from "./displayGameboardUI";

class player {
  constructor(
    playerType = "Player",
    containerID = "selection-gameboard",
    isPlayable = false,
    playerName
  ) {
    this.playerType = playerType;
    this.containerID = containerID;
    this.playerName = playerName;
    this.gameboard = new gameboardUI(
      this.playerType,
      this.containerID,
      this.isPlayable,
      this.playerName
    );
  }
}

export { player };
