import { CsvReader2 } from './cCsvReader2';
import {parseDate} from './util';
import { FilmData } from './FilmData';
export class FilmReader extends CsvReader2<FilmData>{
    //<(string|number|Date)[]>
    mapRow(col: string[]):(string|number|Date)[]{//update mapRow(col: string[]){
        return [col[0], parseInt(col[1]), col[2], parseDate(col[3]), col[4]]; //added parse date
    }
}