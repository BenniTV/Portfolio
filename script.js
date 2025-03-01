// Projekte Daten
const projects = [
    {
        id: 1,
        name: "Hamburg RP",
        description: "Ein spannendes Roleplay-Projekt, das sich derzeit in der Entwicklung befindet.",
        status: "In Entwicklung",
        tags: ["Gaming", "Roleplay"],
        url: "#"
    },
    {
        id: 2,
        name: "Havensburg Roleplay",
        description: "Ein spannendes Roleplay-Projekt, das sich derzeit in der Entwicklung befindet.",
        status: "In Entwicklung",
        tags: ["Gaming", "Roleplay", "German"],
        url: "#"
    }
];

// DOM Elemente
document.addEventListener('DOMContentLoaded', () => {
    initializeProjects();
    initializeRefreshButton();
    initializeThemeToggle();
    addScrollAnimations();
});

// Projekte initialisieren
function initializeProjects() {
    const projectsGrid = document.getElementById('projects-grid');
    if (!projectsGrid) return;

    // Projekte rendern
    projects.forEach((project, index) => {
        const projectCard = createProjectCard(project);
        projectCard.style.opacity = "0";
        projectCard.style.transform = "translateY(20px)";
        projectCard.style.transition = "all 0.6s cubic-bezier(0.34, 1.56, 0.64, 1)";
        projectCard.style.transitionDelay = `${0.2 + index * 0.15}s`;
        projectsGrid.appendChild(projectCard);
        
        // Force reflow
        projectCard.offsetHeight;
        
        projectCard.style.opacity = "1";
        projectCard.style.transform = "translateY(0)";
    });
}

// Scroll Animationen
function addScrollAnimations() {
    const animateOnScroll = (entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = "1";
                entry.target.style.transform = "translateY(0)";
                observer.unobserve(entry.target);
            }
        });
    };

    const observer = new IntersectionObserver(animateOnScroll, {
        threshold: 0.1,
        rootMargin: "0px"
    });

    document.querySelectorAll('.animate-on-scroll').forEach(el => {
        el.style.opacity = "0";
        el.style.transform = "translateY(20px)";
        el.style.transition = "all 0.6s cubic-bezier(0.34, 1.56, 0.64, 1)";
        observer.observe(el);
    });
}

// Refresh Button Funktionalität
function initializeRefreshButton() {
    const refreshBtn = document.getElementById('refresh-btn');
    if (!refreshBtn) return;

    refreshBtn.addEventListener('click', () => {
        // Button Animation
        refreshBtn.classList.add('refresh-active');
        
        // Seiten-Übergang
        document.body.classList.add('page-transition');

        // Warte kurz und lade dann die Seite neu
        setTimeout(() => {
            window.location.reload();
        }, 500);
    });
}

// Theme Toggle
function initializeThemeToggle() {
    const themeToggle = document.getElementById('theme-toggle');
    const body = document.body;
    
    // Prüfe gespeichertes Theme
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'light') {
        body.classList.add('light');
    }

    themeToggle.addEventListener('click', () => {
        // Toggle Animation
        themeToggle.classList.add('animate-scale');
        setTimeout(() => {
            themeToggle.classList.remove('animate-scale');
        }, 300);

        // Theme Toggle
        body.classList.toggle('light');
        
        // Theme speichern
        localStorage.setItem('theme', body.classList.contains('light') ? 'light' : 'dark');
    });
}

// Projekt-Karte erstellen
function createProjectCard(project) {
    const card = document.createElement('div');
    const isLightMode = document.body.classList.contains('light');
    
    card.className = `group bg-spaceGray rounded-lg ${
        isLightMode 
            ? 'shadow-[0_0_15px_rgba(0,255,128,0.15)]' 
            : 'shadow-[0_0_15px_rgba(0,242,254,0.15)]'
    } overflow-hidden border border-neonBlue/20 hover-neon`;
    
    const buttonGradient = isLightMode 
        ? 'bg-gradient-to-r from-[#00b347] to-[#00ff80]'
        : 'bg-gradient-to-r from-neonBlue to-deepBlue';
    
    const badgeClasses = isLightMode
        ? 'bg-neonGreen/10 border-neonGreen/30'
        : 'bg-neonBlue/10 border-neonBlue/30';
    
    const tagClasses = isLightMode
        ? 'bg-neonGreen/10 border-neonGreen/30 text-deepGreen'
        : 'bg-neonBlue/10 border-neonBlue/30 text-neonBlue';
    
    card.innerHTML = `
        <div class="relative">
            ${project.status ? `
                <div class="absolute top-4 right-4 px-3 py-1 backdrop-blur-sm rounded-full border ${badgeClasses} badge-pulse">
                    <span class="text-xs ${isLightMode ? 'text-deepGreen' : 'text-neonBlue'}">${project.status}</span>
                </div>
            ` : ''}
        </div>
        
        <div class="p-6">
            <h3 class="text-xl font-semibold mb-2 ${isLightMode ? 'text-deepGreen' : 'text-neonBlue'}">${project.name}</h3>
            <p class="text-gray-300 text-sm mb-4">
                ${project.description}
            </p>
            
            <div class="flex flex-wrap gap-2 mb-6">
                ${project.tags.map(tag => `
                    <span class="px-3 py-1 text-xs rounded-full border ${tagClasses}">
                        ${tag}
                    </span>
                `).join('')}
            </div>
            
            <a href="${project.url}" 
               class="inline-block w-full text-center ${buttonGradient} text-white px-6 py-3 rounded-lg transform transition-all duration-200 hover:scale-[1.02] hover:shadow-[0_0_15px_rgba(0,255,128,0.3)]">
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