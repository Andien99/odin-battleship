import {
  checkChildNodes,
  updateDisplayLength,
  updateOrientation,
  resetChildren,
  updateColor,
} from "./customiseShipDisplay";
import { gameboardUI } from "./displayGameboardUI";
import { createElement } from "./createElement";

class selectShip {
  constructor() {
    this.length = 3;
    this.color = "#ffbe0b";
    this.orientation = "horizontal";
    this.selectedShips = [];
    this.initialise();
  }

  // prettier-ignore
  initialise() {
    const shipSelectionContainer = createElement('div', {id: 'ship-selection-container',className: "modal open",})
    const selectionGameboard = createElement('div', {id:'selection-gameboard'})
    const rightSideInfo = createElement('div', {id:'right-side'})
    const instructionLabel = createElement('h1', {textContent:'Customise ship, then drag and drop!'})
    const shipSelection = createElement("div", { id: "ship-selection"});
    const displayContainer = createElement("div", { id: "display-container",});
    const displayShip = createElement("div", { id: "display-ship" });
    const startGameBtn = createElement("button", {id: "start-game", textContent: "Start Game",});
    const customiseShipContainer = createElement("div", {id: "customise-ship-container",});
    const orientationContainer = createElement("div", {id: "orientation-container",className: "property",});
    const orientationLabel = createElement("p", {textContent: "Orientation",});
    const orientationBtn = createElement("div", {className: "orientation-btn",});
    const horizontalBtn = createElement("button", {textContent: "Horizontal", id:'horizontal-btn'});
    const verticalBtn = createElement("button", {textContent: "Vertical",id:'vertical-btn'});
    const lengthContainer = createElement("div", {id: "length-container",className: "property",});
    const lengthLabel = createElement("p", { textContent: "Length" });
    const sliderContainer = createElement("div", {className: "slider-container",});
    const sliderInput = createElement("input", {
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
    const randomiseBtn = createElement('button',{id:'randomiseBtn', textContent:'Randomise'})

    document.body.append(shipSelectionContainer)
    shipSelectionContainer.append(selectionGameboard, rightSideInfo)
    rightSideInfo.append(instructionLabel, shipSelection,startGameBtn)
    shipSelection.append(displayContainer, customiseShipContainer)
    displayContainer.append(displayShip)
    customiseShipContainer.append(orientationContainer, lengthContainer, colorContainer,randomiseBtn)
    orientationContainer.append(orientationLabel, orientationBtn)
    orientationBtn.append(horizontalBtn,verticalBtn)
    lengthContainer.append(lengthLabel,sliderContainer)
    sliderContainer.append(sliderInput)
    colorContainer.append(colorLabel, paletteContainer)
    paletteContainer.append(paletteRed,paletteGreen,paletteYellow,palettePurple,paletteBlue)
    new gameboardUI('player', 'selection-gameboard')
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
    const randomiseBtn = document.getElementById("randomiseBtn");

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
    randomiseBtn.addEventListener("click", () => {
      self.color = colorArr[randomInt1to5()];
      self.length = randomInt1to5() + 1;
      if (Math.floor(Math.random() * 10) > 4) {
        self.orientation = "horizontal";
      } else {
        self.orientation = "vertical";
      }
      self.updateShipDisplay(this.length, this.color, this.orientation);
    });
  }
}

export { selectShip };
