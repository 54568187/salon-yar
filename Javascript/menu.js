const menubtn = document.getElementById("hamburger");
const closeMenu = document.getElementById("closeIcon");
const mainMenu = document.querySelector(".menu-phone-mobile");

const menuOpen = () => {
    menubtn.style.display = "none";
    closeMenu.style.display = "inline-block";
    mainMenu.style.right = "0px";
}
menubtn.addEventListener("click", menuOpen);

const menuClose = () => {
    closeMenu.style.display = "none";
    menubtn.style.display = "inline-block";
    mainMenu.style.right = "-320px";

}
closeMenu.addEventListener("click", menuClose);


const btns = document.querySelectorAll("#notifyBtn");
btns.forEach(btn => {
    const box = btn.nextElementSibling; // باکس نوتیف بعد از دکمه
    btn.addEventListener("click", (e) => {
        e.stopPropagation(); // جلوگیری از بستن خودکار
        box.classList.toggle("show");
    });
});

// بستن باکس وقتی بیرون از آن کلیک شد
document.addEventListener("click", () => {
    document.querySelectorAll(".notify-box.show").forEach(box => {
        box.classList.remove("show");
    });
});
