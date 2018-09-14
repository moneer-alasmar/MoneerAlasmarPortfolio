// SELECT DOM ITEMS
const menuBtn = document.querySelector('.menu-btn');
const menu = document.querySelector('.menu');
const menuNav = document.querySelector('.menu-nav');
const menuBranding = document.querySelector('.menu-branding');
const navItems = document.querySelectorAll('.nav-item');

// SET INITIAL STATE OF MENUS
let showMenu = false;

// EVENT LISTENER
menuBtn.addEventListener('click', toggleMenu);

// TOGGLE MENU FUNCTION
function toggleMenu() {
  if (!showMenu) {
    menuBtn.classList.add('close');
    menu.classList.add('show');
    menuNav.classList.add('show');
    menuBranding.classList.add('show');

    // LOOP THROUGH EACH NAV ITEM AND SHOW
    navItems.forEach(item => item.classList.add('show'));

    // SET MENU STATE
    showMenu = true;
  } else {
    menuBtn.classList.remove('close');
    menu.classList.remove('show');
    menuNav.classList.remove('show');
    menuBranding.classList.remove('show');
    navItems.forEach(item => item.classList.remove('show'));

    showMenu = false;
  }
}