// js/script.js

const hamburger = document.getElementById("hamburger");
const menu = document.getElementById("menu");

hamburger.addEventListener("click", () => {
  menu.classList.toggle("active");
});

// fecha menu ao clicar no link mobile
document.querySelectorAll(".menu a").forEach(link => {
  link.addEventListener("click", () => {
    menu.classList.remove("active");
  });
});

// sombra header ao scroll
const header = document.querySelector(".header");

window.addEventListener("scroll", () => {
  if(window.scrollY > 30){
    header.style.boxShadow = "0 10px 30px rgba(0,0,0,.25)";
  } else {
    header.style.boxShadow = "none";
  }
});