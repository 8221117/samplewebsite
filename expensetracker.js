const myForm = document.querySelector("#myform");
const expenseAmount = document.querySelector("#expenseamount");
const chooseDescription = document.querySelector("#choose-description");
const category = document.querySelector("#Category");
const msg=document.querySelector(".msg")
myForm.addEventListener("submit", onClick);

function onClick(e) {
  e.preventDefault();
  if(expenseAmount.value === "" || chooseDescription.value === "" || chooseDescription.value === "" || category.value === "") 
  {
    msg.classList.add("error");
    msg.innerHTML="Please enter all fields";
    setTimeout(()=>msg.remove(),3000);
  }
  else{
    Amount=expenseAmount.value;
    Description=chooseDescription.value;
    Category=category.value;

    var expenseTrackerDetails = {
      getAmount:Amount,
      getDescription:Description,
      getCategory:Category
    };

    let expensetracker_serialized= JSON.stringify(expenseTrackerDetails);
    localStorage.setItem(expenseTrackerDetails.getAmount,expensetracker_serialized);
    showOnscreen(expenseTrackerDetails);

    let expensetracker_Deserialized = JSON.parse(localStorage.getItem("expense"));
    console.log(expensetracker_Deserialized);

    function showOnscreen(expenseTrackerDetails){
      const parentEle = document.getElementById("finaltracking");
      const childEle = document.createElement("li");
      childEle.className = "list-group-item";
      childEle.textContent =expenseTrackerDetails.getAmount+"-"+expenseTrackerDetails.getDescription+"-"+expenseTrackerDetails.getCategory;
      

      const delButton = document.createElement("input");
      delButton.className ="btn btn-danger";
      delButton.type="button";
      delButton.value="delete"

      delButton.onclick = () => {
        localStorage.removeItem(expenseTrackerDetails.getAmount);
        parentEle.removeChild(childEle);
      };

    

      const editbutton = document.createElement("input");
      editbutton.className = "btn btn-warning";
      editbutton.type="button";
      editbutton.value="edit"


      editbutton.onclick =() => {
        localStorage.removeItem(expenseTrackerDetails.getAmount);
        parentEle.removeChild(childEle);

        expenseAmount.value=expenseTrackerDetails.getAmount;
        chooseDescription.value=expenseTrackerDetails.getDescription;
        category.value=expenseTrackerDetails.getCategory;
      }

      childEle.appendChild(editbutton);
      childEle.appendChild(delButton);

      parentEle.appendChild(childEle);
    }
    

  }
}
