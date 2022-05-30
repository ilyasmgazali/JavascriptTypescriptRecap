export function parseDate(dateString:string): Date { //how to parse a date
    let d = dateString.split('/').map((d:string)=>parseInt(d));
    return new Date( d[3], d[1]-1, d[0] );
}