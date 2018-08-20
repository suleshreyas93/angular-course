import { HttpClientModule } from '@angular/common/http';
import { AppService } from './services/app.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import{ MatTableModule, MatPaginatorModule, MatSortModule, MatInputModule } from '@angular/material';


import { AppComponent } from './app.component';
import { DataTableComponent } from './data-table/data-table.component';
import { UserDetailsComponent } from './user-details/user-details.component';



@NgModule({
  declarations: [
    AppComponent,
    DataTableComponent,
    UserDetailsComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatTableModule, 
    MatPaginatorModule, 
    MatSortModule,
    MatInputModule,
    HttpClientModule
  ],
  providers: [AppService],
  bootstrap: [AppComponent]
})
export class AppModule { }
