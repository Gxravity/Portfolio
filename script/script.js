const nameTextElement = document.querySelector(".name");
const infoTextElement = document.querySelector(".info-text");
const profileSectionElement = document.querySelector(".profile-section");
const buttonElements = document.querySelector(".buttons");

function fadeInTitle() {
  nameTextElement.classList.remove("hidden");
  nameTextElement.classList.add("visible");
  infoTextElement.classList.remove("hidden");
  infoTextElement.classList.add("visible");
  profileSectionElement.classList.remove("hidden");
  profileSectionElement.classList.add("visible-item-two");
  buttonElements.classList.remove("hidden");
  buttonElements.classList.add("visible-item-two");
}
addEventListener("load", fadeInTitle);

let scrollPosition = 0;
const scrollArrow = document.querySelector("lottie-player");
let checkPosition = () => {
  let scrollWindowY = window.scrollY;
  scrollWindowY > scrollPosition
    ? scrollArrow.classList.add("hidden")
    : scrollArrow.classList.remove("hidden");
  scrollPosition = scrollWindowY;
};

console.log(window.scrollY);
window.addEventListener("scroll", checkPosition);
