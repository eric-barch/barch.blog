const LOCAL_STORAGE_KEY = "theme-mode";

const DARK = "dark";
const LIGHT = "light";
const SYSTEM = "system";

const MODES = [DARK, LIGHT, SYSTEM];

const PREFERS_DARK_QUERY = window.matchMedia("(prefers-color-scheme: dark)");

let appliedMode;

function updateFavicon(appliedMode) {
  const favicon = document.querySelector('link[rel="icon"]');

  if (appliedMode === DARK) {
    favicon.href = "/icons/favicon-dark.svg";
  } else {
    favicon.href = "/icons/favicon-light.svg";
  }
}

function setAppliedMode(appliedMode) {
  if (appliedMode === DARK) {
    document.documentElement.classList.remove(LIGHT);
    document.documentElement.classList.add(DARK);
  } else {
    document.documentElement.classList.remove(DARK);
    document.documentElement.classList.add(LIGHT);
  }

  updateFavicon(appliedMode);
}

function setSelectedMode(selectedMode) {
  if (selectedMode === "system") {
    localStorage.removeItem(LOCAL_STORAGE_KEY);
    document.documentElement.className = "system";
  } else {
    localStorage.setItem(LOCAL_STORAGE_KEY, selectedMode);
    document.documentElement.className = "";
  }

  const newAppliedMode =
    selectedMode === "system"
      ? PREFERS_DARK_QUERY.matches
        ? "dark"
        : "light"
      : selectedMode;

  appliedMode = newAppliedMode;
  setAppliedMode(newAppliedMode);
}

function getSelectedMode() {
  return localStorage.getItem(LOCAL_STORAGE_KEY) ?? "system";
}

function cycleSelectedMode() {
  const currentMode = getSelectedMode();
  const nextMode = MODES[(MODES.indexOf(currentMode) + 1) % MODES.length];
  setSelectedMode(nextMode);
}

setSelectedMode(getSelectedMode());

PREFERS_DARK_QUERY.addEventListener("change", () => {
  if (getSelectedMode() === SYSTEM) {
    if (PREFERS_DARK_QUERY.matches) {
      setAppliedMode(DARK);
    } else {
      setAppliedMode(LIGHT);
    }
  }
});
