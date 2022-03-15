let addList = document.querySelector(".listMain");
let listBtn = document.querySelector(".listBtn");
let listInput = document.querySelector(".listTxt");

let items = [];

listBtn.addEventListener("click", () => {
  addItem(listInput.value);
});

function addItem(text) {
  items.push(text);
  updateList();
  listInput.value = "";
}

function updateList() {
  addList.innerHTML = "";
  items.forEach((item) => {
    let newLi = document.createElement("li");
    newLi.innerHTML = item;
    addList.append(newLi);
  });
}
