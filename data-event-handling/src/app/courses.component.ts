import { Component } from '@angular/core';

@Component({
    selector: 'courses',
    template: `
        <h2>{{ title }}</h2>
        <h2 [textContent] = "title"></h2>
    `
})
export class CoursesComponent
{
    title = "List of courses";
}