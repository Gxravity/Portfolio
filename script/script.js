console.log("hey");

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
