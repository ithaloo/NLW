function onScroll() {
  if (scrollY > 0) {
    navigation.classList.add('scroll')
  } else {
    navigation.classList.remove('scroll')
  }
}

function openMenu() {
  document.body.classList.add('menu__expanded')
}
function closeMenu() {
  document.body.classList.remove('menu__expanded')
}
