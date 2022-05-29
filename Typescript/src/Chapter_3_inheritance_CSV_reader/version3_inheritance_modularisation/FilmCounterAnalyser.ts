import {Analyser} from './aInterface';
import {FilmData} from './FilmData';

export class FilmCountAnalyser implements Analyser<string>{
    constructor(public films: FilmData[]){}
    run(actor: string): string {
        let count:number=0;

        for(let filmVar of this.films){
            if(filmVar[4]===actor){
                count++
            }
        }
        return `${actor} as appeared in ${count} films`;
    }
}