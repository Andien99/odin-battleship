import { createCoordinateBtn } from "./createGridButton";
import { gameboard } from "./createGameboard";
import { ship } from "./createShip";
import { attackPlayer } from "./handleCPU";
class gameboardUI {
  constructor(playerType, idContainer, isPlayable = false, playerName) {
    this.display = null;
    this.playerType = playerType;
    this.playerName = playerName;
    this.idContainer = idContainer;
    this.isPlayable = isPlayable;
    this.gameboardLogic = new gameboard(playerName);
    this.render();
  }

  getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  getRandomCoordinate() {
    let randomY = this.getRandomNumber(1, 9);

    let randomX = this.gameboardLogic.getIndexofLetter(
      this.getRandomNumber(0, 9)
    );
    let newCoordinate = [randomY, randomX];
    return newCoordinate;
  }

  getRandomColor() {
    const colorSet = ["#ff006e", "#84a59d", "#8338ec", "#3a86ff", "#ffbe0b"];
    return colorSet[this.getRandomNumber(0, 4)];
  }

  randomiseBoard() {
    if (this.gameboardLogic.ships.length >= 5) {
      return;
    }
    let randomLength = this.getRandomNumber(2, 5);
    let randomOrientation;
    let randomColor = this.getRandomColor();
    if (this.getRandomNumber(0, 1) == 1) {
      randomOrientation = "horizontal";
    } else {
      randomOrientation = "vertical";
    }
    let randomCoordinate = this.getRandomCoordinate();
    let randomShip = new ship(
      randomLength,
      0,
      false,
      randomOrientation,
      randomColor
    );
    let shipGridList;
    if (
      this.gameboardLogic.checkOutOfBounds(randomShip, randomCoordinate) ==
      false
    ) {
      shipGridList = this.gameboardLogic.getShipGridList(
        randomShip,
        randomCoordinate
      );
    } else {
      return this.randomiseBoard();
    }
    if (this.gameboardLogic.checkConflictingShips(shipGridList) == false) {
      this.displayPlacedShip(randomShip, randomCoordinate);
    }
    return this.randomiseBoard();
  }

  render() {
    this.createContainer();
    this.addBtnEventListeners();
    if (this.playerType == "CPU") this.randomiseBoard();
  }

  createContainer() {
    const mainContainer = document.getElementById(this.idContainer);
    let currentContainer = document.createElement("div");
    let bufferDiv = document.createElement("div");
    let labelXaxis = document.createElement("div");
    let labelYaxis = document.createElement("div");
    let playerGameboard = document.createElement("div");

    playerGameboard.setAttribute("id", this.playerType);

    labelXaxis.classList.add("x");
    labelYaxis.classList.add("y");
    labelXaxis.classList.add("axis");
    labelYaxis.classList.add("axis");
    currentContainer.classList.add("gameboard-container");
    playerGameboard.classList.add("gameboard");

    this.createLabel(labelXaxis);
    this.createLabel(labelYaxis);
    this.initialiseGrid(playerGameboard);

    mainContainer.appendChild(currentContainer);
    currentContainer.appendChild(bufferDiv);
    currentContainer.appendChild(labelXaxis);
    currentContainer.appendChild(labelYaxis);
    currentContainer.appendChild(playerGameboard);
  }

  createLabel(axis) {
    let rowLocation = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J"];
    for (let j = 0; j < 10; j++) {
      let label = document.createElement("div");
      if (axis.classList.contains("x")) {
        label.textContent = rowLocation[j];
      } else {
        label.textContent = j + 1;
      }
      axis.appendChild(label);
    }
    return axis;
  }

  initialiseGrid(gameboard) {
    let rowLocation = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J"];
    let i = 0;
    let currentRow = 1;
    for (let j = 0; j < 100; j++) {
      if (
        gameboard.children.length % 10 == 0 &&
        gameboard.children.length !== 0
      ) {
        i = 0;
        currentRow += 1;
      }
      if (currentRow < 11) {
        createCoordinateBtn(
          gameboard,
          currentRow + rowLocation[i],
          this.playerType
        );
      }
      i++;
    }
  }

  addBtnEventListeners() {
    const test = this.playerType;
    const gameboard = document.querySelector("#" + test + ".gameboard");
    gameboard.addEventListener("click", (test) => {
      if (
        this.isPlayable == true &&
        test.target.classList.contains("coordinateBtn")
      ) {
        this.handleAttack(test.target.id, test.target);
        if (document.querySelector(".turn-screen").style.left == 50 + "%") {
          document.querySelector(".turn-screen").style.left = 0 + "%";
        } else {
          document.querySelector(".turn-screen").style.left = 50 + "%";
        }

        return;
      }
      if (
        gameboard.id == "CPU" &&
        test.target.classList.contains("coordinateBtn")
      ) {
        document.querySelector(".turn-screen").style.left = 50 + "%";
        this.handleAttack(test.target.id, test.target);
        setTimeout(() => {
          attackPlayer();
        }, 1000);
      }
    });
  }

  handleAttack(coordinate, gridBtn) {
    let coordinateAsArr;
    if (typeof coordinate == "object") {
      coordinateAsArr = coordinate;
    } else if (coordinate.length > 13) {
      coordinateAsArr = [
        parseInt(
          coordinate.slice(coordinate.length - 3, coordinate.length - 1)
        ),
        coordinate.charAt(coordinate.length - 1),
      ];
    } else {
      coordinateAsArr = [
        parseInt(coordinate.charAt(coordinate.length - 2)),
        coordinate.charAt(coordinate.length - 1),
      ];
    }
    let attackResult = this.gameboardLogic.recieveAttack(coordinateAsArr);
    this.updateGameboard(attackResult, gridBtn);
  }

  updateGameboard(result, gridBtn) {
    if (result === "No ships were hit!") {
      gridBtn.textContent = "⚪";
      gridBtn.style.color = "initial";
      gridBtn.disabled = true;
    } else {
      gridBtn.textContent = "🔴";
      gridBtn.disabled = true;
      gridBtn.style.color = "initial";
      gridBtn.style.backgroundColor = "#ee9090ff";
    }
  }

  displayPlacedShip(ship, coordinate) {
    //currently, the game logic only takes coordinate parameters if it is and array
    let coordinateAsArr;
    if (typeof coordinate == "object") {
      coordinateAsArr = coordinate;
    } else if (coordinate.length > 13) {
      coordinateAsArr = [
        parseInt(
          coordinate.slice(coordinate.length - 3, coordinate.length - 1)
        ),
        coordinate.charAt(coordinate.length - 1),
      ];
    } else {
      coordinateAsArr = [
        parseInt(coordinate.charAt(coordinate.length - 2)),
        coordinate.charAt(coordinate.length - 1),
      ];
    }

    if (this.gameboardLogic.placeShip(ship, coordinateAsArr)) {
      let coordinateSet = this.gameboardLogic.getShipGridList(
        ship,
        coordinateAsArr
      );
      coordinateSet.forEach((element) => {
        let coordinateID = element.coordinate.join("");
        document.querySelector(
          "#coordinate-" + coordinateID + "." + this.playerType
        ).style.backgroundColor = ship.color;
      });
    }
  }
}

export { gameboardUI };
