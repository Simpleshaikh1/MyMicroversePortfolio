const hamburgMenu = document.querySelector('.right-hamburger')
const menuList = document.querySelector('.nav-li')
const lists = document.querySelector('.lis')
const xMen = document.querySelector('.x-men')
const otherLink = document.querySelector('.lis')

hamburgMenu.addEventListener('click', function() {
    menuList.classList.toggle('nav-active')
})

xMen.addEventListener('click', function() {
    menuList.classList.toggle('nav-active')
})

menuList.addEventListener('click', function() {
    menuList.classList.toggle('nav-active')
})



