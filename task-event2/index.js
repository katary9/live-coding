//чек бокс выведи в консоль при отметки тру если не отмечен фолс

const inpytEl = document.querySelector('.task-status');

function checkbox() {
  console.log(inpytEl.checked);
}

inpytEl.addEventListener('change', checkbox);
