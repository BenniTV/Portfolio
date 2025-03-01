// Translations
const translations = {
    de: {
        greeting: "👋 Hey, ich bin Benjamin",
        activities: "Ich engagiere mich in verschiedenen Bereichen:",
        firstAider: "Schulsanitäter",
        firstAiderTooltip: "Erste Hilfe und medizinische Unterstützung in der Schule",
        youthFirefighter: "Jugendfeuerwehr",
        youthFirefighterTooltip: "Aktives Mitglied der Jugendfeuerwehr",
        schoolMentor: "Schulmentor",
        schoolMentorTooltip: "Unterstützung und Beratung für Mitschüler",
        cyclist: "Begeisterter Radfahrer",
        cyclistTooltip: "Aktiver Radsportler mit Leidenschaft für Bewegung",
        socialMedia: "🎮 Social Media",
        twitchLink: "BenniTV09 auf Twitch",
        projects: "🚀 Meine Projekte",
        status: {
            active: "Aktiv",
            completed: "Abgeschlossen",
            inProgress: "In Arbeit",
            planned: "Geplant"
        }
    },
    en: {
        greeting: "👋 Hey, I'm Benjamin",
        activities: "I'm engaged in various areas:",
        firstAider: "School First Aider",
        firstAiderTooltip: "First aid and medical support at school",
        youthFirefighter: "Youth Fire Brigade",
        youthFirefighterTooltip: "Active member of the youth fire brigade",
        schoolMentor: "School Mentor",
        schoolMentorTooltip: "Support and guidance for fellow students",
        cyclist: "Passionate Cyclist",
        cyclistTooltip: "Active cyclist with a passion for movement",
        socialMedia: "🎮 Social Media",
        twitchLink: "BenniTV09 on Twitch",
        projects: "🚀 My Projects",
        status: {
            active: "Active",
            completed: "Completed",
            inProgress: "In Progress",
            planned: "Planned"
        }
    }
};

// Current language state
let currentLang = localStorage.getItem('language') || 'de';
document.documentElement.lang = currentLang;

// Initialize language toggle
function initializeLanguageToggle() {
    const langToggle = document.getElementById('language-toggle');
    const currentLangSpan = document.getElementById('current-lang');
    
    // Set initial language display
    currentLangSpan.textContent = currentLang.toUpperCase();
    
    langToggle.addEventListener('click', () => {
        currentLang = currentLang === 'de' ? 'en' : 'de';
        localStorage.setItem('language', currentLang);
        document.documentElement.lang = currentLang;
        currentLangSpan.textContent = currentLang.toUpperCase();
        updatePageContent();
    });
}

// Update page content based on selected language
function updatePageContent() {
    // Update greeting
    document.querySelector('h2').textContent = translations[currentLang].greeting;
    
    // Update activities text
    document.querySelector('.text-gray-300.leading-relaxed').textContent = translations[currentLang].activities;
    
    // Update activity cards
    const activities = [
        { selector: 0, text: 'firstAider', tooltip: 'firstAiderTooltip' },
        { selector: 1, text: 'youthFirefighter', tooltip: 'youthFirefighterTooltip' },
        { selector: 2, text: 'schoolMentor', tooltip: 'schoolMentorTooltip' },
        { selector: 3, text: 'cyclist', tooltip: 'cyclistTooltip' }
    ];
    
    const activityCards = document.querySelectorAll('.group.relative.flex');
    activities.forEach((activity, index) => {
        const card = activityCards[index];
        card.querySelector('.text-gray-300').textContent = translations[currentLang][activity.text];
        card.querySelector('.opacity-0').textContent = translations[currentLang][activity.tooltip];
    });
    
    // Update section titles
    const sections = document.querySelectorAll('section h2');
    sections[1].textContent = translations[currentLang].socialMedia;
    sections[2].textContent = translations[currentLang].projects;
    
    // Update Twitch link text
    document.querySelector('a[href*="twitch.tv"] span').textContent = translations[currentLang].twitchLink;
    
    // Update project cards
    updateProjects();
}

// Projekte Daten
const projects = [
    {
        id: 1,
        name: {
            de: "Hamburg RP",
            en: "Hamburg RP"
        },
        description: {
            de: "Ein Roleplay-Projekt basierend auf der Stadt Hamburg",
            en: "A roleplay project based on the city of Hamburg"
        },
        status: "active",
        tags: ["Gaming", "Community"],
        url: "https://example.com/hamburg-rp"
    },
    {
        id: 2,
        name: {
            de: "Portfolio Website",
            en: "Portfolio Website"
        },
        description: {
            de: "Meine persönliche Portfolio-Website mit Projekten und Aktivitäten",
            en: "My personal portfolio website showcasing projects and activities"
        },
        status: "completed",
        tags: ["Web", "Design"],
        url: "https://example.com/portfolio"
    }
];

// DOM Elemente
document.addEventListener('DOMContentLoaded', () => {
    initializeProjects();
    initializeRefreshButton();
    initializeThemeToggle();
    initializeLanguageToggle();
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
    card.className = 'bg-spaceGray rounded-lg p-4 sm:p-6 border border-neonBlue/20 hover-neon transform transition-all duration-300 hover:scale-[1.02]';
    
    const statusColors = {
        active: 'bg-green-500',
        completed: 'bg-blue-500',
        inProgress: 'bg-yellow-500',
        planned: 'bg-purple-500'
    };
    
    const statusText = translations[currentLang].status[project.status];
    
    card.innerHTML = `
        <div class="flex justify-between items-start mb-4">
            <h3 class="text-lg sm:text-xl font-semibold text-neonBlue">
                ${project.name[currentLang]}
            </h3>
            <span class="badge-pulse px-2 py-1 rounded-full text-xs font-semibold ${statusColors[project.status]}">
                ${statusText}
            </span>
        </div>
        <p class="text-gray-300 mb-4 text-sm sm:text-base">
            ${project.description[currentLang]}
        </p>
        <div class="flex flex-wrap gap-2">
            ${project.tags.map(tag => `
                <span class="px-2 py-1 rounded-full text-xs font-semibold bg-neonBlue/10 text-neonBlue border border-neonBlue/20">
                    ${tag}
                </span>
            `).join('')}
        </div>
    `;
    
    if (project.url) {
        card.style.cursor = 'pointer';
        card.addEventListener('click', () => window.open(project.url, '_blank'));
    }
    
    return card;
}

// Hilfsfunktionen für Animationen
function animate(element) {
    element.classList.add('animate-fade-in');
} 