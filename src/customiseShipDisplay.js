import { createElement } from "./createElement";
function checkChildNodes(parent) {
  if (parent.hasChildNodes() == false) {
    let child = createElement("div", { id: "custom-ship" });
    parent.appendChild(child);
  } else {
    let child = document.getElementById("custom-ship");
  }
}

function updateDisplayLength(length, thisNode) {
  for (let i = 0; i < length; i++) {
    let shipSquare = createElement("div", { className: "ship-square" });
    thisNode.appendChild(shipSquare);
  }
}

function updateOrientation(orientation, customShip, length) {
  if (orientation == "horizontal") {
    customShip.style.gridTemplateRows = "1fr";
    customShip.style.gridTemplateColumns = `repeat(${length}, 1fr)`;
  } else {
    customShip.style.gridTemplateRows = `repeat(${length}, 1fr)`;
    customShip.style.gridTemplateColumns = "1fr";
  }
}

function updateColor(color, thisNode) {
  thisNode.childNodes.forEach((element) => {
    element.style.backgroundColor = `${color}`;
  });
}

function resetChildren(thisNode) {
  if (thisNode.firstChild == null) {
    return;
  }
  thisNode.removeChild(thisNode.firstChild);
  resetChildren(thisNode);
}

export {
  checkChildNodes,
  updateDisplayLength,
  updateOrientation,
  resetChildren,
  updateColor,
};
