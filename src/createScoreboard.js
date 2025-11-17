import { createElement } from "./createElement";

class scoreboard {
  constructor(playerName, parent) {
    (this.playerName = playerName), (this.parent = parent);
    this.render();
  }

  render() {
    const scoreboardContainer = createElement("div", {
      className: "scoreboard-container",
    });
    const scoreboardLabel = createElement("h4", {
      className: "scoreboard-label",
      id: this.playerName + "-title",
      textContent: this.playerName,
    });
    const scoreboardShips = createElement("p", {
      className: "scoreboard-" + this.playerName,
      textContent: "🚢 🚢 🚢 🚢 🚢",
    });
    scoreboardContainer.append(scoreboardLabel, scoreboardShips);
    this.parent.append(scoreboardContainer);
  }

  shipSunk(playerID) {}
}

export { scoreboard };
