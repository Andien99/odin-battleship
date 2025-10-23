import { gameboard } from "./createGameboard";

class player {
  constructor(CPU = false) {
    this.CPU = CPU;
    this.gameboard = new gameboard();
  }
}
