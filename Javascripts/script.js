// Auto-select language based on browser settings
const langBtn = document.getElementById('lang-btn');
const dropdownBtns = document.querySelectorAll('.dropdown-content button');
let currentLang = navigator.language.slice(0, 2) || 'en';

// Update the website's text based on selected language
const languages = {
  es: {
    welcome: "Bienvenido a CDSpace",
    description: "Tu centro para comunidad, creatividad e innovación.",
    stats: "Estadísticas del sitio web",
    highlights: "Proyectos destacados",
    features: "¿Por qué elegir CDSpace?"
  },
  en: {
    welcome: "Welcome to CDSpace",
    description: "Your hub for community, creativity, and innovation.",
    stats: "Website Statistics",
    highlights: "Featured Projects",
    features: "Why Choose CDSpace?"
  },
  br: {
    welcome: "Bem-vindo ao CDSpace",
    description: "Seu centro para comunidade, criatividade e inovação.",
    stats: "Estatísticas do site",
    highlights: "Projetos em destaque",
    features: "Por que escolher o CDSpace?"
  }
};

function updateLanguage(lang) {
  const texts = languages[lang];
  document.querySelector('.intro h1').textContent = texts.welcome;
  document.querySelector('.intro p').textContent = texts.description;
  document.querySelector('.stats h2').textContent = texts.stats;
  document.querySelector('.highlights h2').textContent = texts.highlights;
  document.querySelector('.features h2').textContent = texts.features;
}

dropdownBtns.forEach(btn => 
  btn.addEventListener('click', e => {
    currentLang = e.target.dataset.lang;
    updateLanguage(currentLang);
  })
);

updateLanguage(currentLang);
