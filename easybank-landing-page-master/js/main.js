const bodi = document.querySelector('body');
const menus = document.querySelector('.menus')
let mediaQuery = window.matchMedia('(min-width: 768px)');
// //const dropdown = document.querySelector('.dropdown');

bodi.addEventListener('click', function (el) {
  if (el.target.className == "fas fa-bars") {
    menus.classList.toggle('show');
  }
});

function media(arg) {
  if (arg.matches) {
    menus.classList.remove('show')
  }
}
mediaQuery.addListener(media)
media(mediaQuery);


