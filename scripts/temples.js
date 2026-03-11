const today = new Date();
const year = today.getFullYear();

document.getElementById("currentyear").innerHTML = year;
document.getElementById("lastModified").innerHTML = document.lastModified;

const menuButton = document.querySelector('#menu');
const nav = document.querySelector('nav ul');
const title = document.querySelector("header p");

menuButton.addEventListener("click", () => {
    nav.classList.toggle("open");
    title.classList.toggle("hide");

    if (menuButton.textContent === "≣") {
        menuButton.textContent = "X";
    }
    else {
        menuButton.textContent = "≣"
    }
});