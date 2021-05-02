function createHeroArea () {
    const heroArea = document.createElement('div');
    heroArea.id = 'hero-area';
    heroArea.style.backgroundImage = "url('imgs/hero-image.jpg')";
    heroArea.style.backgroundSize = "100% 100%";

    //Add hero text
    const heroText = document.createElement('h2');
    heroText.textContent = 'Call Now on 0111 222 000';
    heroText.classList.add('hero-text');


    //Add subsidiary text
    const contactMethods = document.createElement('p');
    contactMethods.textContent = 'or email us at freshpies@fake-email.com';
    heroText.appendChild(contactMethods);
    heroArea.appendChild(heroText);
    
 

    return heroArea;
}

function createContact() {
    const contactBlock = document.createElement('div');
    const heroArea = createHeroArea();

    contactBlock.appendChild(heroArea);

    return contactBlock    
}


const loadContact = () => {
    const main = document.getElementById('main');
    main.textContent = "";

    main.appendChild(createContact());
    
}

export {
    loadContact
}