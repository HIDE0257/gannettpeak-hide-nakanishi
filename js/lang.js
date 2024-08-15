const langSec = document.querySelector('.lang-menu');
const buttons = document.querySelectorAll('.lang-link');

// Function to change the language
function changeLanguage(lang) {
    langSec.querySelector('.active').classList.remove('active');
    document.querySelector(`.lang-link[data-lang="${lang}"]`).classList.add('active');
    translatePage(lang);
    // Save the selected language to localStorage
    localStorage.setItem('selectedLanguage', lang);
}

// Add event listeners to language buttons
buttons.forEach(button => {
    button.addEventListener('click', () => {
        const lang = button.getAttribute('data-lang');
        changeLanguage(lang);
    });
});

// Function to translate the page
function translatePage(lang) {
    const translationData = translations[lang];
    Object.keys(translationData).forEach(section => {
        const sectionData = translationData[section];
        Object.keys(sectionData).forEach(id => {
            const element = document.getElementById(id);
            if (element) {
                element.textContent = sectionData[id];
            }
        });
    });
}

// Load the saved language or set default language
document.addEventListener("DOMContentLoaded", () => {
    const savedLang = localStorage.getItem('selectedLanguage') || 'en';
    changeLanguage(savedLang);
});
