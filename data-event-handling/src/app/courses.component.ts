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

        <input (keyup.enter) = "onKeyUp($event)"/>
        <input [(ngModel)] = "email" (keyup.enter) = "onKeyUp()"/>
        
    `
})
export class CoursesComponent
{
    email;
    title = "List of courses";
    colSpan = 2;

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