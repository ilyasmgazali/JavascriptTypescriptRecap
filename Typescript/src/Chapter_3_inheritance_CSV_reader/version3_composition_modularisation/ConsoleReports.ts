import { Reportable } from "./aInterface";

export class ConsoleReport implements Reportable<String, void>{
    print(report: string): void{
        console.log(report);
    }
}