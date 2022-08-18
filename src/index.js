import './index.scss'
import './index.html'
import darkMoon  from './img/darkMoon.svg'
import moonIcon  from './img/Moon-Icon.svg'
import sunIcon  from './img/Sun-Icon.svg'
import lemonSun  from './img/lemon-sun.svg'


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


// MODES

const lightIcon = document.querySelector('.modes__change__types__light')
const darkIcon = document.querySelector('.modes__change__types__dark')
const darkIconsItem = document.getElementById('dark')
const lightIconsItem = document.getElementById('light')

lightIcon.addEventListener('click', () =>{
    document.body.classList.add("light-theme");
    if (document.body.classList.contains("light-theme")){
        darkIconsItem.src = darkMoon
        lightIconsItem.src = lemonSun
    }else{
        darkIconsItem.src = moonIcon
        lightIconsItem.src = sunIcon
    }

})

darkIcon.addEventListener('click', () =>{
    document.body.classList.remove("light-theme");
    if (document.body.classList.contains("light-theme")){
        darkIconsItem.src = darkMoon
        lightIconsItem.src = lemonSun
    }else{
        darkIconsItem.src = moonIcon
        lightIconsItem.src = sunIcon
    }
})



// MODES



// HERO

function displayDate (){
    const dateTime = new Date();
    let days = dateTime.getDay();
    let hrs = dateTime.getHours();
    let min = dateTime.getMinutes();
    let sec = dateTime.getSeconds();

    if (days < 10){
        days = '0' + days
    }

    if (hrs < 10){
        hrs = '0' + hrs
    }

    if (min < 10){
        min = '0' + min
    }

    if (sec < 10){
        sec = '0' + sec
    }



    document.getElementById('days').innerHTML = days;
    document.getElementById('hours').innerHTML = hrs;
    document.getElementById('minutes').innerHTML = min;
    document.getElementById('seconds').innerHTML = sec;

}
setInterval(displayDate,10)
// HERO


// MODAL

const modal = document.querySelector('#modal')
const buy = document.querySelector('.recommend__buttons__btn')
const modalClose = document.querySelector('.modal__header__close')


buy.addEventListener('click', () => {
    modal.style.display = 'flex'
})

modalClose.addEventListener('click', () => {
    modal.style.display = 'none'
})

// MODAL