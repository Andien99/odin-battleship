import { player } from "./createPlayer";

export { gamemodeModal };

class gamemodeModal {
  constructor() {
    this.gamemode = null;
    this.initialise();
  }

  initialise() {
    const modalContainer = document.getElementById("gamemode");
    const modalTitle = document.createElement("div");
    const vsPlayerBtn = document.createElement("button");
    const vsCPUBtn = document.createElement("button");

    modalTitle.classList.add("modal-title");
    vsPlayerBtn.classList.add("versus-player");
    vsCPUBtn.classList.add("versus-CPU");

    modalTitle.textContent = "Gamemode";
    vsPlayerBtn.textContent = "Player vs Player";
    vsCPUBtn.textContent = "Player vs CPU";

    modalContainer.appendChild(modalTitle);
    modalContainer.appendChild(vsPlayerBtn);
    modalContainer.appendChild(vsCPUBtn);

    this.addEventListener(modalContainer, vsPlayerBtn, vsCPUBtn);
  }

  addEventListener(parent, playerBtn, CPUBtn) {
    playerBtn.addEventListener("click", () => {
      new player("player1");
      new player("player2");
      parent.classList.replace("open", "closed");
      playerBtn.disabled = true;
      CPUBtn.disabled = true;
    });
    CPUBtn.addEventListener("click", () => {
      new player("player1");
      new player("CPU");
      parent.classList.replace("open", "closed");
    });
  }
}
