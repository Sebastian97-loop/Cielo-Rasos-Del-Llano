// codigo scroll

let header = document.getElementById("header")
let lastScrollY = 0

window.addEventListener("scroll",function (){
 const  currentScrollY = window.scrollY

  if (currentScrollY > 1) {
   if (currentScrollY > lastScrollY) {
         header.classList.add('header--scroll-up');
     } else {
         header.classList.remove('header-transform');
         // header.classList.remove('header--scroll-down');
         // header.classList.add('header--scroll-up');
      }
   
       lastScrollY = currentScrollY;
     } else {
         header.classList.remove('header-transform');
     }
});