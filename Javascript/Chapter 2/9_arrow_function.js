// # traditional function
//======================

// normal function
function add(num1, num2) {
  return num1 + num2;
}
console.log(add(1, 10));

//# arrow function
// ================
const add = (num1, num2) => {
  return num1 + num2;
};
console.log(add(1, 10));

//# arrow function implicit return //---------------- i.e dont require to write return statement
//================================
const add = (num1, num2) => num1 + num2;
console.log(add(1, 10));

//# arrow function single arg //--------------- single args dont require any () parenthesis
//===========================
const square = (num) => num * num;
console.log(square(10));

//# further reading
//=================
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions
