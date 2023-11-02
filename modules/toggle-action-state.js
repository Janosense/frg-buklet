const state = {
    like: false,
    dislike: false,
};
const toggleActionState = () => {
    const actions = document.querySelectorAll('.object__action');
    if (actions.length) {
        actions.forEach((action) => {
            action.addEventListener('click', (evt) => {
                action.classList.toggle('object__action--active');

                if (action.classList.contains('object__action--like')) {
                    document.querySelector('.object__action--dislike').classList.remove('object__action--active')
                }

                if (action.classList.contains('object__action--dislike')) {
                    document.querySelector('.object__action--like').classList.remove('object__action--active')
                }
            });
        });
    }
}

export default toggleActionState;
