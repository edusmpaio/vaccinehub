const navBar = document.querySelector('nav#navbar')

const backToTopButton = document.querySelector('#backToTopButton')

window.addEventListener('scroll', onScroll)

onScroll()
function onScroll() {
  showNavOnScroll()
  showBackToTopButtonOnScroll()
  activateMenuAtCurrentSection(home)
  activateMenuAtCurrentSection(services)
  activateMenuAtCurrentSection(about)
  activateMenuAtCurrentSection(contact)
}

function activateMenuAtCurrentSection(section) {
  const targetLine = scrollY + innerHeight / 2

  const sectionTop = section.offsetTop
  const sectionHeight = section.offsetHeight

  // verificar se o topo da seção chegou ou ultrapassou a linha alvo
  const sectionTopReachOrPassedTargetLine = targetLine >= sectionTop

  // final da seção
  const sectionEndsAt = sectionTop + sectionHeight

  // verificar se a base da seção passou linha alvo
  sectionEndPassedTargetLine = sectionEndsAt <= targetLine

  const sectionId = section.getAttribute('id')
  const menuElement = document.querySelector(`.menu a[href*=${sectionId}]`)

  const sectionBoundaries =
    sectionTopReachOrPassedTargetLine && !sectionEndPassedTargetLine

  menuElement.classList.remove('active')
  if (sectionBoundaries) {
    menuElement.classList.add('active')
  }
}

function showNavOnScroll() {
  scrollY > 0
    ? navBar.classList.add('scroll')
    : navBar.classList.remove('scroll')
}

function showBackToTopButtonOnScroll() {
  scrollY > 550
    ? backToTopButton.classList.add('show')
    : backToTopButton.classList.remove('show')
}

function openMenu() {
  document.body.classList.add('menu-expanded')
}

function closeMenu() {
  document.body.classList.remove('menu-expanded')
}

ScrollReveal({
  origin: 'top',
  distance: '30px',
  duration: 700
}).reveal(`
  #home,
  #home #woman-img,
  #home .stats,
  #services,
  #services header,
  #services .col-a img,
  #services .card,
  #about header,
  #about .content,
  #about img,
  #contact header,
  #contact .content,
  #contact .col-b img,
  footer a,
  footer p,
  footer ul`)
