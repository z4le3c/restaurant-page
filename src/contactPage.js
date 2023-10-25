import './style.css'

let contentDiv

const loadContact = () => {
    contentDiv = document.querySelector('#content');

    let contactDiv = document.createElement('div');
    let itemsWrapper = document.createElement('div');
    let titleDiv = document.createElement('div');
    let addressDiv = document.createElement('div');
    let phoneDiv = document.createElement('div');
    let emailDiv = document.createElement('div');
    
    contactDiv.classList.add('contact-block');
    itemsWrapper.classList.add('items-wrapper');
    titleDiv.classList.add('contact-title');
    addressDiv.classList.add('item');
    phoneDiv.classList.add('item');
    emailDiv.classList.add('item');

    titleDiv.textContent = 'Contact';
    addressDiv.textContent = '123 Rosewood Lane, Sapphire Springs, CA 90210'
    phoneDiv.textContent = '54-2332-3242'
    emailDiv.textContent = 'randomuser123@example.com'


    contactDiv.appendChild(titleDiv);
    itemsWrapper.appendChild(addressDiv);
    itemsWrapper.appendChild(phoneDiv);
    itemsWrapper.appendChild(emailDiv);
    contactDiv.appendChild(itemsWrapper);
    contentDiv.appendChild(contactDiv);
}

export {loadContact}