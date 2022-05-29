import fs from 'fs';
import {CsvReader} from './CsvReader1';

//cant create an instance of a class if abstract/ :. error
const readerVar  = new CsvReader('/Typescript/src/CSV_FILM_Reader_Exercise/films.csv');
//const readerVar  = new CsvReader('films.csv');

let count:number = 0; // loop level scope
let actor: string = 'Nicolas Cage';
for (let film of readerVar.data){
    if (film[4] === 'Bruce Willis'){
        count++;
    }
};

console.log(`${actor} appeared in ${count} films`); // loop level scope