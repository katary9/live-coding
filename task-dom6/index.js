export function setButton (buttonText) {
    const bodyEl = document.querySelector('body');
    bodyEl.innerHTML = buttonText;
    return bodyEl.innerHTML;
    // console.dir(bodyEl.innerHTML);
    // bodyEl.textContent = buttonText;
    // console.dir(bodyEl.textContent);

}

setButton('<button>buttontext</button>');