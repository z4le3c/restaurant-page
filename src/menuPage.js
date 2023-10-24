import './style.css'

let contentDiv

const loadMenu = () => {
    contentDiv = document.querySelector('#content');

    loadMenuCategory(
        'Starters',
        ['Seared Scallop with Truffle Risotto', 10],
        ['Foie Gras with Brioche and Fruit Compote', 14],
        ['Lobster Bisque', 12],
        ['Beef Tartare', 10],
        ['Pan-Seared Duck Breast', 9],
        );

    loadMenuCategory(
        'Breakfast',
        ['Eggs Benedict Royale', 18],
        ['Quiche Lorraine', 16],
        ['Avocado Toast with Smoked Salmon', 14],
        ['Croissant French Toast', 16],
        ['Truffle Scrambled Eggs', 20],
        ['Belgian Waffle Delight', 14],
        ['Shakshuka Royale', 22]
        );

    loadMenuCategory(
        'Main Plates',
        ['Filet Mignon', 35],
        ['Lobster Tail with Garlic Butter', 40],
        ['Truffle Risotto with Wild Mushrooms', 30],
        ['Grilled Chilean Sea Bass', 40],
        [`Duck à l'Orange`, 35],
        ['Veal Osso Buco', 40],
        ['Wild-caught Salmon with Lemon-Dill Sauce', 30],
        ['Vegetable Wellington', 25],
        ['Surf and Turf', 55],
        );

    loadMenuCategory(
        'Drinks',
        ['Classic Martini', 12],
        ['French 75', 14],
        ['Negroni Sbagliato', 14.5],
        ['Boulevardier', 14],
        ['Mango and Chili Margarita', 16],
        ['Aviation Cocktail', 15],
        ['Elderflower Spritz', 12]
        );
    loadMenuCategory(
        'Desserts',
        ['Molten Chocolate Lava Cake', 12],
        ['Crème Brûlée', 10],
        ['Tiramisu', 12],
        ['Panna Cotta', 10],
        ['Cheesecake with Berry Compote', 12],
        ['Opera Cake', 14],
        ['Lemon Tart', 10],
        ['Caramelized Banana Foster', 12],
        );

    loadMenuCategory(
        'Alcohol Free',
        ['Virgin Mojito', 8],
        ['Cucumber Sparkler', 7],
        ['Ginger Elixir', 8],
        ['Lavender Lemonade', 7],
        );
}

const loadMenuCategory = (categoryName, ...Items) => {
    let categoryDiv = document.createElement('div');
    let categoryNameDiv = document.createElement('div');
    let itemsWrapper = document.createElement('div');
    
    categoryDiv.classList.add('category');
    categoryNameDiv.classList.add('category-name');
    itemsWrapper.classList.add('items-wrapper');

    categoryNameDiv.textContent = categoryName;

    categoryDiv.appendChild(categoryNameDiv);

    for (let [name, price] of Items) {
        loadMenuItem(name, price, itemsWrapper);
    }

    categoryDiv.appendChild(itemsWrapper);
    contentDiv.appendChild(categoryDiv);
}

const loadMenuItem = (name, price, wrapper) => {
    let nameDiv = document.createElement('div');
    let priceDiv = document.createElement('div');
    let itemWrapper = document.createElement('div');

    nameDiv.classList.add('menu-item-name');
    priceDiv.classList.add('menu-item-price');
    itemWrapper.classList.add('menu-item-wrapper');

    nameDiv.textContent = name;
    priceDiv.textContent = price;

    itemWrapper.appendChild(nameDiv);
    itemWrapper.appendChild(priceDiv);

    wrapper.appendChild(itemWrapper);
}

export {loadMenu}