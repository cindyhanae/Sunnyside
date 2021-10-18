const burgerBtn = document.querySelector('.js-burger')
const nav = document.querySelector('.js-nav-burger')
const navItem = document.querySelectorAll('.js-nav-burger ul li a')
const body = document.querySelector('body')

// open mobile menu
function openMenu(){
    nav.classList.toggle('active')

    if(nav.classList.contains('active')){
        body.style.overflow = 'hidden'

    } else if(!nav.classList.contains('active')){
        body.style.overflow = 'auto'
    }
}

// close menu when link is clicked
function clickNavItem(event){
    event.preventDefault()
    nav.classList.remove('active')

    if(!nav.classList.contains('active')){
        body.style.overflow = 'auto'
    }
}

burgerBtn.addEventListener('click', openMenu)
navItem.forEach(function(item){
    item.addEventListener('click', clickNavItem)
})





