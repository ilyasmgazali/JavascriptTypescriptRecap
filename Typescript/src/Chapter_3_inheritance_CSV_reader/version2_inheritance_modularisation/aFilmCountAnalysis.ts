import { Analyzer } from "./aAnalyzer";
import { FilmData } from "./FilmData";
export class FilmCountAnalysis extends Analyzer<string, FilmData[]>{
    run(actor: string):string {
        let count:number = 0; // loop level scope
        //let actor: string = 'Nicolas Cage';
        for (let film of this.data){ //data from analyaw -----------
            if (film[4] === actor){
                count++;
            }
        };
        return `${actor} appeared in ${count} films`; // loop level scope
    }
}