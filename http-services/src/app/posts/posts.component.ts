import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { PostService } from '../services/post.service';


@Component({
  selector: 'posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

  posts: any[];
  
  constructor(private service: PostService) { 
    
  }

  ngOnInit() {

    this.service.getPosts().subscribe(response => {
      this.posts = response.json();
    }, error => {
      alert('unexpected error has occured');
      console.log(error);
    })

    
  }

  createPost(input: HTMLInputElement){
    let post = { title: input.value };
    input.value = '';
    this.service.createPost(post).subscribe(response => {
      post['id'] = response.json().id;
      this.posts.splice(0,0,post);
    }, (error: Response) => {
        if(error.status === 400)
        {
          //this.form.setErros(error.json());
        }
      alert('unexpected error has occured');
      console.log(error);
    })
  }

  updatePost(post)
  {
    this.service.updatePost(post).subscribe(response => {
      console.log(response);
    }, error => {
      alert('unexpected error has occured');
      console.log(error);
    })
  }

  deletePost(post)
  {
    this.service.deletePost(345).subscribe(response => {
      let index = this.posts.indexOf(post);
      this.posts.splice(index,1);
    }, (error: Response) => {
      if(error.status === 404)
      {
        alert('this post was already deleted');
      }
      else
      {
        alert('unexpected error has occured');
        console.log(error);
      }
      
    })
  }

  

}
