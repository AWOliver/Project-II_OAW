let addList = document.querySelector(".listMain");
let listBtn = document.querySelector(".listBtn");
let listInput = document.querySelector(".listTxt");

function addItem() {
  let newLi = document.createElement("li");
  newLi.innerText = listInput.value;

  addList.appendChild(newLi);
}

listBtn.addEventListener("click", addItem);
