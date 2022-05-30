import { DataReader } from './aInterface';
import fs from 'fs';

export class CsvReader implements DataReader{
    data:string[][] = [];
    constructor(public filename: string){
        this.read(filename)
    }
    read(filename:string):void{
        this.data = fs
        .readFileSync(this.filename,  {encoding: 'utf-8'})
        .split('\n')
        .map( 
            (row: string): string[] => {
                return row.split(',');
            }
        );
        //console.log();
    }
}