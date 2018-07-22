import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'my-form',
  templateUrl: './my-form.component.html',
  styleUrls: ['./my-form.component.css']
})
export class MyFormComponent {

  contactMethods = [
    {id : 1, name : "Email"},
    {
      id: 2, name: "Phone"
    }
  ]
  log(x)
  {
    console.log(x);
  }

  submit(f)
  {
    console.log(f.value);
  }

}
