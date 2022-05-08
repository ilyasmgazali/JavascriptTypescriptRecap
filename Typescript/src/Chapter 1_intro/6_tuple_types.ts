//tuples
const denise = {
    eyes: "brown",
    experience: true,
    level:3, 
    visited: Date()
}
console.log(denise);
console.log(denise['eyes']);

// --------
let frank = [true, 'brown', true, 3, Date()];
console.log(frank[0]);

// ------ tuple, create custom type, difficult to create in pure js ??
type Student =  [string, boolean, number, Date];

let frank2:Student = ["yes", true, 55, new Date()]
console.log(frank2);