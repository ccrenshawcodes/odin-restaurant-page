function showMenuPage () {
    const page = document.querySelector('article');

    //  create a div element
    const menuPageContent = document.createElement('div');
    menuPageContent.classList.add('menu-page');

    //  add appropriate content
    const titleLunch = document.createElement('h2');
    titleLunch.textContent = 'lunch menu';
    menuPageContent.appendChild(titleLunch);

    const lunchMenu = document.createElement('ul');
    const lunchMenuItem1 = document.createElement('li');
    const lunchMenuItem2 = document.createElement('li');
    lunchMenuItem1.textContent = 'pasta (15)';
    lunchMenuItem2.textContent = 'pasta (8)';
    lunchMenu.appendChild(lunchMenuItem1);
    lunchMenu.appendChild(lunchMenuItem2);

    menuPageContent.appendChild(lunchMenu);

    const titleDinner = document.createElement('h2');
    titleDinner.textContent = 'dinner menu';
    menuPageContent.appendChild(titleDinner);

    const dinnerMenu = document.createElement('ul');
    const dinnerMenuItem1 = document.createElement('li');
    const dinnerMenuItem2 = document.createElement('li');
    dinnerMenuItem1.textContent = 'pasta (17)';
    dinnerMenuItem2.textContent = 'pasta (23)';
    dinnerMenu.appendChild(dinnerMenuItem1);
    dinnerMenu.appendChild(dinnerMenuItem2);

    menuPageContent.appendChild(dinnerMenu);

    page.appendChild(menuPageContent);
    //  add styles
    //  append to the DOM
}

export {
    showMenuPage,
};