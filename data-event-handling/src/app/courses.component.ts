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

        <button class = "btn btn-primary">Save</button>
    `
})
export class CoursesComponent
{
    title = "List of courses";
    colSpan = 2;
}