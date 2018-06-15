
import { Component } from '@angular/core';

@Component({
    selector:'courses',
    template:`
            <h2>{{ getTitle() }}</h2>
            <ul>
                <li *ngFor = "let course of courses">
                    <h4>{{ course }}</h4>
                </li>
            </ul>
        `
})
export class CoursesComponent
{
    title = 'List of courses';
    courses = ['Angular','Spring MVC','ReactJS','DS Algo'];

    getTitle()
    {
        return this.title;
    }
}