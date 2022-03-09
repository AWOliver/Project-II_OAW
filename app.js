let addList = document.querySelector('.list ul li');
let pressListBtn = document.querySelector('.listBtn');
let inputList = document.querySelector('.listTxt')

pressListBtn.addEventListener('click', function(){
    const createList = document.createElement('LI');
    const listCont = document.createTextNode(inputList.value);

    createList.appendChild(listCont);

    addList.appendChild(createList);
});
