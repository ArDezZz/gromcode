//input: obj1, obj2
//output: boolean

//algo
//1. get keys, get values
//2. check keys length
//3. compare every key/value with .every method
//**  compare key/value with .some method, is some not equal - false
//====================1 option=========================
// function compareObjects(obj1, obj2) {
//   console.log(JSON.stringify(obj1));
//   return JSON.stringify(obj1) === JSON.stringify(obj2);
// }

//=====================2 option=========================
function compareObjects(obj1, obj2) {
  const result = Object.keys({ ...obj1, ...obj2 });
  if (Object.keys(obj1).length != Object.keys(obj2).length) {
    return false;
  }
  return result.every(key => obj1[key] === obj2[key]);
}

// examples
const obj1 = {
  name: 'Tom',
  age: 17,
  last: 15,
};

const obj2 = {
  name: 'Bob',
  age: 17,
};

const obj3 = {
  name: 'Bob',
  age: 17,
  student: false,
};

const obj4 = {
  name: 'Tom',
  age: 17,
};
const obj5 = {
  name: 'Tom',
  age: 17,
  last: 15,
};

console.log(compareObjects(obj1, obj2)); // ==> false
console.log(compareObjects(obj2, obj3)); // ==> false
console.log(compareObjects(obj1, obj4)); // ==> false
console.log(compareObjects(obj1, obj5)); // ==> true
