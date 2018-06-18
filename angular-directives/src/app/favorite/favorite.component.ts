import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'favorite',
  templateUrl: './favorite.component.html',
  styleUrls: ['./favorite.component.css']
})
export class FavoriteComponent {

  @Input() isSelected: boolean;

  onClick()
  {
    this.isSelected = !this.isSelected;
  }

}
