// -------------------- object ----------------------
let employee: object;
//employee = 9; //wont work, can obly place object
employee = {};
employee = {
    firtsname: 'john',
    lastname:'Doe',
    age:25
};
let employee2: {   //notice that you are defining so 
    firtsname: string,
    lastname: string,
    age: number
};
let employee3: {firtsname: string,lastname: string,age: number}; //same as above, no equals required
//above allows strict type checking

// -------------------- declaration(left of =) with value(right of =) ----------------------
let employee4: {   
    firtsname: string,
    lastname: string,
    age: number
}= {
    firtsname: 'john',
    lastname:'Doe',
    age:25
};
//