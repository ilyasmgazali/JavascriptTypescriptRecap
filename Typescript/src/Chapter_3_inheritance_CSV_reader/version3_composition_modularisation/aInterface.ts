export interface DataReader{
    data: string[][];
    read(filename:string):void;
}

export interface Analyser<T1>{
    run(data: T1): T1
}

export interface Reportable<T1, T2> { //string void
    print(report: T1): T2;
}