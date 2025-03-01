// Projekte Daten
const projects = [
    {
        id: 1,
        name: "Hamburg RP",
        description: "Ein spannendes Roleplay-Projekt, das sich derzeit in der Entwicklung befindet.",
        status: "In Entwicklung",
        tags: ["Gaming", "Roleplay"],
        url: "#",
        image: null // Optional für zukünftige Projektbilder
    }
];

// DOM Elemente
document.addEventListener('DOMContentLoaded', () => {
    initializeProjects();
});

// Projekte initialisieren
function initializeProjects() {
    const projectsContainer = document.querySelector('.grid.grid-cols-1.md\\:grid-cols-2');
    if (!projectsContainer) return;

    // Bestehende Projekte rendern
    projects.forEach(project => {
        const projectCard = createProjectCard(project);
        // Vor der "Neues Projekt" Karte einfügen
        projectsContainer.insertBefore(projectCard, projectsContainer.lastElementChild);
    });

    // Event Listener für "Neues Projekt" Karte
    const newProjectCard = projectsContainer.lastElementChild;
    if (newProjectCard) {
        newProjectCard.addEventListener('click', () => {
            // Hier könnte später ein Modal oder Formular zum Hinzufügen neuer Projekte geöffnet werden
            alert('Diese Funktion wird bald verfügbar sein!');
        });
    }
}

// Projekt-Karte erstellen
function createProjectCard(project) {
    const card = document.createElement('div');
    card.className = 'group bg-spaceGray rounded-lg shadow-[0_0_15px_rgba(0,242,254,0.15)] overflow-hidden border border-neonBlue/20 hover-neon';
    
    card.innerHTML = `
        <div class="relative">
            ${project.status ? `
                <div class="absolute top-4 right-4 px-3 py-1 bg-neonBlue/10 backdrop-blur-sm rounded-full border border-neonBlue/30">
                    <span class="text-neonBlue text-xs">${project.status}</span>
                </div>
            ` : ''}
        </div>
        
        <div class="p-6">
            <h3 class="text-xl font-semibold text-neonBlue mb-2">${project.name}</h3>
            <p class="text-gray-300 text-sm mb-4">
                ${project.description}
            </p>
            
            <div class="flex flex-wrap gap-2 mb-6">
                ${project.tags.map(tag => `
                    <span class="px-3 py-1 bg-neonBlue/10 text-neonBlue text-xs rounded-full border border-neonBlue/30">
                        ${tag}
                    </span>
                `).join('')}
            </div>
            
            <a href="${project.url}" 
               class="inline-block w-full text-center bg-gradient-to-r from-neonBlue to-deepBlue text-white px-6 py-3 rounded-lg transform transition-all duration-200 hover:scale-[1.02] hover:shadow-[0_0_15px_rgba(0,242,254,0.3)]">
                Projekt ansehen
            </a>
        </div>
    `;
    
    return card;
}

// Hilfsfunktionen für Animationen
function animate(element) {
    element.classList.add('animate-fade-in');
} 