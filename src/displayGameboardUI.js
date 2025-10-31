import { createCoordinateBtn } from "./createGridButton";

class gameboardUI {
  constructor(playerType) {
    this.display = null;
    this.playerType = playerType;
    this.render();
  }

  render() {
    this.createContainer();
    this.addBtnEventListeners();
  }

  createContainer() {
    const mainContainer = document.getElementById("main-content");
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
        createCoordinateBtn(gameboard, currentRow + rowLocation[i]);
      }
      i++;
    }
  }

  addBtnEventListeners() {
    const test = this.playerType;
    const gameboard = document.querySelector("#" + test);
    gameboard.addEventListener("click", (test) => {
      console.log(test.target.id);
    });
  }
}

export { gameboardUI };
