// How to work on tech tasks. Step by step guide

// 1. Learn requirement (WHAT?)---умова
// 2. Create step by step algo (& input/output for functions) (HOW?)---алгаритм
// 3. Write draft solution & testing ---написать то что будет работать, черновой вариант
// 4. Refactoring & final testing -> final solution---рефакторинг

//algo
// 1 interate 2.. num
// 2 check if number is peime
// 2/0 interate 1 ..number
// 2/1 if number % index === 0 -> count ++
// 2/2 if counter >= 2 -> is not prime
// 3 if prime--> console
// function getPrimes(num) {
//   c: for (let i = 2; i <= num; i++) {
//     for (let j = 2; j < i; j++) {
//       if (i % j === 0) {
//         continue c;
//       }
//     }
//     console.log(i);
//   }
// }
// getPrimes(10); //2 3 5 7

//////
// function getPrimes(num) {
//   for (let number = 2; number <= num; number += 1) {
//     // console.log('CHECKING NUMBER IS PRIME ' + number)
//     let counter = 0;

//     for (let index = 1; index <= number; index += 1) {
//       // console.log('STEP ' + index)
//       if (number % index === 0) {
//         // console.log('COUNTER FOUND' + index);
//         counter += 1;
//       }
//     }
//     // console.log('FOR NUMBER ' + number + ' COUNTER FOUND' + counter);
//     if (counter === 2) {
//       console.log(number);
//     }
//   }
// }
//2.
// function getPrimes(num) {
//   c: for (let i = 2; i <= num; i++) {
//     for (let j = 2; j < i; j++) {
//       if (i % j === 0) {
//         continue c;
//       }
//     }
//     console.log(i);
//   }
// }

//3.
function isPrime(number) {
  for(let index = 2; index < number; index += 1){
    if (number % index === 0) {
      return false;
    }
  }
  return true;
}

function getPrimes(num) {
  for (let number = 2; number <= num; number += 1) {
    if(isPrime(number)){
      console.log(number);
    }
  }
}
getPrimes(10);
getPrimes(10);
getPrimes(15);
getPrimes(11);