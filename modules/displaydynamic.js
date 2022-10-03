export default class displayDynamic {
  static displayBooks() {
    const books = Storage.getBooks();
    books.forEach((book) => displayDynamic.addBooksCollection(book));
  }

  static addBooksCollection(book) {
    const books = document.querySelector('.list');
    const newBook = document.createElement('div');
    newBook.innerHTML = `
          <div class = 'book-cont'>
          <div class = "book-details">
          <p id='title'> "${book.title}"</p> 
          <p class="by">by</p>
          <p id='author'> ${book.author}</p>
          </div>
          <button class="remove" type="button">Remove</button>
          </div>
          <hr class='hr>
          </div>
          `;
    newBook.classList.add('newBook');
    books.appendChild(newBook);
  }

  static deleteBook(eve) {
    if (eve.classList.contains('remove')) {
      eve.parentElement.parentElement.remove();
    }
  }

  static clearFields() {
    document.querySelector('.title').value = '';
    document.querySelector('.author').value = '';
  }
}