import { Component } from '@angular/core';

@Component({
    selector: 'courses',
    template: `
        <h2>{{ title }}</h2>
        <h2 [textContent] = "title"></h2>

        <table>
            <tr>
                <td [attr.colspan] = "colSpan"></td>
            </tr>
        </table>

        <div (click) = "onDivClick()">
            <button class = "btn btn-primary" (click) = "onSave($event)">Save</button>
        </div>

        <br><br><br>
        <input [(ngModel)] = "email" (keyup.enter) = "onKeyUp()"/>
        <br><br><br><br>
        {{ courses. title | uppercase }}<br>
        {{ courses.students | number }}<br>
        {{ courses.rating | number:'1.1-2' }}<br>
        {{ courses.price | currency:'AUD':true }}<br>
        {{ courses.date | date:'mediumDate'}}

        
    `
})
export class CoursesComponent
{
    email;
    title = "List of courses";
    colSpan = 2;

    courses = {
        title:'The Complete Angular Course',
        students:409586,
        rating:3.45,
        price:120.75,
        date:new Date()
    }

    onDivClick()
    {
        console.log("Div clicked!");
    }
    onSave($event)
    {
        $event.stopPropagation();
        console.log("Button was clicked!",$event);
    }

    onKeyUp()
    {
        console.log(this.email);
    }
}