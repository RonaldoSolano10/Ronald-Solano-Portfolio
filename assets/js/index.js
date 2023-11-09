// const btnOpen = document.querySelector('.btn--open')
// const btnClose = document.querySelector('.btn--close')
const menu = document.querySelector('.header__menu')

// btnOpen.addEventListener('click', function () {
//   menu.classList.toggle('show--menu')
// })

// btnClose.addEventListener('click', function () {
//   menu.classList.remove('show--menu')
// })

const headerNav = document.querySelector('.header__nav')

// Delegación de eventos
headerNav.addEventListener('click', function (e) {
  if (e.target.closest('.btn--open')) {
    menu.classList.toggle('show--menu')
  }

  if (e.target.closest('.btn--close')) {
    menu.classList.remove('show--menu')
  }

  if (e.target.closest('.list__link')) {
    menu.classList.remove('show--menu')

    const links = document.querySelectorAll('.list__link')

    for (const link of links) {
      link.classList.remove('active')
    }

    e.target.classList.add('active')
  }
})

document.addEventListener('keydown', function (e) {
if (e.key === 'Escape') {
  menu.classList.remove('show--menu')
}
})

// BOM
const html = document.documentElement

// console.log(html.scrollHeight) // Altura de la página
// console.log(html.clientHeight) // Altura de la ventana
// console.log(html.scrollTop) // Altura que se ha desplazado el scroll

const progress = document.querySelector('.progress')

window.addEventListener('scroll', function (e) {
const alturaPagina = html.scrollHeight - html.clientHeight

const scrollActual = html.scrollTop

const progreso = scrollActual / alturaPagina

progress.style.width = Math.round(progreso * 100) + '%'

})

const form = document.getElementById('form')

form.addEventListener('submit', function (e) {
  e.preventDefault()

  const formData = new FormData(this)

  console.log({
    name: formData.get('name'),
    email: formData.get('email'),
    message: formData.get('message')
  })

  // console.log(e.target.elements)
  const input = e.target.elements

  console.log({
    name: input.name.value,
    email: input.email.value,
    message: input.message.value
  })


})

const swiper = new Swiper('.reviews .swiper', {
  // Optional parameters
  // loop: true,
  slidesPerView: 1,
  spaceBetween: 10,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
  },

  // Navigation arrows
  navigation: {
    nextEl: '.button--next',
    prevEl: '.button--prev',
  },

  breakpoints: {
    768: {
      slidesPerView: 2,
      spaceBetween: 15,
    },
    1024: {
      slidesPerView: 3,
      spaceBetween: 25,
    },
  },
})
