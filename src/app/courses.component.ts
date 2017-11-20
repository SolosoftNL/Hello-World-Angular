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
            <div (click)='onDivClick()'>
                <button class="btn btn-primary" [class.active]= "isActive" 
                [style.backgroundColor]="isActive ? 'blue' : 'Red'" (click)='onSave($event)' >Save button
                </button>
            </div>
            </td>
        </tr>
    </table>
    <h3>OnkeyUp voorbeeld:</h3>
    <input type="text" #email (keyup.enter)="onKeyup(email.value)"/>
    <h3>OnkeyDown voorbeeld:</h3>
    <input [(ngModel)]="email2" (keydown.enter)="onKeydown()" />
    `
})
export class CoursesComponent{
    title : string = 'List of courses';
    courses: string[];
    imgURL: string = "http://lorempixel.com/400/200";
    colSpan: number = 20;
    isActive : boolean;
    email2: string = "yourname@example.com";

    constructor(service: CoursesService){
       // let service = new CoursesService();
        this.courses = service.getCourses();
        this.isActive = false;
    };

    //voorbeeld event filtering
    //tevens het meegeven van een parameter aan de functie om de waarde uit het input veld #email te halen 
    // het meegeven van variablen is onnodig, we hebben namelijk 2waybinding tenslotte :)
    onKeyup(email){
        console.log("Enter key is pressed!", email);
    }

    //voorbeeld met 2waybinding (ngModel)
    onKeydown(){
        console.log("Enter key is pressed!", this.email2);
    }

    onDivClick(){
        console.log('Div event also raised');
    }

    //voorbeeld bubbeling van events + het stoppen van het omhoog bubbelen middels stopPropagation
    onSave($event){
        $event.stopPropagation();
        console.log('Saved...from button click event', $event);
    }
    
}