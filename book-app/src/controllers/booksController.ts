import { Request, Response } from 'express';
import BookModel, { Book } from '../models/Book';

interface IBook {
  title: string;
  author: string;
  isbn: string;
}

class BooksController {

  public async listBooks(req: Request, res: Response): Promise<void> {
    const books = await BookModel.find({});

    const newBooks = books.map(({ title, author, isbn }): IBook => {
      return { title, author, isbn };
    });

    res.render('books/index.hbs', {
      title: 'Books',
      books: newBooks,
    });
  }

  public addBook(req: Request, res: Response): void {
    res.render('books/add', {
      title: 'Add a book',
    });
  }

  public async saveBook(req: Request, res: Response): Promise<void> {
    const { title, author, isbn } = req.body;

    const book: Book = new BookModel({ title, author, isbn });

    await book.save();

    res.redirect('/books');
  }

}

export const booksController = new BooksController();

