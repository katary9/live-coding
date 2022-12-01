//повесить обработчик чендж на импут и при вводе текста в инпут текст должен вывестись в консоль для этого использ elem.value
const inputEl = document.querySelector('.text-input');

function input() {
  console.log(inputEl.value);
}

inputEl.addEventListener('change', input);