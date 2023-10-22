let contentDiv = document.querySelector('#content');
import './style.css'

const loadPage = () => {
    loadSection(
        `Welcome to "Elysian Eats," where culinary artistry meets opulent ambiance in a symphony of indulgence. Nestled in the heart of the city's most vibrant district, this high-end restaurant is a gastronomic haven for those seeking an unforgettable dining experience. As you step through the imposing mahogany doors, you're greeted by an enchanting fusion of modern elegance and timeless charm.`,
        'https://images.pexels.com/photos/8969237/pexels-photo-8969237.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        true,
    );

    loadSection(
        `The interior of "Elysian Eats" exudes sophistication, with its soft, ambient lighting casting a warm glow on plush velvet upholstery and polished marble tables. Crystal chandeliers glisten overhead, casting dancing shadows on the walls adorned with original works of art. The air is filled with a symphony of aromas, a tantalizing preview of the culinary delights awaiting you.`,
        'https://images.pexels.com/photos/17593640/pexels-photo-17593640/free-photo-of-a-bowl-of-ramen-with-chopsticks-and-eggs.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        false,
    );
    loadSection(
        `Our world-renowned chefs, artisans of flavor, have curated a menu that reflects their passion for culinary excellence. Each dish is a masterpiece, a harmonious blend of exquisite ingredients sourced from around the globe, artfully plated to tantalize the senses. Whether you crave succulent seafood, tender cuts of meat, or inspired vegetarian creations, "Elysian Eats" offers a feast for every palate.`,
        'https://images.pexels.com/photos/3217156/pexels-photo-3217156.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        true,
    );
    loadSection(
        `The attentive and knowledgeable staff are dedicated to ensuring your dining experience is nothing short of perfection. From expertly paired wines to personalized recommendations, they are here to elevate your meal to an unforgettable journey through taste and texture.`,
        'https://images.pexels.com/photos/4254266/pexels-photo-4254266.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        false,
    );
    loadSection(
        `As you savor each exquisite bite and sip, "Elysian Eats" offers an escape from the ordinary, a place where gastronomy and luxury intertwine, leaving you with cherished memories of a culinary adventure like no other. This is not just a restaurant; it's an ode to the art of fine dining, an invitation to savor life's exquisite flavors in a setting of pure decadence and delight.`,
        'https://images.pexels.com/photos/18281979/pexels-photo-18281979/free-photo-of-sweet-pancakes-on-plate-on-table.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        true,
    )
}

const loadSection = (text, imgURL,textFirst) => {
    let welcomeDiv = document.createElement('div');
    welcomeDiv.classList.add('section')
    let textDiv = document.createElement('div');
    textDiv.classList.add('text');
    textDiv.textContent = text
    let imgDiv = document.createElement('div');
    imgDiv.classList.add('img');
    let imgTag = document.createElement('img');
    imgTag.setAttribute('src', imgURL)
    imgDiv.appendChild(imgTag)
    if (textFirst) {
        welcomeDiv.appendChild(textDiv);
        welcomeDiv.appendChild(imgDiv);
    } else {
        welcomeDiv.appendChild(imgDiv);
        welcomeDiv.appendChild(textDiv);
    }

    contentDiv.appendChild(welcomeDiv);
}

export {loadPage}