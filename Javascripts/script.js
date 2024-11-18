// Language Configuration
const langBtn = document.getElementById('lang-btn');
const dropdownBtns = document.querySelectorAll('.dropdown-content button');
let currentLang = navigator.language.slice(0, 2) || 'en';

const languages = {
  es: {
    welcome: "Bienvenido a CDPage",
    description: "¡Tu plataforma para comunidad, proyectos y más!",
    statsTitle: "Estadísticas del sitio web",
    users: "Usuarios",
    projects: "Proyectos",
    comments: "Comentarios",
    whyJoin: "¿Por qué unirse?",
    reasons: [
      "Únete a una comunidad vibrante para compartir ideas y colaborar.",
      "Descubre herramientas y recursos adaptados a tus intereses."
    ]
  },
  en: {
    welcome: "Welcome to CDPage",
    description: "Your go-to platform for community, projects, and more!",
    statsTitle: "Website Statistics",
    users: "Users",
    projects: "Projects",
    comments: "Comments",
    whyJoin: "Why Join Us?",
    reasons: [
      "Join a thriving community to share ideas and collaborate.",
      "Discover tools and resources tailored to your interests."
    ]
  },
  br: {
    welcome: "Bem-vindo ao CDPage",
    description: "Sua plataforma para comunidade, projetos e mais!",
    statsTitle: "Estatísticas do site",
    users: "Usuários",
    projects: "Projetos",
    comments: "Comentários",
    whyJoin: "Por que se juntar?",
    reasons: [
      "Junte-se a uma comunidade vibrante para compartilhar ideias e colaborar.",
      "Descubra ferramentas e recursos adaptados aos seus interesses."
    ]
  }
};

// Update Content Based on Language
function updateLanguage(lang) {
  const langData = languages[lang];
  document.querySelector('.info h1').textContent = langData.welcome;
  document.querySelector('.info p').textContent = langData.description;
  document.querySelector('.stats h2').textContent = langData.statsTitle;
  document.querySelectorAll('.stats li span').forEach((span, index) => {
    const key = ['users', 'projects', 'comments'][index];
    span.previousSibling.textContent = langData[key] + ": ";
  });
  const reasons = document.querySelector('.additional-info');
  reasons.querySelector('h2').textContent = langData.whyJoin;
  reasons.querySelectorAll('p').forEach((p, index) => {
    p.textContent = langData.reasons[index];
  });
}

// Event Listeners for Language Selection
dropdownBtns.forEach((btn) =>
  btn.addEventListener('click', (e) => {
    currentLang = e.target.getAttribute('data-lang');
    updateLanguage(currentLang);
  })
);

// Initialize Language
updateLanguage(currentLang);
