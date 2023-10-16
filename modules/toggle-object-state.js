const toggleObjectState = () => {
    const likeButtons = document.querySelectorAll('.objects__action:nth-child(1)');
    const dislikeButtons = document.querySelectorAll('.objects__action:nth-child(2)');

    if (likeButtons.length && dislikeButtons.length) {
        likeButtons.forEach((likeButton) => {
            likeButton.addEventListener('click', (evt) => {
                likeButton.parentElement.parentElement.classList.remove('objects__item--dislike');
                likeButton.parentElement.parentElement.classList.add('objects__item--like');
            });
        });

        dislikeButtons.forEach((dislikeButton) => {
            dislikeButton.addEventListener('click', (evt) => {
                dislikeButton.parentElement.parentElement.classList.remove('objects__item--like');
                dislikeButton.parentElement.parentElement.classList.add('objects__item--dislike');
            });
        });
    }
}

export default toggleObjectState;
