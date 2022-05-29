import fs from 'fs';//for file reader
export class CsvReader{//inheritance class //if it is abstract cant create an instance of the class
    data:any[]=[];
    constructor(public filename:  string){
        this.data = this.read(filename);
    }
    read (filename:string):any[]{
        return fs
            .readFileSync(this.filename, {encoding: 'utf-8'})
            .split('\n')
            .map( (row:string): string[] =>{
                return row.split(',');
            })
            .map((col)=>{
                    return [col[0], parseInt(col[1]), col[3], this.parseDate(col[3]), col[4]]; //added parse date
            });
        }
        parseDate(dateString:string): Date { //how to parse a date
            let d = dateString.split('/').map((d:string)=>parseInt(d));
            return new Date( d[3], d[1]-1, d[0] );
        }    
}