//solution with correct types, instead of all strings
import fs from 'fs';

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
function parseDate(dateString:string): Date { //how to parse a date
    let d = dateString.split('/').map((d:string)=>parseInt(d));
    return new Date( d[3], d[1]-1, d[0] );
}