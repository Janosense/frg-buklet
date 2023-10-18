const toggleLanguageSwitcher = () => {
    const languageSwitcher = document.querySelector('.language-switcher');
    if (languageSwitcher) {
        languageSwitcher.addEventListener('click', () => {
            languageSwitcher.classList.toggle('language-switcher--active')
        });
    }
}

export default toggleLanguageSwitcher;
