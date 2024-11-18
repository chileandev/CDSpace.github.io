const langButtons = document.querySelectorAll('[data-lang]');
const langElements = document.querySelectorAll('[data-lang-text]');
const langDropdown = document.querySelector('.dropdown-content');
const animatedSections = document.querySelectorAll('.animate');

// Set default language
let currentLanguage = 'es';

// Change language based on button click
langButtons.forEach(button => {
  button.addEventListener('click', (e) => {
    const selectedLang = e.target.dataset.lang;
    setLanguage(selectedLang);
  });
});

function setLanguage(language) {
  langElements.forEach(el => {
    const langText = el.dataset.langText.split('|');
    const text = langText.find(t => t.startsWith(`${language}:`));
    if (text) {
      el.textContent = text.split(':')[1];
    }
  });

  // Mark language button as active
  langButtons.forEach(button => {
    button.classList.remove('active');
    if (button.dataset.lang === language) {
      button.classList.add('active');
    }
  });
  currentLanguage = language;
}

// Scroll effect for animations
window.addEventListener('scroll', () => {
  animatedSections.forEach(section => {
    if (section.getBoundingClientRect().top < window.innerHeight) {
      section.classList.add('visible');
    }
  });
});

