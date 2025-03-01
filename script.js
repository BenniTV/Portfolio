// Projekte-Daten
const projects = [
    { 
        name: "Hamburg RP(not added)", 
        url: "#",
        description: "Ein spannendes Projekt in Entwicklung",
        tags: ["Gaming", "Roleplay"],
        status: "In Entwicklung"
    },
];

// DOM-Elemente
const projectContainer = document.getElementById("project-list");
const toggleButton = document.getElementById("theme-toggle");
const body = document.body;

// Projekte rendern
function renderProjects() {
    projectContainer.innerHTML = projects.map(proj => `
        <div class="group bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-2xl p-6 
                    transform hover:-translate-y-2 transition-all duration-300">
            <div class="relative">
                <h3 class="text-2xl font-bold text-gray-800 dark:text-white mb-3">
                    ${proj.name}
                </h3>
                ${proj.status ? `
                    <span class="absolute top-0 right-0 px-3 py-1 text-sm bg-primary/10 text-primary 
                                dark:bg-primary/20 dark:text-primary-300 rounded-full">
                        ${proj.status}
                    </span>
                ` : ''}
            </div>
            <p class="text-gray-600 dark:text-gray-300 mb-4 line-clamp-3">
                ${proj.description}
            </p>
            <div class="flex flex-wrap gap-2 mb-6">
                ${proj.tags.map(tag => `
                    <span class="px-3 py-1 text-sm bg-gradient-to-r from-primary/10 to-secondary/10 
                                text-primary dark:text-secondary rounded-full">
                        ${tag}
                    </span>
                `).join('')}
            </div>
            <a href="${proj.url}" 
               class="inline-block w-full text-center bg-gradient-to-r from-primary to-secondary 
                      text-white px-6 py-3 rounded-lg transform transition-all duration-200 
                      hover:shadow-lg hover:scale-[1.02] font-medium"
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

