// ---------------- interface types ----------------

function getFullName(person:any){
    return `${person.firstName} ${person.lastName}`; //a + b
}
let david = {
    id: 123,
    firstName: 'David', //a    //if somebody changes the name of firstname, SEE BELOW
    lastname: 'Olu' //b
}
const fullname = getFullName(david);
console.log(fullname);

// -------------------- infterface instread


interface Person {
    id: number,
    firstName: string, //a    //if somebody changes the name of firstname, SEE BELOW
    lastName: string //b
}
function getFullName2(person:Person){
    return `${person.firstName} ${person.lastName}`; //a + b\
}   
let david2:Person = {
    id: 123,
    firstName: "hello",
    lastName: "world"
};
const fullname2 = getFullName(david2);
console.log(fullname);