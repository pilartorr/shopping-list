
let shoppingList = document.querySelector('#list');

let addForm = document.querySelector('#form');
addForm.addEventListener('submit', function(event){
  event.preventDefault();

  //add a shoppinglist
  let productInput = event.target.querySelector('#add-product').value;
  let itemList = document.createElement('li');
  let contentList = document.createTextNode(productInput);
  itemList.appendChild(contentList);
  shoppingList.appendChild(itemList);

  //add a remove-button
  let removeButton = document.createElement("button");
  let contentButton = document.createTextNode("Remove");
  removeButton.appendChild(contentButton);
  // add the button to itemList
  itemList.appendChild(removeButton);

  //removeItemList with remove-button
  removeButton.addEventListener('click', function(event){
    let itemListDelete = event.target.parentNode;
    shoppingList.removeChild(itemListDelete);
  })

  //add styles bootstrap to the removeButton
  removeButton.classList.add('btn', 'btn-danger', 'd-flex', 'justify-content-between');
  itemList.classList.add('list-group-item','d-flex', 'justify-content-between');

  //delete the value after add in the shoppingList
  event.target.reset();
})
