
//при клике на кнопку отправленное сообщение в инпуте вывести в консоле
const btnElem = document.querySelector('.search__btn');
const inputElem = document.querySelector('.search__input');

function input() {
  console.log(inputElem.value);
}

btnElem.addEventListener('click', input);
