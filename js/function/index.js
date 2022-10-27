//
function getSenseOfLife() {
  return 42;
}

//option 1
const res = getSenseOfLife();
console.log(res);

//option 2
console.log(getSenseOfLife());

//func 2
function getSquared(num) {
  return num ** 2;
}

console.log(getSquared(5)); // ==> 25
console.log(getSquared(0));
console.log(getSquared(-7));

//
function sum(a, b) {
  return a + b;
}

console.log(sum(3, 8));
console.log(sum(3, -8));
console.log(sum(3, 0));
console.log(sum(3, null));

//
function getMessage(age) {
  console.log(`I am ${age} years old`);
}

console.log(getMessage(-9));
console.log(getMessage(0));
console.log(getMessage(null));

//
const mult = (a, b) => {
  return a * b;
};

console.log(mult(2, -7));
console.log(mult('2', '-7'));
console.log(mult(0, -7));
console.log(mult(9, -4));

//
const getMagicNumber = () => 17;
console.log(getMagicNumber());
console.log(getMagicNumber(20));
