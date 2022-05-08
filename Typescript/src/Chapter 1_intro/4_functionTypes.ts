// -------------------- params explicit ----------------------
const add = (a:number ,b:number ) => {
    return a+b;
}
console.log( add(1,4) );
// -------------------- params explicit, with explicit return types ----------------------
// -------------------- not a substitute for testing ----------------------
const add2 = (a:number ,b:number ): number => {
    return a+b;
}
console.log( add2(1,4) );

// -------------------- not a substitute for testing ----------------------
const logger = (messege:string):void => {
    console.log(messege);
}


// --------------------       :any - try to stay away 
