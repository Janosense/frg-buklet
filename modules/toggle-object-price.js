const toggleObjectPrice = () => {
    const objectPrice = document.querySelector('.object__price-holder');
    if (objectPrice) {
        objectPrice.addEventListener('click', () => {
            objectPrice.classList.toggle('object__price--active')
        });
    }
}

export default toggleObjectPrice;
