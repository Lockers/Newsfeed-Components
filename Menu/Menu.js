
const toggleMenu = () => {
  
  menu.classList.toggle('menu--open');
  // Toggle the "menu--open" class on your menu refence. 
}

// Start Here: Create a reference to the ".menu" class
const menu = document.querySelector('.menu');

const menuButton = document.querySelector('.menu-button')
menuButton.addEventListener('click', toggleMenu);

// Using your menuButton reference, add a click handler that calls toggleMenu
