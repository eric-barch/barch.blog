function setThemeMode(mode) {
    localStorage.setItem("mode", mode);

    const svgFile = mode === "dark" ? "/icons/sun.svg" : "/icons/moon.svg";
    const iconContainerElement = document.getElementById("mode-icon-container");
    fetch(svgFile)
        .then(response => response.text())
        .then(svg => {
            iconContainerElement.innerHTML = svg;
        });

    const htmlElement = document.querySelector("html");
    if (mode === "dark") {
        htmlElement.classList.remove("light");
        htmlElement.classList.add("dark");
    } else if (mode === "light") {
        htmlElement.classList.remove("dark");
        htmlElement.classList.add("light");
    }
}

function getThemeMode() {
    let mode = localStorage.getItem("mode");
    if(!mode) {
        if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
            mode = "dark";
        } else {
            mode = "light";
        }
    }
    return mode;
}

function toggleThemeMode() {
    let currentMode = getThemeMode();
    let newMode;

    if (currentMode === "dark") {
        newMode = "light";
    } else if (currentMode === "light") {
        newMode = "dark";
    }

    setThemeMode(newMode);
}

setThemeMode(getThemeMode());
