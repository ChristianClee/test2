// menu header
const mebuIcon = document.querySelector('#menu-icon');
const navbar = document.querySelector('#navbar');

mebuIcon.onclick = () => {
  mebuIcon.classList.toggle('bx-x')
  navbar.classList.toggle('active')
}

const header = document.querySelector('header')

window.onscroll = () => {
  // console.log(window.scrollY)
  const position = window.scrollY
  const hederHeight = header.getBoundingClientRect().height
  if (position > hederHeight) {
    header.style.background = 'rgb(156, 40, 40)'
  } else {
    header.style.background = 'none'
    header.style.transition = '.5s'
  }
  
  // console.dir(header)
}