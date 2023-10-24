let contentDiv = document.querySelector('#content');
import './style.css'

const loadPage = () => {
    let restName = document.createElement('div');
    restName.classList.add('rest-name');
    restName.textContent = 'Elysian Eats'
    contentDiv.appendChild(restName);

    loadSection(
        `Welcome to "Elysian Eats," where culinary artistry meets opulent ambiance in a symphony of indulgence. Nestled in the heart of the city's most vibrant district, this high-end restaurant is a gastronomic haven for those seeking an unforgettable dining experience. As you step through the imposing mahogany doors, you're greeted by an enchanting fusion of modern elegance and timeless charm.`,
        'https://images.pexels.com/photos/1109197/pexels-photo-1109197.jpeg',
    );

    loadSection(
        `The interior of "Elysian Eats" exudes sophistication, with its soft, ambient lighting casting a warm glow on plush velvet upholstery and polished marble tables. Crystal chandeliers glisten overhead, casting dancing shadows on the walls adorned with original works of art. The air is filled with a symphony of aromas, a tantalizing preview of the culinary delights awaiting you.`,
        'https://images.pexels.com/photos/7441761/pexels-photo-7441761.jpeg',
    );
    loadSection(
        `Our world-renowned chefs, artisans of flavor, have curated a menu that reflects their passion for culinary excellence. Each dish is a masterpiece, a harmonious blend of exquisite ingredients sourced from around the globe, artfully plated to tantalize the senses. Whether you crave succulent seafood, tender cuts of meat, or inspired vegetarian creations, "Elysian Eats" offers a feast for every palate.`,
        'https://images.pexels.com/photos/3338497/pexels-photo-3338497.jpeg?auto=compress&cs=tinysrgb&w=1600',
    );
}

const loadSection = (text, imgURL) => {
    let sectionDiv = document.createElement('div');
    sectionDiv.classList.add('section')
    sectionDiv.style.backgroundImage = `URL(${imgURL})`;
    let textDiv = document.createElement('div');
    textDiv.classList.add('text');
    textDiv.textContent = text
    sectionDiv.appendChild(textDiv);

    contentDiv.appendChild(sectionDiv);
}

export {loadPage}