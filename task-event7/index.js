const btns = document.querySelectorAll('.pagination__page');

function handleClick(event) {
  console.log(parseInt(event.target.dataset.pageNumber));
}

btns.forEach(el => {
  el.addEventListener('click', handleClick)
});

