import { gameboardUI } from "./displayGameboardUI";

class selectShip {
  constructor() {
    this.initialise();
  }
  createElement(tag, property = {}) {
    return Object.assign(document.createElement(tag), property);
  }

  // prettier-ignore
  initialise() {
    const shipSelectionContainer = this.createElement('div', {id: 'ship-selection-container',className: "modal open",})
    const selectionGameboard = this.createElement('div', {id:'selection-gameboard'})
    const rightSideInfo = this.createElement('div', {id:'right-side'})
    const instructionLabel = this.createElement('h1', {textContent:'Customise ship, then drag and drop!'})
    const shipSelection = this.createElement("div", { id: "ship-selection"});
    const displayContainer = this.createElement("div", { id: "display-container",});
    const displayShip = this.createElement("div", { id: "display-ship" });
    const startGameBtn = this.createElement("button", {id: "start-game", textContent: "Start Game",});
    const customiseShipContainer = this.createElement("div", {id: "customise-ship-container",});
    const orientationContainer = this.createElement("div", {id: "orientation-container",className: "property",});
    const orientationLabel = this.createElement("p", {textContent: "Orientation",});
    const orientationBtn = this.createElement("div", {className: "orientation-btn",});
    const horizontalBtn = this.createElement("button", {textContent: "Horizontal",});
    const verticalBtn = this.createElement("button", {textContent: "Vertical",});
    const lengthContainer = this.createElement("div", {id: "length-container",className: "property",});
    const lengthLabel = this.createElement("p", { textContent: "Length" });
    const sliderContainer = this.createElement("div", {className: "slider-container",});
    const sliderInput = this.createElement("input", {
      type: "range",
      min: 1,
      max: 5,
      value: 3,
      id: "myRange",
      className: "slider",
    });
    const colorContainer = this.createElement('div',{className:'property', id:'color-container'})
    const colorLabel = this.createElement('p',{textContent: 'Colour'})
    const paletteContainer = this.createElement('div',{className: 'palette-container'})
    const paletteRed = this.createElement('div', {className:'palette', id:'red'})
    const paletteGreen = this.createElement('div', {className:'palette', id:'green'})
    const paletteYellow = this.createElement('div', {className:'palette', id:'yellow'})
    const palettePurple = this.createElement('div', {className:'palette', id:'purple'})
    const paletteBlue = this.createElement('div', {className:'palette', id:'blue'})
    const randomiseBtn = this.createElement('button',{id:'randomiseBtn', textContent:'Randomise'})

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

  }
}

export { selectShip };
