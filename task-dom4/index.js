export function getTitle() {
    const titleElement = document.querySelector('.title');
    const result = titleElement.textContent;
    return result;
};

export function getDescription() {
    const descriptionEl = document.querySelector('.about');
    // console.dir(descriptionEl.innerText);
    return descriptionEl.innerText;
};

export function getPlans() {
    const plansEl = document.querySelector('.plans');
    return plansEl.innerHTML;
};

export function getGoal() {
    const goalEl = document.querySelector('.goal');
    return goalEl.outerHTML;
}

getTitle();
getDescription();
getPlans();
getGoal();