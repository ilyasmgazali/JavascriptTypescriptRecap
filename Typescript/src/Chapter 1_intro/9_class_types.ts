// ----------------------- class type --------------------

class Person{
    id2; //can take out, look at comments section below
    firstName2; //can take out, look at comment section below
    lastName2; //can take out, look at comment section below

    constructor(id2:number, firstName2:string, lastName2:string){
        this.id2 = id2;
        this.firstName2 = firstName2;
        this.lastName2 = lastName2;
    }

    getFullName():string{ //returns type string
        return `${this.firstName2} ${this.lastName2}`
    }
}

let person = new Person(33, "hey", "world");
console.log(person.getFullName() );

/**
    id2; //take off
    firstName2; //take off
    lastName2; //take off 

    constructor(public id2:number, public firstName2:string, public lastName2:string){ //add on here
        this.id2 = id2;
        this.firstName2 = firstName2;
        this.lastName2 = lastName2;
    }
*/