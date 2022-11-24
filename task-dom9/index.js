function squaredNumbers() {
    const li = [...document.querySelectorAll('li')];

   li.map(el => {
     const data = +el.dataset.number;
     console.log(data);

     el.dataset.squaredNumber = Math.pow(data, 2)
   });
}

squaredNumbers();
//   const element = document.querySelectorAll('.number');
//   const arr = Array.from(element);
//   console.dir(arr);
//   const elementData = arr.map(el => {
//     const data = +el.dataset.number;
//     console.dir(data);

//     el.dataset.squaredNumber = Math.pow(data, 2);
//   });

//   const number1 = element.dataset;
//   element.dataset.number = number1.number * number1.number;
//   console.dir(number1);







