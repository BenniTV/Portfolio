// Beispiel: Falls du Projekte als Array speicherst
const projects = [
    { name: "Hamburg RP", url: "http://hamburgrp.rf.gd" },
];

const projectContainer = document.getElementById("projects");

projects.forEach(proj => {
    const projectElement = document.createElement("div");
    projectElement.classList.add("project");

    projectElement.innerHTML = `
        <h3>${proj.name}</h3>
        <a href="${proj.url}" class="visit-button" target="_blank">Jetzt Besuchen</a>
    `;

    projectContainer.appendChild(projectElement);
});


const toggleButton = document.getElementById("theme-toggle");
const body = document.body;

// Theme aus LocalStorage laden
if (localStorage.getItem("theme") === "light") {
    body.classList.add("light-mode");
    toggleButton.textContent = "🌞 Light Mode";
}

// Toggle-Funktion
toggleButton.addEventListener("click", () => {
    body.classList.toggle("light-mode");
    
    if (body.classList.contains("light-mode")) {
        localStorage.setItem("theme", "light");
        toggleButton.textContent = "🌞 Light Mode";
    } else {
        localStorage.setItem("theme", "dark");
        toggleButton.textContent = "🌙 Dark Mode";
    }
});

