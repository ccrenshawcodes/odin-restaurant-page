const container = document.querySelector('#content');

function loadTitle () {
    const title = document.createElement('div');
    title.classList.add('page-title');

    const titleHeader = document.createElement('h1');
    titleHeader.textContent = 'Allegro! Fine Pasta';

    title.appendChild(titleHeader);

    container.appendChild(title);
}

function loadNav () {
    const navBar = document.createElement('div');
    navBar.classList.add('nav');

    const homeBtn = document.createElement('button');
    homeBtn.classList.add('home-button');
    homeBtn.textContent = 'home';
    navBar.appendChild(homeBtn);

    const menuBtn = document.createElement('button');
    menuBtn.classList.add('menu-button');
    menuBtn.textContent = 'menu';
    navBar.appendChild(menuBtn);

    const aboutBtn = document.createElement('button');
    aboutBtn.classList.add('about-button');
    aboutBtn.textContent = 'about';
    navBar.appendChild(aboutBtn);

    container.appendChild(navBar);
}

function loadPageBody () {
    const pageBody = document.createElement('article');
    container.appendChild(pageBody);
}

function loadHomePageContent () {
    const pageBody = document.querySelector('article');
    const homeContent = document.createElement('div');
    homeContent.classList.add('home-content');
    homeContent.textContent = 'Do you want pasta? Who are you kidding - we both know you do';
    pageBody.appendChild(homeContent);
}

function loadPage () {
    loadTitle();
    loadNav();
    loadPageBody();
    loadHomePageContent();
}

export {
    loadPage,
    loadHomePageContent,
};

