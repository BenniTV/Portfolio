const projects = [
    { name: "Vokabeltrainer (SwiftUI)", link: "#" },
    { name: "HamburgRP Website", link: "http://hamburgrp.rf.gd" },
    { name: "Feuerwehr-Info App", link: "#" }
];

const projectList = document.getElementById("project-list");

projects.forEach(project => {
    let div = document.createElement("div");
    div.className = "project";
    div.innerHTML = `<h3>${project.name}</h3><a href="${project.link}" target="_blank">Mehr erfahren</a>`;
    projectList.appendChild(div);
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

