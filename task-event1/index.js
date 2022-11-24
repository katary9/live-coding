// const span = document.querySelectorAll('span[style="color: grey; margin-left: 8px"]');
// console.dir(span);
// span.remove();
const divElem = document.querySelector('.rect_div');
const pElem = document.querySelector('.rect_p');
const spanElem = document.querySelector('.rect_span');


const logTarget = (text, color) => {
    const eventEl = document.querySelector('.events-list');
    eventEl.innerHTML += `<span style="color: ${color}; margin-left: 8px;">${text}</span>`;
}

const logGreenDiv = logTarget.bind(null, 'DIV', 'green');
const logGreenP = logTarget.bind(null, 'P', 'green');
const logGreenSpan = logTarget.bind(null, 'SPAN', 'green');

const logGreyDiv = logTarget.bind(null, 'DIV', 'grey');
const logGreyP = logTarget.bind(null, 'P', 'grey');
const logGreySpan = logTarget.bind(null, 'SPAN', 'grey');

divElem.addEventListener('click', logGreyDiv, true);
divElem.addEventListener('click', logGreenDiv);

pElem.addEventListener('click', logGreyP, true);
pElem.addEventListener('click', logGreenP);


spanElem.addEventListener('click', logGreySpan, true);
spanElem.addEventListener('click', logGreenSpan);

function clear() {
  const eventEl = document.querySelector('.events-list');
  eventEl.innerHTML = '';
}
const clearBtn = document.querySelector('.clear-btn');
clearBtn.addEventListener('click', clear);

const attachBtn = document.querySelector('.attach-handlers-btn');
function attach() {
  divElem.addEventListener('click', logGreyDiv, true);
  divElem.addEventListener('click', logGreenDiv);
  pElem.addEventListener('click', logGreyP, true);
  pElem.addEventListener('click', logGreenP);
  spanElem.addEventListener('click', logGreySpan, true);
  spanElem.addEventListener('click', logGreenSpan);
}
attach();
attachBtn.addEventListener('click', attach);

const removeBtn = document.querySelector('.remove-handlers-btn');
function remove() {
  divElem.removeEventListener('click', logGreyDiv, true);
  divElem.removeEventListener('click', logGreenDiv);
  pElem.removeEventListener('click', logGreyP, true);
  pElem.removeEventListener('click', logGreenP);
  spanElem.removeEventListener('click', logGreySpan, true);
  spanElem.removeEventListener('click', logGreenSpan);
}
remove();
removeBtn.addEventListener('click', remove);


// function attach() {
//    divElem.addEventListener('click', logGreyDiv, true);
//    divElem.addEventListener('click', logGreenDiv);

//    pElem.addEventListener('click', logGreyP, true);
//    pElem.addEventListener('click', logGreenP);

//    spanElem.addEventListener('click', logGreySpan, true);
//    spanElem.addEventListener('click', logGreenSpan);
// }

// const attachBtn = document.querySelector('.attach-handlers-btn');
// attachBtn.addEventListener('click', attach);