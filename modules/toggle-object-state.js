const toggleObjectState = () => {
    const likeButtons = document.querySelectorAll('.objects__action:nth-child(1)');
    const dislikeButtons = document.querySelectorAll('.objects__action:nth-child(2)');

    if (likeButtons.length && dislikeButtons.length) {
        likeButtons.forEach((likeButton) => {
            likeButton.addEventListener('click', (evt) => {
                evt.currentTarget.parentElement.parentElement.parentElement.classList.remove('objects__item--dislike');
                evt.currentTarget.parentElement.parentElement.parentElement.classList.add('objects__item--like');
            });
        });

        dislikeButtons.forEach((dislikeButton) => {
            dislikeButton.addEventListener('click', (evt) => {
                console.log(evt.currentTarget.parentElement.parentElement.parentElement);
                evt.currentTarget.parentElement.parentElement.parentElement.classList.remove('objects__item--like');
                evt.currentTarget.parentElement.parentElement.parentElement.classList.add('objects__item--dislike');
            });
        });
    }
}

export default toggleObjectState;
