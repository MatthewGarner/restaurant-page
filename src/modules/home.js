import {loadMenu} from './menu';
import {loadContact} from './contact';


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
    homeLink.addEventListener('click', e => {
        const links = document.querySelectorAll('.nav-link');
        links.forEach(link => {
            link.classList.remove('active');
        });
        e.target.classList.add('active');
        loadHome();
    });
    home.appendChild(homeLink);

    const menu = document.createElement('li');
    const menuLink = document.createElement('a');
    menuLink.textContent = 'Menu';
    menuLink.href = '#';
    menuLink.addEventListener('click', e => {
        const links = document.querySelectorAll('.nav-link');
        links.forEach(link => {
            link.classList.remove('active');
        });
        e.target.classList.add('active');
        loadMenu();
    });
    menu.appendChild(menuLink);

    const contact = document.createElement('li');
    const contactLink = document.createElement('a');
    contactLink.textContent = 'Contact us';
    contactLink.href = '#';
    contactLink.addEventListener('click', e => {
        const links = document.querySelectorAll('.nav-link');
        links.forEach(link => {
            link.classList.remove('active');
        });
        e.target.classList.add('active');
        loadContact();
    });
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

function createMain() {
    const main = document.createElement('div');
    main.id = "main";

    return main;
}

//create hero area with hero image as background (in css)
function createHeroArea () {
    const heroArea = document.createElement('div');
    heroArea.id = 'hero-area';
    heroArea.style.backgroundImage = "url('imgs/hero-image.jpg')";
   
    //Add hero text
    const heroText = document.createElement('h2');
    heroText.textContent = 'The biggest, tastiest pies in all Yorkshire';
    heroText.classList.add('hero-text');


    //Add main CTA
    const mainCTA = document.createElement('button');
    mainCTA.textContent = 'Choose Pie';
    mainCTA.classList.add('main-cta');
    mainCTA.addEventListener('click', e => {
        const links = document.querySelectorAll('.nav-link');
        links.forEach(link => {
            link.classList.remove('active');
        });
        loadMenu();
    });
    
    heroArea.appendChild(heroText);
    heroText.appendChild(mainCTA);


    return heroArea;
}


function createMainContentContainer() {
   const mainContainer = document.createElement('div');

    mainContainer.appendChild(createMainHeader());
    mainContainer.appendChild(createMainContent());
    return mainContainer;
   
}
    
function createMainHeader () {
    //use this to style and position header area
    const mainHeaderDiv = document.createElement('div');
    mainHeaderDiv.classList.add('main-header-container');

    const mainHeader = document.createElement('h2');
    mainHeader.textContent = 'Try our Oboe pie, winner of the Zabli award 2019 & 2020'
    mainHeader.classList.add('main-header');
    
    mainHeaderDiv.appendChild(mainHeader);
    
    return mainHeaderDiv;

}

function createMainContent () {
    //use this to style and position content area
    const mainContentDiv = document.createElement('div');
    mainContentDiv.classList.add('main-content-div');
    
    let header = 'Finest local ingredients';
    let mainText = 'All our pies are grown locally in local pie orchards tended to by the last 4000 generations of the family.';
    mainContentDiv.appendChild(createContentBlock(header, mainText));

    header = 'Taste is flavour';
    mainText = 'We believe that taste is key to flavour. That\’s why you’ll find taste in all our pies ' 
        + 'from the Beeswax pumpkin pie to the Rambuncious Raspberry pie.';
    mainContentDiv.appendChild(createContentBlock(header, mainText));

    header = 'Next day delivery on all pies';
    mainText = 'We deliver all our pies the next day by forklift truck direct to your plate - we don\’t believe in doors!';
    mainContentDiv.appendChild(createContentBlock(header, mainText));

    header = 'Ethical robotics';
    mainText = 'All our chef robots are paid a fair wage and we voluntarily comply with Turing RSTGANBD standards for robo-welfare.';
    mainContentDiv.appendChild(createContentBlock(header, mainText));
     
    return mainContentDiv;
}

function createContentBlock (header, mainText) {
    const contentBlock = document.createElement('div');
    contentBlock.classList.add('content-block');
    
    const contentHeader = document.createElement('h3');
    contentHeader.textContent = header;
    contentHeader.classList.add('content-header');

    const contentBody = document.createElement('p');
    contentBody.textContent = mainText;
    contentBody.classList.add('content-body');

    contentBlock.appendChild(contentHeader);
    contentBlock.appendChild(contentBody);

    return contentBlock;
} 


const initialLoad = () => {
    const mainContainer = document.getElementById('content');

    mainContainer.appendChild(createNavBar());

    const main = createMain();
    
    main.appendChild(createHeroArea());
    main.appendChild(createMainContentContainer());
    mainContainer.appendChild(main);
}

const loadHome = () => {
    const main = document.getElementById('main');
    main.textContent = "";

    main.appendChild(createHeroArea());
    main.appendChild(createMainContentContainer());
}

export {
    initialLoad,
    loadHome
}