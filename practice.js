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
myForm.addEventListener("submit", onClick);

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
    localStorage.setItem(userDetails.getuserMail, userDetails_serialized);
    showOnscreen(userDetails);

    let userDetails_deserialized = JSON.parse(localStorage.getItem("user")); // to get back the user details originally as object form.
    console.log(userDetails_deserialized);

    // show the user data on the screen .
    //const parentEle = document.getElementById("users");
    function showOnscreen(userDetails) {
      const parentEle = document.getElementById("users");
      const childEle = document.createElement("li");
      childEle.className = "list-items";
      childEle.textContent =
        userDetails.getuserName + "-" + userDetails.getuserMail;
      // CREATING DELETE BUTTON
      const delButton = document.createElement("input");
      delButton.className = "deletebtn delete";
      delButton.type = "button";
      delButton.value = "Delete";
      //adding text node to delete element
      //delEle.appendChild(document.createTextNode("delete"));
      delButton.onclick = () => {
        localStorage.removeItem(userDetails.getuserMail);
        // localStorage.removeItem(userDetails.getuserName);
        // localStorage.getItem(userDetails.getuserName);
        parentEle.removeChild(childEle);
      };
      //create edit button
      const editButton = document.createElement("input");
      editButton.type = "button";
      editButton.value = "edit";

      editButton.onclick = () => {
        localStorage.removeItem(userDetails.getuserMail);
        // localStorage.removeItem(userDetails.getuserName);
        // localStorage.getItem(userDetails.getuserName);
        parentEle.removeChild(childEle);
        nameInput.value = userDetails.getuserName;
        emailInput.value = userDetails.getuserMail;
      };
      childEle.appendChild(delButton);
      childEle.appendChild(editButton);
      parentEle.appendChild(childEle);
      //parentEle.addEventListener("click", removeli);
      // REMOVE LI on clicking delete button
      /*function removeli(e) {
        //e.preventDefault();
        if (e.target.classList.contains("delete")) {
          if (confirm("Are you sure")) {
            var childEle = e.target.parentElement;
            parentEle.removeChild(childEle);
          }
        }*/

      /** wrong method var p = document.createElement("p");
    p.textContent = userDetails.getuserName + "-" + userDetails.getuserMail;

    var li = document.createElement("li");
    var li = document.getElementById("li-form");

    li.appendChild(p);

    console.log(li);**/
    }
  }
}
