// Variables in Js can be defined using: const, let, var
// =====================================================

//let  - function level scope
let name = "Kingsley";
name = "James";
console.log(name);

//var  - scope more linient, best for out of scope
var name2 = "Kingsley";
name = "James";
console.log(name);

//const - cant change
const NAME = "Kingsley";
NAME = "James";
console.log(NAME); // its const

//
// difference in scope rules
// =========================
{
  var moo = "Moo";
  let baz = "Bazz";
}
console.log(moo); //let is function deep
console.log(baz); //var is

// # further reading:
// ==================
// https://developer.mozilla.org/en-US/docs/Glossary/Primitive
