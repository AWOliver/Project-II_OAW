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
  listDiv.appendChild(listTxt);

  let removeBtn = document.createElement("button");
  removeBtn.classList.add("listBtn");
  listDiv.appendChild(removeBtn);

  addList.appendChild(listDiv);
  listInput.value = "";
}

removeBtn.addEventListener('click', () => {

});