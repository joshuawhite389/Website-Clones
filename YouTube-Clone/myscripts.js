const hamburger = document.querySelector('.hamburger-icon');
const allDivsInNav = document.querySelectorAll('.sidebar-link');
const sidebar = document.querySelector('.sidebar');
const theBody = document.querySelector('#theBod');
const subscriptionSection = document.querySelectorAll('.subscriptions-section-no-display');
const navBarArea = document.querySelector('nav');
const searchBar = document.querySelector('.search-bar');
const searchButton = document.querySelector('.magnifying-glass');

let hamburgerClicked = false;

function expandHamburger(){
    allDivsInNav.forEach(div => {
        if (!hamburgerClicked) {
            div.classList.add('expanded-sidebar-link');
            div.classList.remove('sidebar-link');
        }
        else {
            div.classList.remove('expanded-sidebar-link');
            div.classList.add('sidebar-link'); 
        }
    });
    subscriptionSection.forEach(div => {
        if (!hamburgerClicked) {
            div.classList.remove('subscriptions-section-no-display');
        }
        else {
            div.classList.add('subscriptions-section-no-display'); 
        }
    })
    if (!hamburgerClicked) {
        sidebar.classList.add('expanded-sidebar');
        sidebar.classList.remove('sidebar');
        theBody.classList.add('expanded-sidebar-body');
    }
    else {
        sidebar.classList.remove('expanded-sidebar');
        sidebar.classList.add('sidebar');
        theBody.classList.remove('expanded-sidebar-body');
    }    
    hamburgerClicked = !hamburgerClicked;
}

function addScroll() {
    sidebar.classList.remove('hide-scroll');
}

function removeScroll() {
    sidebar.classList.add('hide-scroll');
}

function handleSearch(e) {
    e.preventDefault();
    if (e.keyCode === 13) {
        searchBar.value = '';
        searchButton.click();
    }   
}

function handleButtonClick(e) {
    searchBar.value = '';
}

hamburger.addEventListener('click', expandHamburger);
navBarArea.addEventListener('mouseover', addScroll);
navBarArea.addEventListener('mouseout', removeScroll);
searchBar.addEventListener('keyup', handleSearch);
searchButton.addEventListener('click', handleButtonClick);


