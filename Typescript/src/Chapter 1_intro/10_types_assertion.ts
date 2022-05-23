// Type Assertions

let employ = {};
employ.name = 'Paul'; //.name wont work

//above wont work, interface required

//implicit type
interface Employee {
    name: string;
    code: string;
}
//example of an type assertion
let employee10 = <Employee> {}; // OR // let employee = {} as Employee
employee10.name = 'Paul'

