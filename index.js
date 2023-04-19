const hamburgMenu = document.querySelector('.right-hamburger');
const menuList = document.querySelector('.nav-li');
const xMen = document.querySelector('.x-men');

hamburgMenu.addEventListener('click', () => {
  menuList.classList.toggle('nav-active');
});

xMen.addEventListener('click', () => {
  menuList.classList.toggle('nav-active');
});

menuList.addEventListener('click', () => {
  menuList.classList.toggle('nav-active');
});
