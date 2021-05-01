
// create nav bar
function createNavBar () {
    const navBar = document.createElement('nav');
    
    const leftDiv = document.createElement('div');
    const rightDiv = document.createElement('div');

    leftDiv.appendChild(createMainIcon());
    leftDiv.appendChild(createNavTitle());
    rightDiv.appendChild(createNavLinks());
    navBar.appendChild(leftDiv);
    navBar.appendChild(rightDiv);

    return navBar;
}


function createMainIcon () {
    const mainIcon = document.createElement('img');
    mainIcon.src = 'imgs/main-icon.png';
    mainIcon.classList.add('main-icon');
    return mainIcon;
}

function createNavTitle () {
    const navTitle = document.createElement('a');
    navTitle.classList.add('nav-title');
    navTitle.textContent = 'Matty\'s Pie Shop';
    return navTitle;
}

function createNavLinks () {
    const navlinks = document.createElement('ul');
    
    const home = document.createElement('li');

    const homeLink = document.createElement('a');
    homeLink.textContent = 'Home';
    homeLink.href = '#';

    home.appendChild(homeLink);

    const menu = document.createElement('li');

    const menuLink = document.createElement('a');
    menuLink.textContent = 'Menu';
    menuLink.href = '#';

    menu.appendChild(menuLink);

    const contact = document.createElement('li');

    const contactLink = document.createElement('a');
    contactLink.textContent = 'Contact us';
    contactLink.href = '#';

    contact.appendChild(contactLink);

    navlinks.appendChild(home);
    navlinks.appendChild(menu);
    navlinks.appendChild(contact);
    
    navlinks.querySelectorAll('li').forEach((element) => {
        element.classList.add('nav-item');
    });

    navlinks.querySelectorAll('a').forEach((element) => {
        element.classList.add('nav-link');
    })

    return navlinks;

}


//     Title with icon
//     Links - Home, Contact, Menu 
 
//Create Hero area
    //Main image
    //Hero text
    //Main CTA button

//Create main content area
    //Header
    //Create 4 content blocks
        //small header
        //para text
    


const initialLoad = () => {
    const mainContainer = document.getElementById('content');
    console.log(mainContainer);
    mainContainer.appendChild(createNavBar());
}

export {
    initialLoad
}