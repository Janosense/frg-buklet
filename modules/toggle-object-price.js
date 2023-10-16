const toggleObjectPrice = () => {
    const objectPrice = document.querySelector('.object__price');
    if (objectPrice) {
        console.log('click');
        objectPrice.addEventListener('click', () => {
            console.log('click');
            objectPrice.classList.toggle('object__price--active')
        });
    }
}

export default toggleObjectPrice;
