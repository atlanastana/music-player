import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HeaderComponent} from './header/header.component';
import {HttpClientModule} from "@angular/common/http";
import {BooksListComponent} from './books/books-list/books-list.component';
import {BookComponent} from './books/books-list/book/book.component';
import {BooksComponent} from './books/books.component';
import {BooksService} from "./store/books.service";
import {BookEditComponent} from './books/book-edit/book-edit.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {SearchFilterPipe} from "./features/search-filter.pipe";
import {MultiSelectPipe} from "./features/multi-select.pipe";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BooksListComponent,
    BookComponent,
    BooksComponent,
    BookEditComponent,
    SearchFilterPipe,
    MultiSelectPipe,
  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
  ],
  providers: [BooksService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
