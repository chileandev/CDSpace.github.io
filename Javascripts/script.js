// Language Button Functionality
const langBtn = document.getElementById('lang-btn');
let currentLang = 'es';

const languages = {
  es: {
    welcome: "Bienvenido a CDPage",
    description: "¡Tu plataforma para comunidad, proyectos y más!",
    statsTitle: "Estadísticas del sitio web",
    users: "Usuarios",
    projects: "Proyectos",
    comments: "Comentarios",
    support: "Soporte"
  },
  en: {
    welcome: "Welcome to CDPage",
    description: "Your go-to platform for community, projects, and more!",
    statsTitle: "Website Statistics",
    users: "Users",
    projects: "Projects",
    comments: "Comments",
    support: "Support"
  },
  br: {
    welcome: "Bem-vindo ao CDPage",
    description: "Sua plataforma para comunidade, projetos e mais!",
    statsTitle: "Estatísticas do site",
    users: "Usuários",
    projects: "Projetos",
    comments: "Comentários",
    support: "Apoio"
  }
};

// Switch Language
langBtn.addEventListener('click', () => {
  currentLang = currentLang === 'es' ? 'en' : currentLang === 'en' ? 'br' : 'es';
  updateLanguage();
});

function updateLanguage() {
  const lang = languages[currentLang];
  document.querySelector('.info h1').textContent = lang.welcome;
  document.querySelector('.info p').textContent = lang.description;
  document.querySelector('.stats h2').textContent = lang.statsTitle;
  document.querySelector('#support-btn').textContent = lang.support;

  const stats = document.querySelectorAll('.stats li span');
  stats[0].previousSibling.textContent = lang.users + ": ";
  stats[1].previousSibling.textContent = lang.projects + ": ";
  stats[2].previousSibling.textContent = lang.comments + ": ";
}

updateLanguage();
