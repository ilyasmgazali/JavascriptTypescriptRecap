// ------ tuple, create custom type, difficult to create in pure js ??
type Student2 =  [string, boolean, number, Date];

let pts ={x:100, y:100}; //           this is not type checked

// ----------- type alias ----------- this is type checked
type pts2 = {
    x:string,
    y?:number //you dont have to have a y figure
};

let points:pts2 = { x:"45"};

// ----------- 