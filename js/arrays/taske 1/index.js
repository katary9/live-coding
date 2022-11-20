const numberList1 = [1, 2, 3, 77, 5];
// const numberList2 = new Array();
// console.log(numberList2);

//input: none
//output: number
console.log('BEFORE POP', numberList1);
const popRes = numberList1.pop();
console.log(popRes);

console.log('AFTER POP', numberList1);

// input: number (any type)
// output: number (new length)
const numberList2 = [1, 2, 3, 77, 5];
console.log('BEFORE PUSH', numberList2);

const pushRes = numberList2.push(100);
console.log(pushRes);

console.log('AFTER PUSH', numberList2);

// input: number (any type)
// output: number (new length)
const numberList3 = [1, 2, 3, 77, 5];
console.log('BEFORE UNSHIFT', numberList3);

const unshiftRes = numberList2.unshift(100);
console.log(unshiftRes);

console.log('AFTER UNSHIFT', numberList3);

// ...
const anotherNumberList = [5, 0, 8, 10, -4, 50, 220];
// input: callback
// output: array

//callback
// input: el, index, arr
// output: bool

// const filterRes = anotherNumberList.filter(function filterCallback(el) { return el > 100});;
// console.log(filterRes);

const filterRes = anotherNumberList.filter(el => el > 100);
console.log(filterRes);