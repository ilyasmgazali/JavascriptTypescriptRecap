When ... appears on the right-hand side of an assignment, it's known as the spread operator.

# example of spread
-------------------
const oneToFive = [1, 2, 3, 4, 5];
const oneToTen = [...oneToFive, 6, 7, 8, 9, 10];
console.log(oneToTen); //-------------------------spreads additions

# spread property
=================
let address = {
  street: '26 High Street',
  postalCode: 'SE14'
};

address = { ...address, city: 'London' }
console.log(address)

# positioning doesn't matter
============================
address = { city: 'London', ...address }
console.log(address)

# further reading
=================
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax


// put in what you need