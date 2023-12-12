import {Component} from '@angular/core';
import {Book} from "../../models/book.model";
import {BooksService} from "../../store/books.service";
import {ActivatedRoute, Router} from "@angular/router";
import {map} from "rxjs";

@Component({
  selector: 'app-books-list',
  templateUrl: './books-list.component.html',
  styleUrls: ['./books-list.component.css']
})
export class BooksListComponent {
  term: string;
  author: string;
  language: string;
  genre: string;
  booksList: Array<Book> = [];
  languages: Array<string>;
  genres: Array<string>;
  authors: Array<string>;

  constructor(private booksService: BooksService,
              private router: Router,
              private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.booksList = this.booksService.getBooks();
    this.languages = this.booksService.getLanguages();
    this.authors = this.booksService.getAuthors();
    this.genres = this.booksService.getGenres();
    this.booksService.books.subscribe((array: Array<Book>) => {
      this.booksList = array;
    })
  }

  onNewBook() {
    this.router.navigate(['new'], {relativeTo: this.route})
  }
}
