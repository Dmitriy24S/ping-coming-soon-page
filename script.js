const form = document.querySelector(".form");
const emailInput = document.querySelector("#email");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const emailValue = emailInput.value;
  // check if it is a valid email
  if (!validateEmail(emailValue)) {
    form.classList.add("error");
    showErrorMessage(form);
  } else {
    form.classList.remove("error");
  }
});

const showErrorMessage = (el) => {
  let div = document.createElement("div");
  let text = document.createTextNode("Please provide a valid email address");
  div.appendChild(text);
  div.classList.add("error-text");
  el.appendChild(div);
};

function validateEmail(email) {
  var re =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}
