import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { FavoriteComponent } from './favorite/favorite.component';
import { ZippyComponentComponent } from './zippy-component/zippy-component.component';


@NgModule({
  declarations: [
    AppComponent,
    FavoriteComponent,
    ZippyComponentComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
