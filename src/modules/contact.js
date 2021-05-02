function createContact() {
    const contactBlock = document.createElement('div');

    return contactBlock    
}


const loadContact = () => {
    const main = document.getElementById('main');
    main.textContent = ""

    main.appendChild(createContact());
    
}

export {
    loadContact
}