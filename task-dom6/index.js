// function setButton(buttonText) {
//      const bodyEl = document.querySelector('body');
//      bodyEl.innerHTML = buttonText;
//     //    bodyEl.textContent = buttonText;
//     //  return bodyEl.innerHTML;
//      // console.dir(bodyEl.innerHTML);
//      // console.dir(bodyEl.textContent);
//    }

//    setButton('<button>button text</button>');

function setButton(buttonText) {
  const bodyEl = document.querySelector('body');
  const btn = '<button></button>';
  bodyEl.innerHTML = btn;

  const btnEl = document.querySelector('button');
  btnEl.textContent = buttonText;
  return btnEl.textContent;
}
setButton('button text');

// удалить элл установка как пустая строка 
function clearList() {
  const listEl = document.querySelector('.categories');
  const str = '';
  listEl.innerHTML = str;
}