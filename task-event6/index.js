// На несколько кнопок с одним классом повесить обработчик который выведит в консоль текст кнопки


const btns = document.querySelectorAll('.btn'); //находим все кнопки

function handleClick(event) {
  console.log(event.target.textContent); //делаем функцию которая принимает ниже добавленный обработчик обькт ивент в котором есть свойство таргет ведущее на элемент
}

btns.forEach(el => {
  el.addEventListener('click', handleClick); //
});
