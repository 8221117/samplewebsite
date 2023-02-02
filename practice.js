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
    //localStorage.setItem("name", userName);
    // localStorage.setItem("email", userEmail);

    // to get in json format
    var userDetails = {
      getuserName: userName,
      getuserMail: userEmail,
    };

    //console.log(userDetails);
    let userDetails_serialized = JSON.stringify(userDetails);
    localStorage.setItem("user", userDetails_serialized);

    let userDetails_deserialized = JSON.parse(localStorage.getItem("user")); // to get back the user details originally as object form.
    console.log(userDetails_deserialized);
  }
}
