export function setTitle(text) {
    const titleEl = document.querySelector('.title');
    titleEl.textContent = text;
    return titleEl.textContent;
}

setTitle('text');