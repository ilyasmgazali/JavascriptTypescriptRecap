import fs from 'fs';

let sample = [ //this is the format that we want
`Comedy,238230,Fear of a Black Hat,03/06/1994,Larry B. Scott`,
`Animation,130178411,The Peanuts Movie,06/11/2015,Noah Schnapp`
];

console.log(sample[1]);

let films= fs
    .readFileSync('./Typescript/src/CSV_FILM_Reader_Exercise/films.csv', {encoding: 'utf-8'})
    .split('\n')
    .map( (row:string): string[] =>{
        return row.split(',');
    });
    
console.log(films); 

for (let film of films){
    console.log(film[4]);//print every 4th item, i.e. the films
}

let count:number =0; // loop level scope
let actor: string = 'Nicolas Cage';

for (let film of films){
    if ( film[4] === 'Bruce Willis'){
        count++;
    }
}

console.log(`${actor} appeared in ${count} films`); // loop level scope