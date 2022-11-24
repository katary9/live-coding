function finishList() {
  const ulElement = document.querySelector('.list');

  const li8 = document.createElement('li');
  li8.textContent = '8';
  ulElement.append(li8);

  const li1 = document.createElement('li');
  li1.textContent = '1';
  ulElement.prepend(li1);

  const liSpecial = document.querySelector('.special');
  const li4 = document.createElement('li');
  li4.textContent = '4';
  liSpecial.before(li4);

  const li6 = document.createElement('li');
  li6.textContent = '6';
  liSpecial.after(li6);
}
finishList();
