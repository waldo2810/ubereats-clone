const bringMenu = () =>{
    const menu = document.querySelector('.menu-opened');
    const button = document.querySelector('.menu');
    const opacityDiv = document.querySelector('.opacity-div');

    //! For opening the menu...
    button.addEventListener('click', () => {

        //show menu
        menu.style.transform = 'translateX(0%)';
        menu.style.visibility = 'visible';

        //show opacityDiv
        opacityDiv.style.visibility = 'visible'

    });

    //! For closing the menu...
    opacityDiv.addEventListener('click', () => {

        // hide menu
        menu.style.transform = 'translateX(-100%)';
        menu.style.visibility = 'hidden';

        // hide opacityDiv
        opacityDiv.style.visibility = 'hidden'
    });
}

const navAnimations = () =>{
    const head = document.querySelector('header');
    const loginButton = document.getElementById('login-btn');
    const searchBar = document.querySelector('.header-searchbar');

    //! For the white navbar 
    window.addEventListener('scroll', () =>{
        head.classList.toggle('sticky', window.scrollY > 0);
        loginButton.classList.remove('login-btn');
        loginButton.classList.add('sticky-btn');
        
        if ((window.scrollY > 0) == false) {
            loginButton.classList.remove('sticky-btn');
            loginButton.classList.add('login-btn');
        }

        if ((window.scrollY >= 350)){
        searchBar.classList.add('sticky-searchbar');
        searchBar.classList.remove('header-searchbar');
        } else {
            searchBar.classList.remove('sticky-searchbar');
            searchBar.classList.add('header-searchbar');
        }

    });
}

bringMenu();
navAnimations();