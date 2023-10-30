const getCookie = (name) => {
    let matches = document.cookie.match(new RegExp(
        "(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"
    ));

    return matches ? decodeURIComponent(matches[1]) : undefined;
}

const setCookie = (name, value, options = {}) => {
    options = {
        path: '/',
        ...options
    };

    if (options.expires instanceof Date) {
        options.expires = options.expires.toUTCString();
    }

    let updatedCookie = encodeURIComponent(name) + "=" + encodeURIComponent(value);

    for (let optionKey in options) {
        updatedCookie += "; " + optionKey;
        let optionValue = options[optionKey];
        if (optionValue !== true) {
            updatedCookie += "=" + optionValue;
        }
    }

    document.cookie = updatedCookie;
}

const initCurrencySwitcher = () => {
    const switcher = document.querySelector('.currency-switcher');
    if (switcher) {
        const prices = document.querySelectorAll('.price');
        const switcherItems = switcher.querySelectorAll('.switcher__item');
        const currentItem = switcher.querySelector('.switcher__current');
        const priceDropdownItems = document.querySelectorAll('.price-dropdown__item');
        const currencyTitles = {
            usd: '$',
            eur: 'Є',
            uah: 'грн',
        }
        const currentCurrency = getCookie('frg-current-currency');

        if (currentCurrency && currentCurrency !== 'uah') {
            switcherItems.forEach((item) => {
                item.classList.remove('switcher__item--current');
            });

            prices.forEach((price) => {
                price.textContent = price.getAttribute(`data-price-${currentCurrency}`) + ` ${currencyTitles[currentCurrency]}`;
            });

            switcher.querySelector(`[data-currency="${currentCurrency}"]`).parentElement.classList.add('switcher__item--current');
            currentItem.textContent = switcher.querySelector(`[data-currency="${currentCurrency}"]`).textContent;

            if (priceDropdownItems.length) {
                priceDropdownItems.forEach((item) => {
                    item.classList.remove('price-dropdown__item--current');
                    if (item.classList.contains(`price-dropdown__item--${currentCurrency}`)) {
                        item.classList.add('price-dropdown__item--current');
                    }
                });
            }
        }

        switcher.addEventListener('click', (evt) => {
            if (evt.target.dataset.currency) {
                switcherItems.forEach((item) => {
                    item.classList.remove('switcher__item--current');
                });

                prices.forEach((price) => {
                    price.textContent = price.getAttribute(`data-price-${evt.target.dataset.currency}`) + ` ${currencyTitles[evt.target.dataset.currency]}`;
                });

                evt.target.parentElement.classList.add('switcher__item--current');
                currentItem.textContent = evt.target.textContent;

                setCookie('frg-current-currency', evt.target.dataset.currency, {
                    'max-age': 864000,
                });

                switcher.classList.remove('switcher--active');

                if (priceDropdownItems.length) {
                    priceDropdownItems.forEach((item) => {
                        item.classList.remove('price-dropdown__item--current');
                        if (item.classList.contains(`price-dropdown__item--${evt.target.dataset.currency}`)) {
                            item.classList.add('price-dropdown__item--current');
                        }
                    });
                }
            }
        })
    }
}

export default initCurrencySwitcher;
