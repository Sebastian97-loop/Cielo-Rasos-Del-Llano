const header = document.getElementById('header');
var lastScrollY = 0;

window.addEventListener('scroll', function (){
var currentScrollY = window.scrollY;

if (currentScrollY > 1) {
    if (currentScrollY > lastScrollY) {
          header.classList.add('header--scroll-down');
          header.classList.remove('header--scroll-up');
      } else {
          header.classList.remove('header--scroll-down');
          header.classList.add('header--scroll-up');
       }
    
        lastScrollY = currentScrollY;
      } else {
          header.classList.remove('header--scroll-up');
      }
});