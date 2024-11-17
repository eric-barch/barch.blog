const documentElement = document.documentElement;
const mediaQueryList = window.matchMedia("(prefers-color-scheme: dark)");
let systemModeChangeHandler = undefined;

const modeIcons = {
  light: "/icons/sun.svg",
  dark: "/icons/moon.svg",
  system: "/icons/sun-moon.svg",
};

function applyMode(mode) {
  const isDarkMode = mode === "dark" || (mode === "system" && mediaQueryList.matches);
  documentElement.classList.toggle("dark", isDarkMode);
  documentElement.classList.toggle("light", !isDarkMode);
}

function onSystemModeChange() {
  applyMode("system");
}

function updateModeIcon(modeIcon) {
  fetch(modeIcon)
    .then(response => response.text())
    .then(svg => {
      document.getElementById("mode-icon-container").innerHTML = svg;
    });
}

function setMode(mode) {
  if (systemModeChangeHandler) {
    mediaQueryList.removeEventListener("change", systemModeChangeHandler);
    systemModeChangeHandler = undefined;
  }

  applyMode(mode);

  if (mode === "system") {
    systemModeChangeHandler = onSystemModeChange;
    mediaQueryList.addEventListener("change", systemModeChangeHandler);
  }

  updateModeIcon(modeIcons[mode]);

  if (mode === "system") {
    localStorage.removeItem("theme-mode");
  } else {
    localStorage.setItem("theme-mode", mode)
  }
}

function getMode() {
  return localStorage.getItem("theme-mode") ?? "system";
}

function cycleMode() {
  const modes = ["light", "dark", "system"];
  const currentMode = getMode();
  const nextMode = modes[(modes.indexOf(currentMode) + 1) % modes.length];
  setMode(nextMode);
}

setMode(getMode());
