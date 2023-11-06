import {addClass} from "glightbox/src/js/utils/helpers.js";

const toggleLanguages = () => {
    const languagesSwitcher = document.querySelector('.header__language-switcher');
    if (languagesSwitcher) {
        const currentLanguage = languagesSwitcher.querySelector('.switcher__current');
        languagesSwitcher.addEventListener('click', (evt) => {
            if (evt.target.href) {
                const lang = evt.target.href.substring(evt.target.href.indexOf('#') + 1);
                currentLanguage.textContent = lang.toUpperCase();
                languagesSwitcher.querySelector('.switcher__item--current').classList.remove('switcher__item--current');
                evt.target.parentElement.classList.add('switcher__item--current');
                languagesSwitcher.classList.remove('switcher--active');
            }
        });
    }
}

export default toggleLanguages;
