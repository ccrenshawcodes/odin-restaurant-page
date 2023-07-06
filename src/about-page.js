function showAboutPage () {
    const page = document.querySelector('article');

    const aboutPageContent = document.createElement('div');
    aboutPageContent.classList.add('about-page');

    const contactInfo = document.createElement('span');
    contactInfo.textContent = 'Click below to contact us!';

    const contactLink = document.createElement('a');
    contactLink.setAttribute('href', 'https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley')
    contactLink.textContent = 'Click Here';

    aboutPageContent.appendChild(contactInfo);
    aboutPageContent.appendChild(contactLink);

    page.appendChild(aboutPageContent);
}

export {
    showAboutPage,
};