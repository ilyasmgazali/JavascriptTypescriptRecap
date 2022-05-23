// -------------------- string and numbers ----------------------

let project = 5; // default type number 

let drive: string = 'Fast' //explicitly declaring it

// you can not do this as its a number 
//drive = 9; 

// -------------------- ANY TYPE ----------------------
let nothing = null; 
let notExist = undefined; //any type

// -------------------- more defaults and arrays  ----------------------
let now: Date = new Date(); //uses date, would be defaulted to date anyway
let myArray: number[] = [1,2,3];
let colours: (string | number)[] = ["red","blue",99];

// -------------------- ANY TYPE ----------------------
let threeDimensions: string[][][] = [[['one', 'two']]]

console.log("hello world");