import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'like',
  templateUrl: './like.component.html',
  styleUrls: ['./like.component.css']
})
export class LikeComponent implements OnInit {

  @Input('isActive') isActive: boolean;
  @Input('likesCount') likesCount: number;
  constructor() { }

  ngOnInit() {
  }

  onClick()
  {
    if(this.isActive)
    {
      this.likesCount--;
      this.isActive = false;
    }
    else
    {
      this.likesCount++;
      this.isActive = true;
    }
  }

}
