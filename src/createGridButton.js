import { createElement } from "./createElement";

function createCoordinateBtn(parent, coordinate, playerName = "") {
  let coordinateBtn = createElement("button", {
    className: "coordinateBtn " + playerName,
    id: "coordinate-" + coordinate,
  });

  parent.appendChild(coordinateBtn);
}

export { createCoordinateBtn };
