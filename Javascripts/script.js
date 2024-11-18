const langButtons = document.querySelectorAll('.dropdown-content button');
const langElements = document.querySelectorAll('[data-lang-text]');
const animatedSections = document.querySelectorAll('.animate');

// Detect user's language automatically
const userLang = navigator.language.slice(0, 2) || 'es';
setLanguage(userLang);

// Change website language on button click
langButtons.forEach(button => {
  button.addEventListener('click', () => {
    const lang = button.getAttribute('data-lang');
    setLanguage(lang);
  });
});

// Language changer
function setLanguage(lang) {
  langElements.forEach(el => {
    const translations = el.getAttribute('data-lang-text');
    const text = translations.split('|').find(t => t.startsWith(`${lang}:`)) || translations.split('|')[0];
    el.textContent = text.split(':')[1];
  });
}

// Scroll animations
function handleScrollAnimations() {
  animatedSections.forEach(section => {
    const rect = section.getBoundingClientRect();
    if (rect.top < window.innerHeight * 0.9) {
      section.classList.add('visible');
    }
  });
}

window.addEventListener('scroll', handleScrollAnimations);
handleScrollAnimations(); // Initialize on page load
