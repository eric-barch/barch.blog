const documentElement = document.documentElement;
const mediaQueryList = window.matchMedia("(prefers-color-scheme: dark)");

let appliedMode = null;
let systemChangeHandler = null;
let faviconContent = null;

const modeIcons = {
  light: "/icons/sun.svg",
  dark: "/icons/moon.svg",
  system: "/icons/sun-moon.svg",
};

async function updateFavicon(appliedMode) {
  const faviconLink = document.querySelector('link[rel="icon"]');

  if (appliedMode === "light") {
    faviconLink.setAttribute("href", "/icons/favicon.svg");
  } else {
    faviconLink.setAttribute("href", "/icons/favicon-dark.svg");
  }
}

function applyMode(mode) {
  let newAppliedMode;
  if (mode === "dark" || (mode === "system" && mediaQueryList.matches)) {
    newAppliedMode = "dark";
  } else {
    newAppliedMode = "light";
  }

  if (appliedMode !== newAppliedMode) {
    appliedMode = newAppliedMode;
    documentElement.className = appliedMode;
    updateFavicon(appliedMode);
  }
}

function onSystemChange() {
  applyMode("system");
}

function updateModeIcon(mode) {
  const modeIcon = modeIcons[mode];
  fetch(modeIcon)
    .then((response) => response.text())
    .then((svg) => {
      document.getElementById("mode-icon-container").innerHTML = svg;
    });
}

function setMode(mode) {
  if (systemChangeHandler) {
    mediaQueryList.removeEventListener("change", systemChangeHandler);
    systemChangeHandler = null;
  }

  if (mode === "system") {
    localStorage.removeItem("theme-mode");
    systemChangeHandler = onSystemChange;
    mediaQueryList.addEventListener("change", systemChangeHandler);
  } else {
    localStorage.setItem("theme-mode", mode);
  }

  updateModeIcon(mode);
  applyMode(mode);
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
