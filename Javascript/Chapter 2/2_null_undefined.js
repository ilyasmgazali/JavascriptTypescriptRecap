That means while null represents an empty value (but still a value), undefined represents the total absence of a value. 

# null is set
=============
let name = null; //------- null is like a placeholder
console.log(name)

# undefined
===========
let name;
console.log(name);

let obj = { greeting: 'hello world' };
console.log(obj.doesNotExist); //---------- does not have property/key/value "doesNotExist"

# check if null or undefined //this 
============================
let amount = null;
//

if (amount == null || amount == undefined) {
  console.log('I am null or undefined');
} //can be commented out to extend if statement, to the same as the nullish operation below
//} else {
//  console.log(aniybt)
//}
// - if else, is same as below, the nullish operator can replace code above


# checking for null or undefined
# nullish operator //short and concise
===================
let amount = null;
console.log (  amount ?? 'no value given'  ); //-------- does not permanently change value //  ?? means null or identified, NULLISH OPERATOR

# further reading
=================
https://stackoverflow.com/questions/5076944/what-is-the-difference-between-null-and-undefined-in-javascript