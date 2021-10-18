const burgerBtn = document.querySelector('.js-burger')
const nav = document.querySelector('.js-nav-burger')

function openMenu(){
    nav.classList.toggle('active')
}

burgerBtn.addEventListener('click', openMenu)