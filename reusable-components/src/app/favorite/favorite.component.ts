import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'favorite',
  templateUrl: './favorite.component.html',
  styleUrls: ['./favorite.component.css']
})
export class FavoriteComponent implements OnInit {

  @Input() isFavorite: boolean;
  @Output() modified = new EventEmitter
  constructor() { }

  ngOnInit() {
  }

  onClick()
  {
    this.isFavorite = !this.isFavorite;
    this.modified.emit({ newValue : this.isFavorite });
  }

}

export interface FavoriteModifiedEvent
{
  newValue: boolean;
}
