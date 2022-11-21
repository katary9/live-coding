export const setTitle = text => {
    const titleEl = document.querySelector('.title');
    titleEl.textContent = text;
    return text;
}

setTitle('text text');