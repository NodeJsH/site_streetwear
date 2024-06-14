// MOSTRAR MENU //
const navMenu = document.getElementById('nav--menu'),
    navToggle = document.getElementById('nav--toggle'),
    navClose = document.getElementById('nav--close')

// MENU MOSTRAR //
if (navToggle) {
    navToggle.addEventListener('click', () => {
        navMenu.classList.add('show-menu')
    })
}

// MENU MOSTRAR //
if (navClose) {
    navClose.addEventListener('click', () => {
        navMenu.classList.remove('show-menu')
    })
}

// REMOVER MENU NO CELULAR //
const navLink = document.querySelectorAll('.nav-link')
const linkAction = () => {
    const navMenu = document.getElementById('nav--menu')
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

// ADICIONAR BLUR NO HEADER //
const blurHeader = () => {
    const header = document.getElementById('header')

    this.scrollY >= 50 ? header.classList.add('blur-header')
        : header.classList.remove('blur-header')
}
window.addEventListener('scroll', blurHeader)

// MOSTRAR SCROLL UP //
const scrollUp = () => {
    const scrollUp = document.getElementById('scroll-up')
    this.scrollY >= 350 ? scrollUp.classList.add('show-scroll')
        : scrollUp.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollUp)

// SCROLL SECTIONS ATIVAR LINK //
const sections = document.querySelectorAll('section[id]')

const scrollActive = () => {
    const scrollDown = window.scrollY
    sections.forEach(current => {
        const sectionsHeight = current.offsetHeight,
            sectionTop = current.offsetTop - 58,
            sectionId = current.getAttribute('id'),
            sectionsClass = document.querySelector('.nav-menu a[href*=' + sectionId + ']')

        if (scrollDown > sectionTop && scrollDown <= sectionTop + sectionsHeight) {
            sectionsClass.classList.add('active-link')
        } else {
            sectionsClass.classList.remove('active-link')
        }
    })
}
window.addEventListener('scroll', scrollActive)

// SCROLL REVEAL ANIMAÇÃO //
const sr = ScrollReveal({
    origin: 'top',
    distance: '80px',
    duration: 2000,
    delay: 300,
})

sr.reveal('.home-img, .new-data, .contato-conteudo, .marcas, .footer, .sobre, .seguranca, .produto, .entrega')
sr.reveal('.home-data, .contato-img,', { delay: 500 })
sr.reveal('.new-card', { delay: 500, interval: 100 })
sr.reveal('.loja-card', { interval: 100 })

// BOTÃO DE PESQUISAR //
const search = document.getElementById('search')
const searchBtn = document.getElementById('search-btn')
const searchClose = document.getElementById('search--close')

searchBtn.addEventListener('click', () => {
    search.classList.add('show-search')
})

searchClose.addEventListener('click', () => {
    search.classList.remove('show-search')
})

// LOGIN //
const login = document.getElementById('login')
const loginBtn = document.getElementById('login-btn')
const loginClose = document.getElementById('login--close')

loginBtn.addEventListener('click', () => {
    login.classList.add('show-login')
})

loginClose.addEventListener('click', () => {
    login.classList.remove('show-login')
})

// SLIDE //
const slider = document.getElementById('slider');
let slideIndex = 0;

function nextSlide() {
    slideIndex++;
    if (slideIndex >= slider.children.length) {
        slideIndex = 0;
    }
    updateSlider();
}

function updateSlider() {
    slider.style.transform = `translateX(-${slideIndex * 50}%)`;
}
const isMobile = window.matchMedia("only screen and (max-width: 600px)").matches;
if (isMobile) {
    setInterval(nextSlide, 1000);
}