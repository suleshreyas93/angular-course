import { Comments } from './../models/comments.model';
import { Users } from './../models/users.model';
import { Posts } from './../models/posts.model';
import { Injectable } from '@angular/core';
import { HttpClient }   from '@angular/common/http';
import {Observable} from "rxjs";

@Injectable()
export class AppService {

  private  API_URL = "https://jsonplaceholder.typicode.com/";
  constructor(private http: HttpClient) { }

  getAllPosts(): Observable<Posts[]>{
    return this.http.get<Posts[]>(this.API_URL+"posts");
  }

  getAllUsers(): Observable<Users[]>{
    return this.http.get<Users[]>(this.API_URL+"users");
  }

  getAllComments(): Observable<Comments[]>{
    return this.http.get<Comments[]>(this.API_URL+"comments");
  }

}
