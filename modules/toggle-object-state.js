const toggleObjectState = () => {
    const likeButtons = document.querySelectorAll('.objects__action:nth-child(1)');
    const dislikeButtons = document.querySelectorAll('.objects__action:nth-child(2)');

    if (likeButtons.length && dislikeButtons.length) {
        likeButtons.forEach((likeButton) => {
            likeButton.addEventListener('click', (evt) => {
                const parentElement = evt.currentTarget.parentElement.parentElement.parentElement;
                if (parentElement.classList.contains('objects__item--like')) {
                    parentElement.classList.remove('objects__item--like');
                } else {
                    parentElement.classList.remove('objects__item--dislike');
                    parentElement.classList.add('objects__item--like');
                }
            });
        });

        dislikeButtons.forEach((dislikeButton) => {
            dislikeButton.addEventListener('click', (evt) => {
                const parentElement = evt.currentTarget.parentElement.parentElement.parentElement;
                if (parentElement.classList.contains('objects__item--dislike')) {
                    parentElement.classList.remove('objects__item--dislike');
                } else {
                    parentElement.classList.remove('objects__item--like');
                    parentElement.classList.add('objects__item--dislike');
                }
            });
        });
    }
}

export default toggleObjectState;
