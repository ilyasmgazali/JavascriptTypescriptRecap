import {CsvReader} from './aCscReader';
import { ConsoleReport } from './ConsoleReports';
import { FilmCountAnalyser } from './FilmCounterAnalyser';
import { FilmReader } from './FilmReader';
import { HtmlReports } from './HtmlReports';
import {Reporter} from './Reporter';

//composition, rather than inheritance,
//let filmReader = new FilmReader(new CsvReader ('./Typescript/src/CSV_FILM_Reader_Exercise/films.csv'));
//2// let filmReader = new FilmReader(new SomeXMLReader ('./Xml')); //if you want XML data

//------- STATIC METHOD ------------- SAME AS ABOVE, BUT STATIC --------------------
    //let filmReaderStaticVariable = FilmReader.fromCsv('./Typescript/src/CSV_FILM_Reader_Exercise/films.csv');

//reporter.print(analyser.run('Bruce Willis')); //rather than accessing films above
//----------------------------------------------------------------------------------
//console.log(filmReader.films);

//let analyser = new FilmCountAnalyser(filmReader.films); //put the items from above in there
//console.log(analyser.run('Bruce Willis'));
/*
let reporter = new ConsoleReport()
reporter.print(analyser.run('Bruce Willis')); //rather than accessing films above


let analyserHTML = new HtmlReports(); //put the items from above in there
analyserHTML.print(analyser.run('Bruce Willis')); //rather than accessing films above
*/

//MAKE EASIER WITH STATIC METHOD BELOW
let filmReader = FilmReader.fromCsv('./Typescript/src/CSV_FILM_Reader_Exercise/films.csv');
//let analyser = new FilmCountAnalyser(filmReader.films); // replaced with below
let reporter =  new Reporter(
    new ConsoleReport(), //can change to HTML report
    new FilmCountAnalyser(filmReader.films)
);
reporter.run('Bruce Willis');

/**
//simplified from above
let filmReader = FilmReader.fromCsv('./Typescript/src/CSV_FILM_Reader_Exercise/films.csv');
let reporter = Reporter.consoleReporterFilmsCount(filmReader.films);
let reporter2 = Reporter.htmlReporterFilmsCount(filmReader.films);
reporter.run('Bruce Willis');
reporter2.run('Bruce Willis');
*/