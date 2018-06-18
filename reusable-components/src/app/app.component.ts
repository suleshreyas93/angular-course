import { Component } from '@angular/core';

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

  onFavoriteModified()
  {
    console.log("Favorite Modified");
  }
}
