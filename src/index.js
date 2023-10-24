import { loadHome } from './homePage';
import { loadMenu } from './menuPage';

let contentDiv = document.querySelector('#content');
let currentPage = 'home'

const loadTabs = () => {

    let homeTab = document.createElement('div');
    homeTab.classList.add('home-tab');
    homeTab.textContent = 'Elysian Eats'
    homeTab.addEventListener('click', () => {
        if (currentPage == 'home') return;
        load('home');
    });

    let menuTab = document.createElement('div');
    menuTab.classList.add('menu-tab');
    menuTab.textContent = 'Menu';
    menuTab.addEventListener('click', () => {
        if(currentPage == 'menu') return;
        load('menu');
    });

    let contactTab = document.createElement('div');
    contactTab.classList.add('contact-tab')
    contactTab.textContent = 'Contact';
    contactTab.addEventListener('click', () => {
        if(currentPage == 'contact') return;
        load('contact');
    })
    
    let tabMenu = document.createElement('div');
    tabMenu.classList.add('tabs');
    tabMenu.appendChild(homeTab)
    tabMenu.appendChild(menuTab)
    tabMenu.appendChild(contactTab)
    
    contentDiv.appendChild(tabMenu);
}

const load = (page) => {
    currentPage = page
    let newContent = document.createElement('div');
    newContent.id = 'content'
    contentDiv.replaceWith(newContent);
    contentDiv = document.querySelector('#content');
    loadTabs()
    switch (page) {
        case 'home':
            loadHome();
            break;
        case 'menu':
            loadMenu();
            break;
        case 'contact':
            //loadContact
            break;
    }
}; load('menu');

