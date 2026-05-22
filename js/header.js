// ================= HEADER SCROLL =================

const header = document.querySelector("header");

window.addEventListener("scroll", () => {

    if (!header) return;

    header.classList.toggle(
        "scrolled",
        window.scrollY > 50
    );

});

// ================= MOBILE MENU =================

const menuToggle =
document.querySelector(".menu-toggle");

const nav =
document.querySelector("nav");

if(menuToggle && nav){

    menuToggle.addEventListener(
        "click",
        () => {

            nav.classList.toggle("show");

            // đổi icon
            menuToggle.innerHTML =
            nav.classList.contains("show")
            ? "✖"
            : "☰";

        }
    );

}

// ================= AUTO ACTIVE MENU =================

const currentPage =
window.location.pathname
.split("/")
.pop();

const navLinks =
document.querySelectorAll("nav a");

navLinks.forEach(link => {

    const linkPage =
    link.getAttribute("href");

    link.classList.remove("active");

    if(linkPage === currentPage){

        link.classList.add("active");

    }

});

// ================= GET CURRENT USER =================

function getCurrentUser(){

    return JSON.parse(
        localStorage.getItem(
            "currentUser"
        )
    );

}

const currentUser =
getCurrentUser();

// ================= DISPLAY USER =================

if(currentUser){

    // username
    const userName =
    document.getElementById(
        "displayUserName"
    );

    if(userName){

        userName.textContent =
        currentUser.name || "User";

    }

    // avatar
    const userAvatar =
    document.getElementById(
        "displayUserAvatar"
    );

    if(userAvatar){

        userAvatar.src =
        currentUser.avatar ||
        "https://cdn-icons-png.flaticon.com/512/3135/3135715.png";

    }

}

// ================= LOGOUT =================

function logout(){

    // animation logout
    document.body.style.opacity = "0";

    setTimeout(() => {

        localStorage.removeItem(
            "currentUser"
        );

        window.location.href =
        "login.html";

    }, 400);

}

// ================= PAGE LOAD EFFECT =================

window.addEventListener("load", () => {

    document.body.classList.add(
        "loaded"
    );

});