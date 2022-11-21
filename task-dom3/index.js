function getItemsList() {
  const elementsList = document.querySelectorAll('.technology');
  console.dir(elementsList);
  return elementsList;
}
 function getItemsArray() {
    const elements = document.querySelectorAll('.too');
    const elementsArray = Array.from(elements);
    console.dir(elementsArray);
    return elementsArray;
 }

 getItemsList();
 getItemsArray();