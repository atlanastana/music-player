import {Injectable} from "@angular/core";
import {Subject} from "rxjs";
import {Book} from "../models/book.model";


@Injectable()
export class BooksService {
  books = new Subject<Array<Book>>()
  private booksList: Array<Book> = [
    {name: 'Преступление и наказание', author: 'Ф.Достоевский', pageCount: 333, language: 'Русский', genre: 'Классика'},
    {name: 'Война и Мир', author: 'Л.Толстой', pageCount: 1099, language: 'Русский', genre: 'Классика'},
    {name: 'Шерлок Холмс', author: 'К.Артур', pageCount: 534, language: 'Английский', genre: 'Детектив'},
    {name: 'Алхимик', author: 'П.Коэльо', pageCount: 343, language: 'Испанский', genre: 'Современная Проза'},
    {name: 'Грокаем Алгоритмы', author: 'А.Бхаргава', pageCount: 555, language: 'Русский', genre: 'Программирование'}
  ];


  getBooks() {
    return this.booksList.slice();
  }

  addBook(item: Book) {
    this.booksList.push(item);
    this.books.next(this.booksList.slice());
  }

  updateBook(index: number, recipe: Book) {
    this.booksList[index] = recipe;
    this.books.next(this.booksList.slice());
  }

  findBook(index: number) {
    return this.booksList[index];
  }

  getAuthors() {
    return this.booksList.reduce((acc, item) => {
      if (acc.includes(item.author)) {
        return acc;
      }
      return [...acc, item.author];
    }, [])
  }

  getGenres() {
    return this.booksList.reduce((acc, item) => {
      if (acc.includes(item.genre)) {
        return acc;
      }
      return [...acc, item.genre];
    }, [])
  }

  getLanguages() {
    return this.booksList.reduce((acc, item) => {
      if (acc.includes(item.language)) {
        return acc;
      }
      return [...acc, item.language];
    }, [])
  }

}
