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
                return  [col[0], parseInt(col[1]), col[2], parseDate(col[3]), col[4]];
            }
        )
    }
}