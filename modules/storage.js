export default class Storage {
  static getBooks() {
    let books;
    if (localStorage.getItem('books') === null) {
      books = [];
    } else {
      books = JSON.parse(localStorage.getItem('books'));
    }

    return books;
  }

  static addBook(book) {
    const books = Storage.getBooks();
    books.push(book);
    localStorage.setItem('books', JSON.stringify(books));
  }

  static removeBook(book) {
    const bookTitle = book.querySelector('#title').innerText;
    const books = Storage.getBooks();
    const filterBooks = books.filter((book) => bookTitle === book.title);
    const filterIndex = books.indexOf(filterBooks[0]);
    books.splice(filterIndex, 1);
    localStorage.setItem('books', JSON.stringify(books));
  }
}