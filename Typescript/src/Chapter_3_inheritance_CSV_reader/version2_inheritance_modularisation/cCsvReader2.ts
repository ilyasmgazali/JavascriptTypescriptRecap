import fs from 'fs';//for file reader
import {parseDate} from './util';
export abstract class CsvReader2<T>{//inheritance class //if it is abstract cant create an instance of the class
    data2:T[]=[]; //update type
    
    constructor(public filename:  string){
        this.data2 = this.read(filename);
    }
    
    abstract mapRow(row: string[]): any;//abstract method //must be implemented
    
    read (filename:string):T[]{ //update type
        return fs
            .readFileSync('./Typescript/src/CSV_FILM_Reader_Exercise/films.csv', {encoding: 'utf-8'})
            .split('\n')
            .map( (row:string): string[] =>{
                return row.split(',');
            })
            .map(this.mapRow);//abstract method
    }
}