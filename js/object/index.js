// create obj
// read
// modify = add

// если мы хотим добавить или обновить свойства в обьекте то используем spred оператор

// 1
// input obj, key, value
// output new obj
function addPropertyV1(obj, key, value) {
  obj[key] = value;
  return obj;
}
// 2
// Obj.assign
// input target, sourceObj ...sourceObjN
// output obj
function addPropertyV2(obj, key, value) {
  return Object.assign(obj, { [key]: value });
}
// 3
function addPropertyV3(obj, key, value) {
  return Object.assign({}, obj, { [key]: value });
}

// 4
function addPropertyV4(obj, key, value) {
  const result = { ...obj, [key]: value };
  return result;
}

// rest operator
function sum(...args) {
  console.log(args);
}

console.log(sum(1, 9, 0));
console.log(sum());

//
const userObj = { name: 'Jann', balance: 100, city: 'Kyiv' };
const { name, ...obj } = userObj; // остается все то что не входит в выбронную переменную, в данном случаи name

console.log(obj);

// arr
const arr = [1, 2, 3, 4];
const [num1, num2, ...newArr] = arr; // const [, , ...mewArr] = arr;
console.log(newArr); // [3, 4]
// test
const obj1 = {};
console.log(addPropertyV4(obj1, 'name', 'vasya'));
console.log('after', obj1);

const obj2 = { name: 'vasya' };
console.log(addPropertyV4(obj2, 'age', 20));
console.log('after', obj2);

const obj3 = { name: 'vasya' };
console.log('before', obj3);
console.log(addPropertyV3(obj3, 'name', 'Ivan'));
console.log('after', obj3);
