import fs from 'fs';
import {Report} from './bReport';

export class HtmlReports extends Report{
    print():void{
        const html = `
            <div>
                <h1>HTML Report<h1>
                <p1>${this.report}<p1>
            <div>
        `;
        fs.writeFileSync('report html', html);
        console.log('html report generated');
    }
}