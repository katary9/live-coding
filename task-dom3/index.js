export function getItemsList() {
  const elementsList = document.querySelectorAll('.technology');
  console.dir(elementsList);
  return elementsList;
}
export function getItemsArray() {
    const elements = document.querySelectorAll('.tool');
    const elementsArray = Array.from(elements);
    console.dir(elementsArray);
    return elementsArray;
 }

 getItemsList();
 getItemsArray();