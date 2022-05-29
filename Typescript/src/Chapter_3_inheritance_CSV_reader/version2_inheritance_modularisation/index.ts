//import fs from 'fs'; //DONT NEED TO READ FILE, 
import { ConsoleReport } from './bConsoleReport';
import {CsvReader2} from './cCsvReader2';
import { FilmCountAnalysis } from './aFilmCountAnalysis';
import { FilmReader } from './cFilmReader';
import { HtmlReports } from './bHtmlReport';

//cant create an instance of a class if abstract/ :. error
const readerVar  = new FilmReader('./films.csv');
const analyser = new FilmCountAnalysis(readerVar.data2);

//const cReport = new ConsoleReport(analyser.run('Geena Davis')); // <-- REPLACES --> //console.log(analyser.run('Bruce Willis'));
//cReport.print();

const htmlReport = new HtmlReports(analyser.run('Geena Davis'));
htmlReport.print();

// ------------ BELOW IS REPLACED WITH ABOVE( CONSOLE REPORT ) ---------------
//let count:number = 0; // loop level scope
//let actor: string = 'Nicolas Cage';
//
//for (let film of readerVar.data){ //replaced with Class above
//    if (film[4] === 'Bruce Willis'){
//        count++;
//    }
//};
//
//console.log(`${actor} appeared in ${count} films`); // loop level scope