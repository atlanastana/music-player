import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {BooksComponent} from "./books/books.component";
import {BookEditComponent} from "./books/book-edit/book-edit.component";

const routes: any = [
  {
    path: '',
    redirectTo: 'book',
    pathMatch: 'full'
  },
  {
    path: 'book', component: BooksComponent, children: [
      {path: 'new', component: BookEditComponent},
      {path: ':id', component: BookEditComponent}
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
