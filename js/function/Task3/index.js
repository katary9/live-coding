const numbersList = [5, 0, 8, 10, -4, 50, 220];

/* метод map */
/* const newArr = arr.map(callback) - создает и возвращает новый массив. Длина нового и исходного массивов равны
   ф-ция callback запустится по очереди для каждого элемента начального массива arr
   элементы массива newArr - это результат вызова callback для каждого элемента arr
   newArr[i] = callback(arr[i]) */

// input: callback
// output: new array

// input: el, index, arr;
// output: new el

// const mapRes = numbersList.map(el => {
//  if( el > 0) {
//     return el ** 2;
//  }else {
//     return el;
//  }
// })

const mapRes = numbersList.map(el => (el > 0 ? el ** 2 : el));
console.log(numbersList);

// find
// input: callback
// output: el or undefined

// input: el, index, arr
// output: bool

const findRes = numbersList.find(el => el > 100);
console.log(findRes);

// forEach
// input: callback
// output: undefined

// input: el, index, arr
// output: undefined

const numberList.forEach(el => {
  if (el > 0) {
    console.log(el);
  }
  // wrong using:
  // el > 0 ? console.log(el) : console.log('Err');

  // correct using:
  // console.log(el > 0 ? el : 'Err');
});

// ternary
// condition ? A : B; 

// reduce
// input: callback, accInitValue (optional)
// output: result (any type)

// input: acc, el, index, array
// output: result (any type)
const transactions = [5, 0, 8, 10, -4, 50, ]

const reduceRes = transactions.reduce((acc, el) => { 
// const prev = arr[index -1]; ==> предыдущий el
// if (el < prev)...
    if (el < 0) {
        acc += el;
    }
    return acc;
}, 0);

// const reduceRes = transactions.reduce((acc, el) => (el < 0 ? acc + el : acc), 0)
console.log(reduceRes);

//задача
//input: arr, callback
//output: arr

//callback
//input: el, index, arr
//output: bool

//algo
//0. create result arr
//1. iterate arr(for)
//2. call callback for each el
//3. if callback true => push el
//4. after iteration return res arr

const filterArrayElements = (arr, callback) => {
  const result = [];
  for (let index = 0; index < arr.length; index++) {
    const callbackRes = callback(arr[index], index, arr);
    if(callbackRes === true) {
      result.push(arr[index]);
    }
  }
  return result;
};

const func = (el, index, entireArr) => {
      if(index > 2 && el > 5){
        return true;
      }
  return false;
    };

console.log(filterArrayElements([1, 222, 5, 10, 77, 4, -1, 7], func));

//
const mapArrayElements = (arr, callback) => {
  const result = [];
  //  for (const item of arr) {
  //   const newItem = callback(item);
  //   result.push(newItem);
  // }
  for (let index = 0; index < arr.length; index++) {
    const newItem = callback(arr[index], index, arr);
      result.push(newItem);
  }
  return result;
};

const numberArr = [5, 4, 8];
const func = mapArrayElements(numberArr, (el) => el ** 2);
console.log(func);