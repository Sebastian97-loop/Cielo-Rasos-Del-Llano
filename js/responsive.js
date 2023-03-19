
const openMenu = document.getElementById("open-menu")
const closeMenu = document.getElementById("menu-close")
const showMenu = document.getElementById("menu-responsive")

openMenu.addEventListener("click", (e) => {
    showMenu.classList.toggle('active');
})
closeMenu.addEventListener("click", (e) => {
    showMenu.classList.toggle('active');
})