


window.addEventListener("scroll", function (){
    const header = document.querySelector("header");
    header.classList.toggle("sticky",window.scrollY > 0);
});

const hamburger = document.querySelector('.header__nav__navMenu')
const hamburgerBar = document.querySelector('.header__nav__navMenu__bar')
const menu = document.querySelector('.header__nav__list')
const close = document.querySelector('.header__nav__close')

hamburger.addEventListener('click', () => {
    hamburgerBar.style.display = 'none'
    close.style.cssText = `display: block; position: relative; margin: -17px 23px`
    menu.classList.add('active')
})
close.addEventListener('click', () => {
    hamburgerBar.style.display = 'block'
    close.style.display = 'none'
    menu.classList.remove('active')
})

document.querySelectorAll('.header__nav__list__items--item').forEach(n => {
    n.addEventListener('click', () => {
        hamburger.classList.remove('active')
        menu.classList.remove('active')
    })
})

