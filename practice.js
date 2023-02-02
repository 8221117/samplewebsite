const btn = document.querySelector(".btn");

btn.addEventListener("mouseover", mouseOverfn);

function mouseOverfn(e) {
  e.preventDefault();
  btn.style.background = "pink";
  // document.querySelector(".btn").classList.add("sam");
}

//const btn2 = document.querySelector(".btn");

btn.addEventListener("mouseout", mouseoutfn);

function mouseoutfn(e) {
  //e.preventDefault();
  //btn2.classList.add("btn");
  btn.style.background = "";
  //document.querySelector(".btn").classList.add("nandhu");
}

const myForm = document.querySelector("#my-form");
const nameInput = document.querySelector("#name");
const emailInput = document.querySelector("#email");
const msg = document.querySelector(".msg");
myForm.addEventListener("click", onClick);

function onClick(e) {
  e.preventDefault();
  if (nameInput.value === "" || emailInput.value === "") {
    msg.classList.add("error");
    msg.innerHTML = "Please enter all fields";
    setTimeout(() => msg.remove(), 3000);
  } else {
    userName = nameInput.value;
    userEmail = emailInput.value;
    localStorage.setItem("name", userName);
    localStorage.setItem("email", userEmail);
  }
}
