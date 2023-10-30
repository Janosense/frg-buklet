const toggleSwitcher = () => {
    const switchers = document.querySelectorAll('.switcher');
    if (switchers.length) {
        switchers.forEach((switcher) => {
            switcher.addEventListener('click', (evt) => {
                evt.stopPropagation();

                switchers.forEach((switcher, index) => {
                    switcher.classList.remove('switcher--active');
                });

                switcher.classList.add('switcher--active');
            });
        });

        document.addEventListener('click', () => {
            switchers.forEach((switcher, index) => {
                switcher.classList.remove('switcher--active');
            });
        })
    }
}

export default toggleSwitcher;
