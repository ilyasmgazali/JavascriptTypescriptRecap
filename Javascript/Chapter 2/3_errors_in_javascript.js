# type error
============
[].length()

# syntax error
==============
console.log('hello)

# reference error
console.log(doesNotExist)

# manually throwing errors
==========================

name = 'kingsley'

if(typeof name !== 'string') { //------------------ typeof
  throw new Error('name must be a string');
} else {
  console.log(`My name is ${name}`);
}

# catching errors //--------------------------------- try catch,this is a custom error
=================
try {
  if (typeof name !== 'string') {
    throw new Error('name must be a string');
  } else {
    console.log(`My name is ${name}`);
  }
} catch (e) {
  console.log(e.message);
}

# catching errors //--------------------------------- try catch, this will find the error(syntax) for you
=================
try {
    console.log('hello);
} catch (e) {
  console.log(e.message);
}

# further reading:
==================
https://developer.mozilla.org/en-US/docs/web/javascript/reference/global_objects/error