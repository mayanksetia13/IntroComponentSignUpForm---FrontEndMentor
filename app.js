const form = document.querySelector(".form-deck");
const mainForm = document.querySelector("#form");
const errorImg = document.querySelector(".error-img");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const firstName = document.querySelector("#firstname");
  const lastName = document.querySelector("#lastname");
  const emailId = document.querySelector("#email");
  const password = document.querySelector("#password");

  if (firstName.value === "") {
    let small = document.querySelector(".one");
    let error = document.querySelector(".error-img-1");
    small.innerText = "First Name is required";
    small.style.opacity = 1;
    error.style.opacity = 1;
    firstName.style.borderColor = "hsl(0, 100%, 74%)";
    
  } else {
    let small = document.querySelector(".one");
    let error = document.querySelector(".error-img-1");
    small.style.opacity = 0;
    error.style.opacity = 0;
  }

  if (lastName.value === "") {
    let small = document.querySelector(".two");
    let error = document.querySelector(".error-img-2");
    small.innerText = "Last Name is required";
    small.style.opacity = 1;
    error.style.opacity = 1;
    lastName.style.borderColor = "hsl(0, 100%, 74%)";
  } else{
    let small = document.querySelector(".two");
    let error = document.querySelector(".error-img-2");
    small.innerText = "Last Name is required";
    small.style.opacity = 0;
    error.style.opacity = 0;
  }
  

  if (emailId.value === "") {
    let small = document.querySelector(".three");
    let error = document.querySelector(".error-img-3");
    small.innerText = "Email is required";
    small.style.opacity = 1;
    error.style.opacity = 1;
    emailId.style.borderColor = "hsl(0, 100%, 74%)";
  } else if(!isValid(emailId.value)){
    let small = document.querySelector(".three");
    let error = document.querySelector(".error-img-3");
    small.innerText = "Email is not valid";
    small.style.opacity = 1;
    error.style.opacity = 1;
    emailId.style.borderColor = "hsl(0, 100%, 74%)";
  } else {
    let small = document.querySelector(".three");
    let error = document.querySelector(".error-img-3");
    small.innerText = "Email is required";
    small.style.opacity = 0;
    error.style.opacity = 0;
  }

  if (password.value === "") {
    let small = document.querySelector(".four");
    let error = document.querySelector(".error-img-4");
    small.innerText = "Password is required";
    small.style.opacity = 1;
    error.style.opacity = 1;
    password.style.borderColor = "hsl(0, 100%, 74%)";
  } else{
    let small = document.querySelector(".four");
    let error = document.querySelector(".error-img-4");
    small.innerText = "Password is required";
    small.style.opacity = 0;
    error.style.opacity = 0;
  }
});

function isValid(email) {
  var re =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}
