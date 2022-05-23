//solution with correct types, instead of all strings

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
    })
    .map((col)=>{
            return [col[0], parseInt(col[1]), col[3], parseDate(col[3]), col[4]]; //added parse date
        }
    );
    
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

function parseDate(dateString:string): Date { //how to parse a date
    let d = dateString.split('/').map((d:string)=>parseInt(d));
    return new Date( d[3], d[1]-1, d[0] );
}

console.log(`${actor} appeared in ${count} films`); // loop level scope