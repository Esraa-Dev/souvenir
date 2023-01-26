// Fixed Nav
const navBar = document.querySelector(".nav");
const navHeight = navBar.getBoundingClientRect().height;
window.addEventListener("scroll", () => {
  const scrollHeight = window.pageYOffset;

  if (scrollHeight > navHeight) {
    navBar.classList.add("fix-nav");
  } else {
    navBar.classList.remove("fix-nav");
  }
});
// Scroll Button
var hiddenElement = document.getElementById("about");
var btn = document.querySelector(".scroll-icon");

function handleButtonClick() {
  window.scrollTo(0, 400);
}

btn.addEventListener("click", handleButtonClick);
// Spinner
const loaderContainer = document.querySelector(".loader-container");
window.addEventListener("load", () => {
  loaderContainer.classList.add("loader-container-hidden");
});
//Go Up Button
let mybutton = document.getElementById("btn-back-to-top");
window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}
mybutton.addEventListener("click", backToTop);
function backToTop() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}
