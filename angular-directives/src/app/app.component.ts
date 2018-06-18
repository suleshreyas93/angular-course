import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  courses = [{ id : 1, name: 'Angular' },{ id : 1, name: 'Spring' },{ id : 1, name: 'React' },{ id : 1, name: 'DS Algo' }];
  viewMode = 'list';

  addCourse()
  {
    this.courses.push({id: 4, name: 'Python'});
  }

  removeCourse(course)
  {
    let index = this.courses.indexOf(course);
    this.courses.splice(index,1);
  }

  updateCourse(course)
  {
    course.name = 'Updated';
  }
}
