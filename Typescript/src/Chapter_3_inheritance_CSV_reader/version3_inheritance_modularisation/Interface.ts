export interface DataReader{
    data: string[][];
    read(filename:string):void;
}