import { Component, OnInit } from '@angular/core';
import { AuthorsService } from '../authors.service';

@Component({
  selector: 'authors',
  template: `
    <h2>{{ authors.length+" "+title }}</h2>
    <ul>
      <li *ngFor = "let author of authors">
        {{ author }}
      </li>
    </ul>

    `
})
export class AuthorsComponent implements OnInit {

  title = "Authors";
  authors;
  constructor(service: AuthorsService) { 
    this.authors = service.getAuthors();
  }

  ngOnInit() {
  }

}
