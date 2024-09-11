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
const lastNameInput = document.querySelector(".second-input");
const emailContainer = document.querySelector(".email-container");
const passwordContainer = document.querySelector(".password-container");

firstNameInput.addEventListener("mouseenter", toggleMouseClasses);
firstNameInput.addEventListener("mouseleave", toggleMouseClasses);
lastNameInput.addEventListener("mouseenter", toggleMouseClasses);
lastNameInput.addEventListener("mouseleave", toggleMouseClasses);
emailContainer.addEventListener("mouseenter", toggleMouseClasses);
emailContainer.addEventListener("mouseleave", toggleMouseClasses);
passwordContainer.addEventListener("mouseenter", toggleMouseClasses);
passwordContainer.addEventListener("mouseleave", toggleMouseClasses);

// Function to handle class toggling
function toggleMouseClasses(event) {
  const input = event.target; // Get the element that triggered the event

  if (event.type === "mouseenter") {
    input.classList.add("mouse-in");
    input.classList.remove("mouse-out");
  } else if (event.type === "mouseleave") {
    input.classList.remove("mouse-in");
    input.classList.add("mouse-out");
  }
}

const createAccountBtn = document.querySelector(".create-account-btn");

createAccountBtn.addEventListener("click", () => {
  const form = document.querySelector("form");
  const errorMessage = document.querySelector(".error-message");

  if (form.checkValidity()) {
    form.submit();
    if (errorMessage) {
      errorMessage.classList.remove("error");
      errorMessage.classList.add("error-message");
    }
  } else {
    if (errorMessage) {
      errorMessage.classList.add("error");
      errorMessage.classList.remove("error-message");
    }
  }
});
