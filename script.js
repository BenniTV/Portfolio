// Projekte-Daten
const projects = [
    { 
        name: "Hamburg RP(not added)", 
        url: "#",
        description: "Ein spannendes Projekt in Entwicklung",
        tags: ["Gaming", "Roleplay"]
    },
];

// DOM-Elemente
const projectContainer = document.getElementById("project-list");
const toggleButton = document.getElementById("theme-toggle");
const body = document.body;

// Projekte rendern
function renderProjects() {
    projectContainer.innerHTML = projects.map(proj => `
        <div class="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 transform hover:scale-105 transition-all">
            <h3 class="text-xl font-bold text-gray-800 dark:text-white mb-3">${proj.name}</h3>
            <p class="text-gray-600 dark:text-gray-300 mb-4">${proj.description}</p>
            <div class="flex flex-wrap gap-2 mb-4">
                ${proj.tags.map(tag => `
                    <span class="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">${tag}</span>
                `).join('')}
            </div>
            <a href="${proj.url}" 
               class="inline-block bg-primary text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition-colors"
               target="_blank">
                Jetzt Besuchen
            </a>
        </div>
    `).join('');
}

// Theme Management
function initializeTheme() {
    const isDark = localStorage.getItem("theme") === "dark";
    body.classList.toggle("dark", isDark);
    updateThemeButton(isDark);
}

function updateThemeButton(isDark) {
    toggleButton.innerHTML = isDark ? "🌞 Light Mode" : "🌙 Dark Mode";
}

function toggleTheme() {
    const isDark = body.classList.toggle("dark");
    localStorage.setItem("theme", isDark ? "dark" : "light");
    updateThemeButton(isDark);
}

// Event Listeners
toggleButton.addEventListener("click", toggleTheme);

// Initialisierung
initializeTheme();
renderProjects();

