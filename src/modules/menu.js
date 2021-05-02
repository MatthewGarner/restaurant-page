function createMenuItem (name, price, description) {
    const menuItem = document.createElement('div');
    menuItem.classList.add('menu-item');

    const itemName = document.createElement('h3');
    itemName.textContent = name;
    itemName.classList.add('menu-item-name');

    const itemPrice = document.createElement('h3');
    itemPrice.textContent = `£${price}`
    itemPrice.classList.add('menu-item-price');

    const itemDescription = document.createElement('p');
    itemDescription.textContent = description;
    itemDescription.classList.add('menu-item-description');

    menuItem.appendChild(itemName);
    menuItem.appendChild(itemPrice);
    menuItem.appendChild(itemDescription);

    return menuItem;
}

function createMenu () {
    const menu = document.createElement('div');

    const menuItems = [
        createMenuItem(
            'Space Pie',
            '3.99',
            'The tastiest pie in space'
        ),
        createMenuItem(
            'Old Pie',
            '7.99',
            'An old pie we found'
        ),
        createMenuItem(
            'Cheese pie',
            '300.99',
            'Made with the last known piece of cheese in the western hemisphere'
        ),
        createMenuItem(
            'Treacle Pie',
            '7.00',
            'Sticky. Very sticky. Stuck right now actually, maybe you can\'t order it'
        )
    ]

    menuItems.forEach(item => {
        menu.appendChild(item);
    });

    return menu;
}


const loadMenu = () => {
    const main = document.getElementById('main');
    main.textContent = ""

    main.appendChild(createMenu());
    
}

export {
    loadMenu
}