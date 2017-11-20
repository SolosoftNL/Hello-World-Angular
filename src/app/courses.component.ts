import { CoursesService } from './courses.service';
import { Component } from "@angular/core";

@Component({
    selector: 'courses', // <courses>
    template: `<h2>{{ title }}</h2>
    <img [src]="imgURL"/>
    <ul>
        <li *ngFor="let course of courses">
            {{ course }}
        </li>
    </ul>
    <table>
        <tr>
            <td [attr.colspan] = "colSpan">
            First Row!
            </td>
        </tr>
    </table>
    `
})
export class CoursesComponent{
    title : string = 'List of courses';
    courses;
    imgURL: string = "http://lorempixel.com/400/200";
    colSpan: number = 20;

    constructor(service: CoursesService){
       // let service = new CoursesService();
        this.courses = service.getCourses();
    };

    
    
}