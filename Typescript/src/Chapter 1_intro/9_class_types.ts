// ----------------------- class type --------------------

class Person{
    id2;
    firstName2;
    lastName2;

    constructor(id2:number, firstName2:string, lastName2:string){
        this.id2 = id2;
        this.firstName2 = firstName2;
        this.lastName2 = lastName2;
    }
    getFullName():string{ //returns type string
        return `${this.firstName2} ${this.lastName2}`
    }
        
}