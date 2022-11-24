function getSection(num) {
  const spanElem = document.querySelector(`span[data-number="${num}"]`);
  const div = spanElem.closest('.box');
  return div.dataset.section;
}

 getSection(3);