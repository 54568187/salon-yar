const menubtn = document.getElementById("hamburger");
const closeMenu = document.getElementById("closeIcon");
const mainMenu = document.querySelector(".menu-phone-mobile");
const body = document.querySelector(".body");

const menuOpen = () => {
    menubtn.style.display = "none";
    closeMenu.style.display = "inline-block";
    mainMenu.style.right = "0px";
    body.style.color = "#cececeff";
}
menubtn.addEventListener("click", menuOpen);

const menuClose = () => {
    closeMenu.style.display = "none";
    menubtn.style.display = "inline-block";
    mainMenu.style.right = "-320px";

}
closeMenu.addEventListener("click", menuClose);