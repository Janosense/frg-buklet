const toggleFilterList = () => {
    const filterToggle = document.querySelector('.filter__current');
    if (filterToggle) {
        filterToggle.addEventListener('click', (evt) => {
            filterToggle.parentElement.classList.toggle('filter--active');
        });
    }
}

export default toggleFilterList;
