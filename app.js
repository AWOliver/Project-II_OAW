let addList = document.querySelector('.listMain');
let listBtn = document.querySelector('.listBtn');
let listInput = document.querySelector('.listTxt');

listBtn.addEventListener('click', addItem);

function addItem(event) {
    event.preventDefault();

    let newLi = document.createElement('LI');
    newLi.innerText = listInput.value;

    addList.appendChild(newLi);
 }