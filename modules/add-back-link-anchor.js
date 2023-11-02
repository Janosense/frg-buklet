const addBackLinkAnchor = () => {
    const backLink = document.querySelector('.main__link-back');
    if (backLink && window.location.hash) {
        backLink.href = backLink.href + window.location.hash;
    }
}

export default addBackLinkAnchor;
