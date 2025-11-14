import { createElement } from "./createElement";

function createCoordinateBtn(parent, coordinate, playerType = "") {
  let coordinateBtn = createElement("button", {
    className: "coordinateBtn " + playerType,
    id: "coordinate-" + coordinate,
  });

  parent.appendChild(coordinateBtn);
}

export { createCoordinateBtn };
