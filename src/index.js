import { loadHomePageContent, loadPage } from './page-load';
import { showMenuPage } from './menu-page.js';
import './style.css';

loadPage();

function clearPage () {
    const pageContent = document.querySelector('article');

    while (pageContent.firstChild) {
        pageContent.removeChild(pageContent.firstChild);
    }
}

const homeBtn = document.querySelector('.home-button');
homeBtn.addEventListener('click', () => {
    clearPage();
    loadHomePageContent();
})

const menuBtn = document.querySelector('.menu-button');
menuBtn.addEventListener('click', () => {
    clearPage();
    showMenuPage();
});

