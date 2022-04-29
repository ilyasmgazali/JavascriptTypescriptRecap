# example array destructuring
==============================
colours = ['red', 'orange', 'blue', 'yellow', 'brown']

let [first, second, third] = colours
console.log(first);
console.log(second);
console.log(third);

# desctructuring with rest
============================
colours = ['red', 'orange', 'blue', 'yellow', 'brown']

let [first, second, third, ...rest] = colours
console.log(rest);

# further Reading:
==================
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment