import { player } from "./createPlayer";
import { scoreboard } from "./createScoreboard";
import { ship } from "./createShip";
import { announceWinner } from "./gameWinnerScreen";
import { gamemodeModal } from "./selectGamemode";
import "./style.css";

new gamemodeModal();

// const testPlayer = new player("player1");
// const testship1 = new ship(3, 0, false, "horizontal");
// testPlayer.gameboard.gameboard.placeShip(testship1, [2, "A"]);
// const testScoreboard = new scoreboard();
// const testCPU = new player("CPU");
