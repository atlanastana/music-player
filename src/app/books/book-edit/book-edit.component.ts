import {Component} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {ActivatedRoute, Params, Router} from "@angular/router";
import {BooksService} from "../../store/books.service";


interface bookForm {
  name: FormControl<string>;
  author: FormControl<string>;
  pageCount: FormControl<number>;
  language: FormControl<string>;
  genre: FormControl<string>;
}

@Component({
  selector: 'app-book-edit',
  templateUrl: './book-edit.component.html',
  styleUrls: ['./book-edit.component.css']
})
export class BookEditComponent {
  bookForm: FormGroup;
  id: number;
  editMode: boolean = false;

  constructor(private route: ActivatedRoute,
              private booksService: BooksService,
              private router: Router) {
  }

  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      this.id = +params['id'];
      this.editMode = params['id'] != null;
      this.initForm()
    })
  }

  onSubmit() {
    if (this.editMode) {
      this.booksService.updateBook(this.id, this.bookForm.value)
    } else {
      this.booksService.addBook(this.bookForm.value)
    }
    this.onCancel()
  }

  onCancel() {
    this.router.navigate(['../'], {relativeTo: this.route})
  }

  initForm() {
    let name = '';
    let author = '';
    let pageCount = null;
    let language = '';
    let genre = '';

    if (this.editMode) {
      const book = this.booksService.findBook(this.id);
      name = book.name
      author = book.author
      pageCount = book.pageCount
      language = book.language
      genre = book.genre
    }
    this.bookForm = new FormGroup<bookForm>({
      name: new FormControl(name, {validators: [Validators.required], nonNullable: true,}),
      author: new FormControl(author, {validators: [Validators.required], nonNullable: true,}),
      pageCount: new FormControl(pageCount, {validators: [Validators.required], nonNullable: true,}),
      language: new FormControl(language, {validators: [Validators.required], nonNullable: true,}),
      genre: new FormControl(genre, {validators: [Validators.required], nonNullable: true,}),
    });

  }

}
