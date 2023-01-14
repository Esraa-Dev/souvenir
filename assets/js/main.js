
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

var hiddenElement = document.getElementById("about");
var btn = document.querySelector(".scroll-icon");

function handleButtonClick() {
    window.scrollTo(0, 400);
}

btn.addEventListener("click", handleButtonClick);
