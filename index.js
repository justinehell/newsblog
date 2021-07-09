let menuBurger = document.getElementById('toggle-menu-btn');
let menuBottomList = document.getElementById('menu-bottom-list');

let isClicked = false;

const showMenuBottom = () => {
  menuBottomList.style.maxHeight = '300px';
};

const hideMenuBottom = () => {
  menuBottomList.style.maxHeight = '0px';
};

menuBurger.addEventListener('click', () => {
  isClicked = !isClicked;
  isClicked ? showMenuBottom() : hideMenuBottom();
});

window.addEventListener('resize', function (event) {
  let newWidth = window.innerWidth;
  newWidth >= 960 ? showMenuBottom() : hideMenuBottom();
});
