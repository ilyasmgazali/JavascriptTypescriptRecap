import fs from 'fs'
import { Reportable } from './aInterface'

export class HtmlReports implements Reportable<String, void>{
    print(report:string): void{
        const html= `
        <div>
            <h1>HTML Report</h1>
            <p>${report}<p>
        <div>
        `;
        fs.writeFileSync('report.html', html);
        console.log("HTML report has now been printed out");
    }
}