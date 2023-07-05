const container = document.querySelector('#content');
import icon from './pasta-mushroom-food-dinner-italian-wallpaper.jpg';

function loadTitle () {
    const title = document.createElement('div');
    title.classList.add('page-title');
    title.textContent = 'Allegro! Fine Pasta';
    container.appendChild(title);
}

function loadNav () {
    const navBar = document.createElement('div');
    navBar.classList.add('nav');
    navBar.textContent = 'home | menu | about';
    container.appendChild(navBar);
}

function loadPageBody () {
    const pageBody = document.createElement('article');
    pageBody.textContent = 'lorem ipsum etc. etc.';
    container.appendChild(pageBody);
}

function loadPage () {
    loadTitle();
    loadNav();
    loadPageBody();
}

export {
    loadPage,
};

