


// MODAL

const modal = document.querySelector('#modal')
const buy = document.querySelector('.recommend__buttons__btn')
const modalClose = document.querySelector('.modal__header__close')
const standart = document.querySelector('.plan__info__standard__btn')
const premium = document.querySelector('.plan__info__premium__btn')
const life = document.querySelector('.plan__info__life__btn')
const standartCheck = document.querySelector('#standart--name')
const premiumCheck = document.querySelector('#premium--name')
const lifeCheck = document.querySelector('#life--name')
const accept = document.querySelector('#accept')
const premiumTick = document.querySelector('#premium')
const lifeTick = document.querySelector('#life')



buy.addEventListener('click', () => {
    modal.style.display = 'flex'
    if (buy.dataset.tariff.toUpperCase() === lifeCheck.innerHTML.toUpperCase()) {
        lifeTick.checked = true
        premiumTick.checked = false
        accept.checked = false
    }
})

modalClose.addEventListener('click', () => {
    modal.style.display = 'none'
})

standart.addEventListener('click', () => {
    modal.style.display = 'flex'
    if (standart.value.toUpperCase() === standartCheck.innerHTML.toUpperCase()){
        accept.checked =  true
        lifeTick.checked =  false
        premiumTick.checked =  false
    }
})


premium.addEventListener('click', () => {
    modal.style.display = 'flex'
    if (premium.value.toUpperCase() === premiumCheck.innerHTML.toUpperCase()){
        premiumTick.checked =  true
        accept.checked =  false
        lifeTick.checked =  false

    }
})


life.addEventListener('click', () => {
    modal.style.display = 'flex'
    if (life.value.toUpperCase() === lifeCheck.innerHTML.toUpperCase()){
        lifeTick.checked =  true
        premiumTick.checked =  false
        accept.checked =  false

    }
})


const form = document.querySelector('#modal--form')
const formName = document.querySelector('.modal__form__input__name')
const formEmail = document.querySelector('.modal__form__input__email')
const formApp = document.querySelector('.modal__form__plan__choice__tick')
const emailError = document.querySelector('.modal__form__input__error__email')
const nameError = document.querySelector('.modal__form__input__error')
const loader = document.querySelector('.modal__loading')

let validate = false;

form.addEventListener('submit', (e) => {
    e.preventDefault()
    checkInputs()
   if (validate === true) {
       loader.style.visibility = 'visible'
       setTimeout(()=> {
           loader.style.visibility = 'hidden'
       },2000)
   }
})

function checkInputs () {
    const nameValue = formName.value.trim()
    const emailValue = formEmail.value.trim()

    if (nameValue === '') {
        validate = false
        nameError.style.display = 'block'

    } else {
        validate = true
        nameError.style.display = 'none'
    }

    if (emailValue === '') {
        validate = false
        emailError.style.display = 'block'
    } else {
        validate = true
        emailError.style.display = 'none'
    }
}

// MODAL