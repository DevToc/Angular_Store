import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BooksRoutingModule } from './books-routing.module';
import { HomeComponent } from './home/home.component';
import { BooksReducerComponent } from './store/books.reducer/books.reducer.component';


@NgModule({
  declarations: [
    HomeComponent,
    BooksReducerComponent
  ],
  imports: [
    CommonModule,
    BooksRoutingModule
  ]
})
export class BooksModule { }
