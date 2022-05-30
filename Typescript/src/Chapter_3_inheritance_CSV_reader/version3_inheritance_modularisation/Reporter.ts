//report and print in one

import { Analyser, Reportable } from "./aInterface"
import { ConsoleReport } from "./ConsoleReports";
import { FilmCountAnalyser } from "./FilmCounterAnalyser";
import { FilmData } from "./FilmData";
import { HtmlReports } from "./HtmlReports";

export class Reporter{
    constructor(
        public reporter: Reportable<String,void>,
        public analyser: Analyser<string>
    ){}
    static consoleReporterFilmsCount(films: FilmData[]): Reporter { //static method, that is returning its own type
        return new Reporter(new ConsoleReport(), new FilmCountAnalyser(films));
    }
    static htmlReporterFilmsCount(films: FilmData[]): Reporter { //static method, that is returning its own type
        return new Reporter(new HtmlReports(), new FilmCountAnalyser(films));
    }
    run(name:string):void{
        this.reporter.print(this.analyser.run(name));
    }
}