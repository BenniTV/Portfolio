const projects = [
    { name: "Vokabeltrainer (SwiftUI)", link: "#" },
    { name: "HamburgRP Website", link: "hamburgrp.rf.gd" },
    { name: "Feuerwehr-Info App", link: "#" }
];

const projectList = document.getElementById("project-list");

projects.forEach(project => {
    let div = document.createElement("div");
    div.className = "project";
    div.innerHTML = `<h3>${project.name}</h3><a href="${project.link}" target="_blank">Mehr erfahren</a>`;
    projectList.appendChild(div);
});
