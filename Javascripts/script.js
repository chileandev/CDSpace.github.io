const langButtons = document.querySelectorAll('.dropdown-content button');
const langElements = document.querySelectorAll('[data-lang-text]');

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

function setLanguage(lang) {
  langElements.forEach(el => {
    const translations = el.getAttribute('data-lang-text');
    const text = translations.split('|').find(t => t.startsWith(`${lang}:`)) || translations.split('|')[0];
    el.textContent = text.split(':')[1];
  });
}
