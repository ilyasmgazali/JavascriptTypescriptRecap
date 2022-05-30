import {DataReader} from './aInterface';
import {parseDate} from './util';
import {FilmData} from './FilmData';
import { CsvReader } from '../CsvReader1';
export class FilmReader{
    films: FilmData[] = [];
    constructor(public reader:DataReader){
        this.load();
    }
    static fromCsv(filename:string):FilmReader{
        return new FilmReader(new CsvReader(filename));
    }
    load():void {
        this.films = this.reader.data
        .map(
            (col:string[]): FilmData => {
                //console.log (col[0], col[1], col[2], col[3], col[4]); 
                return  [col[0], parseInt(col[1]), col[3], parseDate(col[2]), col[4]];
            }
        )
    }
}