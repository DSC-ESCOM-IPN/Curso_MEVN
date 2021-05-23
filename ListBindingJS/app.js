const buttonElement = document.querySelector('button');
const inputElement = document.querySelector('input');
const listElement = document.querySelector('ul');

buttonElement.addEventListener('click',() => {
    const valor = inputElement.value;
    const listItemElement = document.createElement('li');
    listItemElement.textContent = valor;
    listElement.appendChild(listItemElement);
    inputElement.value = "";
})