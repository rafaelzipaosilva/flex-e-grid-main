const bottonMenu = document.querySelector('.cabecalho__menu');
const menu = document.querySelector('.menu-lateral');

bottonMenu.addEventListener('click', () => {
  menu.classList.toggle('menu-lateral--ativo');
})