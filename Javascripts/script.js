const langButtons = document.querySelectorAll('.dropdown-content button');
const langElements = document.querySelectorAll('[data-lang-text]');
const animatedSections = document.querySelectorAll('.animate');

// Detect user's language automatically
const userLang = navigator.language.slice(0, 2) || 'es';
setLanguage(userLang);

// Change website language on button click
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
}

// Animation effect for elements
window.addEventListener('scroll', () => {
  animatedSections.forEach(section => {
    if (section.getBoundingClientRect().top < window.innerHeight) {
      section.classList.add('visible');
    }
  });
});
