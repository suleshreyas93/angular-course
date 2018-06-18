import { Component } from '@angular/core';
import { FavoriteModifiedEvent } from './favorite/favorite.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  post={
    title:'Angular Course',
    isFavorite:true
  }

  onFavoriteModified(eventArgs: FavoriteModifiedEvent)
  {
    console.log("Favorite Modified",eventArgs.newValue);
  }
}
