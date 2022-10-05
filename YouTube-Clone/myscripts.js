const hamburger = document.querySelector('.hamburger-icon');
const allDivsInNav = document.querySelectorAll('.sidebar-link');
const sidebar = document.querySelector('.sidebar');
const theBody = document.querySelector('#theBod');
const subscriptionSection = document.querySelectorAll('.subscriptions-section-no-display');

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

hamburger.addEventListener('click', expandHamburger);