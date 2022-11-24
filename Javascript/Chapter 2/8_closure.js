# global scope
=============
const age = 45; //const has better scope

function doubleAge() {
  return age * 2;
}

console.log(doubleAge());



# local scope
==============
var name = "Tony";

function printName() {
  var name = "Susan"; //----------------- local function does not have global scope
  return name;
}

console.log(name);

# outer function scope //----------------- nested functions, have access to parent functions
======================
function urlBuilder(scheme) {
  return function (domain) { //-------------------------two anonymous/no name function
    return function (path) {
      return `${scheme}://${domain}/${path}`;
    };
  };
}

console.log(urlBuilder('https')('codehance.com')('courses')); // note to call inner, doesnt use '.'


# block scope
=============
{
  var name = "Susan";
  // let name = "Susan";
  // const name = "Susan";
}

console.log(name);

# further reading
=================
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Closures