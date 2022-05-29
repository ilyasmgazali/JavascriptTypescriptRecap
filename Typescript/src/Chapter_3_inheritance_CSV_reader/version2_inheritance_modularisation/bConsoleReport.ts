import {Report} from './bReport'
export class ConsoleReport extends Report{
    print():void{
        console.log(this.report);
    }
}