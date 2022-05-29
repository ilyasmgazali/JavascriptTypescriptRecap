import {CsvReader} from './aCscReader';
import { ConsoleReport } from './ConsoleReports';
import { FilmCountAnalyser } from './FilmCounterAnalyser';
import { FilmReader } from './FilmReader';
import { HtmlReports } from './HtmlReports';

//composition, rather than inheritance,
let filmReader = new FilmReader(new CsvReader ('./Typescript/src/CSV_FILM_Reader_Exercise/films.csv'));
//let filmReader = new FilmReader(new SomeXMLReader ('./Xml')); //if you want XML data

//console.log(filmReader.films);
let analyser = new FilmCountAnalyser(filmReader.films); //put the items from above in there
//console.log(analyser.run('Bruce Willis'));

let reporter = new ConsoleReport()
reporter.print(analyser.run('Bruce Willis')); //rather than accessing films above

let analyserHTML = new HtmlReports(); //put the items from above in there
analyserHTML.print(analyser.run('Bruce Willis')); //rather than accessing films above