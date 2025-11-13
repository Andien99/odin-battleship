import {
  checkChildNodes,
  updateDisplayLength,
  updateOrientation,
  resetChildren,
  updateColor,
  resetDraggedShip,
} from "./customiseShipDisplay";
import { createElement } from "./createElement";
import { ship } from "./createShip";
import { player } from "./createPlayer";
import { scoreboard } from "./createScoreboard";

let player1 = null;
let player2 = null;

class selectShip {
  constructor(playerType, playerName, gameMode) {
    this.playerType = playerType;
    this.playerName = playerName;
    this.gameMode = gameMode;
    this.length = 3;
    this.color = "#ffbe0b";
    this.orientation = "horizontal";
    this.selectedShips = [];
    this.initialise();
    player1 = new player(playerType, playerName);
  }

  // prettier-ignore
  initialise() {
    let shipSelectionContainer = createElement('div', {id: 'ship-selection-container',className: "modal open",})
    let playerGameboard = createElement('div', {id: this.playerName})
    let rightSideInfo = createElement('div', {id:'right-side'})
    let instructionLabel = createElement('h1', {textContent:'Customise ship, then drag and drop!'})
    let shipSelection = createElement("div", { id: "ship-selection"});
    let displayContainer = createElement("div", { id: "display-container",});
    let displayShip = createElement("div", { id: "display-ship" });
    let startGameBtn = createElement("button", {id: "start-game", textContent: "Start Game",});
    let customiseShipContainer = createElement("div", {id: "customise-ship-container",});
    let orientationContainer = createElement("div", {id: "orientation-container",className: "property",});
    let orientationLabel = createElement("p", {textContent: "Orientation",});
    let orientationBtn = createElement("div", {className: "orientation-btn",});
    let horizontalBtn = createElement("button", {textContent: "Horizontal", id:'horizontal-btn'});
    let verticalBtn = createElement("button", {textContent: "Vertical",id:'vertical-btn'});
    let lengthContainer = createElement("div", {id: "length-container",className: "property",});
    let lengthLabel = createElement("p", { textContent: "Length" });
    let sliderContainer = createElement("div", {className: "slider-container",});
    let sliderInput = createElement("input", {
      type: "range",
      min: 1,
      max: 5,
      value: 3,
      id: "myRange",
      className: "slider",
    });
    const colorContainer = createElement('div',{className:'property', id:'color-container'})
    const colorLabel = createElement('p',{textContent: 'Colour'})
    const paletteContainer = createElement('div',{className: 'palette-container'})
    const paletteRed = createElement('div', {className:'palette', id:'red'})
    const paletteGreen = createElement('div', {className:'palette', id:'green'})
    const paletteYellow = createElement('div', {className:'palette', id:'yellow'})
    const palettePurple = createElement('div', {className:'palette', id:'purple'})
    const paletteBlue = createElement('div', {className:'palette', id:'blue'})
    const randomiseShipBtn = createElement('button',{id:'randomise-ship-btn', textContent:'Random Ship'})
    const randmiseBoardBtn = createElement('button', {id:'randomise-board-btn', textContent:'Randomise Board'})

    document.body.append(shipSelectionContainer)
    shipSelectionContainer.append(playerGameboard, rightSideInfo)
    rightSideInfo.append(instructionLabel, shipSelection,startGameBtn)
    shipSelection.append(displayContainer, customiseShipContainer)
    displayContainer.append(displayShip)
    customiseShipContainer.append(orientationContainer, lengthContainer, colorContainer,randomiseShipBtn)
    orientationContainer.append(orientationLabel, orientationBtn)
    orientationBtn.append(horizontalBtn,verticalBtn)
    lengthContainer.append(lengthLabel,sliderContainer)
    sliderContainer.append(sliderInput)
    rightSideInfo.append(randmiseBoardBtn)
    colorContainer.append(colorLabel, paletteContainer)
    paletteContainer.append(paletteRed,paletteGreen,paletteYellow,palettePurple,paletteBlue)
    this.addEventListener()
    this.updateShipDisplay(this.length,this.color,this.orientation)
  }

  updateShipDisplay(length, color, orientation) {
    const displayShipScreen = document.getElementById("display-ship");
    checkChildNodes(displayShipScreen);
    let customShip = document.getElementById("custom-ship");
    resetChildren(customShip);
    updateDisplayLength(length, customShip);
    updateOrientation(orientation, customShip, length);
    updateColor(color, customShip);
  }

  addEventListener() {
    let self = this;
    let colorArr = ["#ff006e", "#84a59d", "#ffbe0b", "#8338ec", "#3a86ff"];
    const horizontalBtn = document.getElementById("horizontal-btn");
    const verticalBtn = document.getElementById("vertical-btn");
    const sliderInput = document.querySelector(".slider");
    const paletteRed = document.getElementById("red");
    const paletteYellow = document.getElementById("yellow");
    const paletteGreen = document.getElementById("green");
    const palettePurple = document.getElementById("purple");
    const paletteBlue = document.getElementById("blue");
    const randomiseShipBtn = document.getElementById("randomise-ship-btn");
    const displayShip = document.getElementById("display-ship");
    const startGameBtn = document.getElementById("start-game");
    const randomiseBoardBtn = document.getElementById("randomise-board-btn");

    startGameBtn.addEventListener("click", () => {
      let playerGameboard = document.getElementById(this.playerName);
      let mainContainer = document.getElementById("main-content");
      let shipSelectionContainer = document.getElementById(
        "ship-selection-container"
      );

      shipSelectionContainer.remove();
      mainContainer.appendChild(playerGameboard);
      if (document.getElementById("middle-container") == null) {
        new scoreboard();
      }
      if (this.gameMode == "PvE") {
        const CPUgameboard = createElement("div", { id: "CPU" });
        mainContainer.appendChild(CPUgameboard);
        player2 = new player("CPU", "CPU", true);
      }
    });

    function randomInt1to5() {
      let randomInt = Math.floor(Math.random() * 10);
      if (randomInt > 4) {
        randomInt = randomInt - 5;
      }
      return randomInt;
    }

    horizontalBtn.addEventListener("click", () => {
      self.orientation = "horizontal";
      self.updateShipDisplay(this.length, this.color, this.orientation);
    });
    verticalBtn.addEventListener("click", () => {
      self.orientation = "vertical";
      self.updateShipDisplay(this.length, this.color, this.orientation);
    });
    sliderInput.addEventListener("input", () => {
      self.length = sliderInput.value;
      self.updateShipDisplay(this.length, this.color, this.orientation);
    });
    paletteRed.addEventListener("click", () => {
      self.color = "#ff006e";
      self.updateShipDisplay(this.length, this.color, this.orientation);
    });
    paletteGreen.addEventListener("click", () => {
      self.color = "#84a59d";
      self.updateShipDisplay(this.length, this.color, this.orientation);
    });
    paletteYellow.addEventListener("click", () => {
      self.color = "#ffbe0b";
      self.updateShipDisplay(this.length, this.color, this.orientation);
    });
    palettePurple.addEventListener("click", () => {
      self.color = "#8338ec";
      self.updateShipDisplay(this.length, this.color, this.orientation);
    });
    paletteBlue.addEventListener("click", () => {
      self.color = "#3a86ff";
      self.updateShipDisplay(this.length, this.color, this.orientation);
    });
    randomiseShipBtn.addEventListener("click", () => {
      self.color = colorArr[randomInt1to5()];
      self.length = randomInt1to5() + 1;
      if (Math.floor(Math.random() * 10) > 4) {
        self.orientation = "horizontal";
      } else {
        self.orientation = "vertical";
      }
      self.updateShipDisplay(this.length, this.color, this.orientation);
    });
    randomiseBoardBtn.addEventListener("click", () => {
      this.resetBoard();
      player1.gameboard.randomiseBoard();
    });

    //coding for drag and drop
    let cursor = {
      x: null,
      y: null,
    };

    let targetShip = {
      dom: null,
      x: null,
      y: null,
    };

    displayShip.addEventListener("mousedown", (mouse) => {
      if (
        mouse.target.id == "display-ship" ||
        mouse.target.classList.contains("ship-square")
      ) {
        resetDraggedShip();
        let draggableShip = createElement("div", { id: "draggable-ship" });
        updateDisplayLength(this.length, draggableShip);
        updateOrientation(this.orientation, draggableShip, this.length);
        updateColor(this.color, draggableShip);
        document.body.appendChild(draggableShip);

        cursor = {
          x: mouse.clientX,
          y: mouse.clientY,
        };

        targetShip = {
          dom: draggableShip,
          x:
            mouse.target.getBoundingClientRect().left +
            (mouse.clientX - mouse.target.getBoundingClientRect().left) -
            30,
          y:
            mouse.target.getBoundingClientRect().top +
            (mouse.clientY - mouse.target.getBoundingClientRect().top) -
            30,
        };
        targetShip.dom.style.left = targetShip.x + "px";
        targetShip.dom.style.top = targetShip.y + "px";
      }
    });

    document.addEventListener("mousemove", (mouse) => {
      if (targetShip.dom == null) return;
      let currentCursor = {
        x: mouse.clientX,
        y: mouse.clientY,
      };
      let distance = {
        x: currentCursor.x - cursor.x,
        y: currentCursor.y - cursor.y,
      };
      targetShip.dom.style.left = targetShip.x + distance.x + "px";
      targetShip.dom.style.top = targetShip.y + distance.y + "px";
    });

    document.addEventListener("mouseup", (mouse) => {
      if (
        targetShip.dom == null
        // ||
        // player1.gameboard.gameboardLogic.ships.length >= 4
      ) {
        return;
      }
      let selectedCoordinate;
      if (document.body.querySelector("#draggable-ship")) {
        document.body.querySelector("#draggable-ship").remove();
        selectedCoordinate = document.elementFromPoint(
          mouse.clientX,
          mouse.clientY
        );
      }
      if (
        selectedCoordinate.classList.contains("coordinateBtn") &&
        player1.gameboard.gameboardLogic.ships.length < 4
      ) {
        let thisShip = new ship(
          this.length,
          0,
          false,
          this.orientation,
          this.color
        );
        player1.gameboard.displayPlacedShip(thisShip, selectedCoordinate.id);
      }
      if ((player1.gameboard.gameboardLogic.ships.length = 4)) {
        console.error("max ship count is full!");
      }
      targetShip.dom = null;
    });
  }

  resetBoard() {
    player1.gameboard.gameboardLogic.ships = [];
    console.log(player1.gameboard.gameboardLogic.ships);
    let gridInfo = player1.gameboard.gameboardLogic.grid;
    gridInfo.forEach((node) => {
      for (let i = 0; i < node.length; i++) {
        node[i].ship = null;
      }
    });
    let gameboardContainer = document.querySelector(".gameboard");
    let gameboardChildren = gameboardContainer.childNodes;
    gameboardChildren.forEach((element) => {
      element.style.backgroundColor = "white";
    });
  }
}

export { selectShip, player1, player2 };
