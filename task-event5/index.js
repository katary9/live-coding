
// при первом клике на кнопку в консоль слово при втором клике отмена
const btnEl = document.querySelector('.single-use-btn');

function btn() {
  console.log('clicked');
}

function btnnon() {
  btnEl.removeEventListener('click', btn);
}

btnEl.addEventListener('click', btn);
btnEl.addEventListener('click', btnnon);
