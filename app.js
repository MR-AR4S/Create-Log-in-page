const password = document.querySelector("#pass");
const showPassBtn = document.querySelector(".show-pass");
const eyeIcon = document.querySelector("#eye-icon");

showPassBtn.addEventListener("click", () => {
  const type =
    password.getAttribute("type") == "password" ? "text" : "password";
  password.setAttribute("type", type);

  if (password.type == "password") {
    showPassBtn.classList.remove("eye-slash");
  } else {
    showPassBtn.classList.add("eye-slash");
  }
});

const firstNameInput = document.querySelector(".first-input");
firstNameInput.addEventListener("mouseenter", () => {
  firstNameInput.classList.add("mouse-in");
  firstNameInput.classList.remove("mouse-out");
});

firstNameInput.addEventListener("mouseleave", () => {
  firstNameInput.classList.remove("mouse-in");
  firstNameInput.classList.add("mouse-out");
});

const lastNameInput = document.querySelector(".second-input");
lastNameInput.addEventListener("mouseenter", () => {
  lastNameInput.classList.add("mouse-in");
  lastNameInput.classList.remove("mouse-out");
});

lastNameInput.addEventListener("mouseleave", () => {
  lastNameInput.classList.remove("mouse-in");
  lastNameInput.classList.add("mouse-out");
});

const emailContainer = document.querySelector(".email-container");

emailContainer.addEventListener("mouseenter", () => {
  emailContainer.classList.add("mouse-in");
  emailContainer.classList.remove("mouse-out");
});

emailContainer.addEventListener("mouseleave", () => {
  emailContainer.classList.add("mouse-out");
  emailContainer.classList.remove("mouse-in");
});

const passwordContainer = document.querySelector(".password-container");

passwordContainer.addEventListener("mouseenter", () => {
  passwordContainer.classList.add("mouse-in");
  passwordContainer.classList.remove("mouse-out");
});

passwordContainer.addEventListener("mouseleave", () => {
  passwordContainer.classList.add("mouse-out");
  passwordContainer.classList.remove("mouse-in");
});
