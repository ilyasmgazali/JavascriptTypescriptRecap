"use strict";
// ---------------- interface types ----------------
function getFullName(person) {
    return `${person.firstName} ${person.lastName}`; //a + b
}
let david = {
    id: 123,
    firstName: 'David',
    lastname: 'Olu' //b
};
const fullname = getFullName(david);
console.log(fullname);
function getFullName2(person) {
    return `${person.firstName} ${person.lastName}`; //a + b\
}
let david2 = {
    id: 123,
    firstName: "hello",
    lastName: "world"
};
const fullname2 = getFullName(david2);
console.log(fullname);
