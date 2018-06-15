import { Injectable } from '@angular/core';

@Injectable()
export class AuthorsService {

  constructor() { }

  getAuthors()
  {
    return ["Shreyas","Tejas","Tanmay","Prachi"];
  }

}
