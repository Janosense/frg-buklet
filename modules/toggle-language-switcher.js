const toggleLanguageSwitcher = () => {
    const languageSwitcher = document.querySelector('.language-switcher');
    if (languageSwitcher) {
        console.log('click');
        languageSwitcher.addEventListener('click', () => {
            console.log('click');
            languageSwitcher.classList.toggle('language-switcher--active')
        });
    }
}

export default toggleLanguageSwitcher;
