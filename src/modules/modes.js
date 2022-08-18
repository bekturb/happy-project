

// MODES

import darkMoon from "../img/darkMoon.svg";
import lemonSun from "../img/lemon-sun.svg";
import moonIcon from "../img/Moon-Icon.svg";
import sunIcon from "../img/Sun-Icon.svg";

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
