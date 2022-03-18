let addList = document.querySelector(".listMain");
let addBtn = document.querySelector(".listBtn");
let listInput = document.querySelector(".listTxt");

addBtn.addEventListener("click", (e) => {
  e.preventDefault();

  let listDiv = document.createElement("div");
  listDiv.classList.add("listItem");

  let listTxt = document.createElement("p");
  listTxt.classList.add("listTxt");
  listTxt.innerHTML = listInput.value;

  let removeBtn = document.createElement("button");
  removeBtn.classList.add("itemBtn");
  
  listDiv.appendChild(listTxt);
  listDiv.appendChild(removeBtn);
  addList.appendChild(listDiv);
  listInput.value = "";
});

addList.addEventListener('click', (e) => {

  let removeTarget = e.target;
  if(removeTarget.classList[0] = 'itemBtn') {
    let finalRemove = removeTarget.parentElement;
    console.log(finalRemove);
    finalRemove.remove();
  }
});

//Fixa remove av allt