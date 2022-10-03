import Book from './modules/book.js';
import Storage from './modules/storage.js';
import displayDynamic from './modules/displaydynamic.js';
import { DateTime } from './modules/luxon.js';

document.addEventListener('DOMContentLoaded', displayDynamic.displayBooks);
document.querySelector('#form').addEventListener('submit', (e) => {
  e.preventDefault();
  const inputTitle = document.querySelector('.title').value;
  const inputAuthor = document.querySelector('.author').value;
  const book = new Book(inputTitle, inputAuthor);
  displayDynamic.addBooksCollection(book);
  Storage.addBook(book);
  displayDynamic.clearFields();
});

document.querySelector('#list').addEventListener('click', (e) => {
  if (e.target.className === 'remove') {
    const book = e.target.parentElement;
    Storage.removeBook(book);
    displayDynamic.deleteBook(e.target);
  }
});

// const date = new Date();
// const d = date.toDateString();
// const local = date.toLocaleTimeString();
// document.getElementsByClassName('time')[0].innerText = `${d} , ${local}`;
const timeAndDate = document.querySelector('.time');
function displayDate() {
  setInterval(() => {
    const date = DateTime.now().toLocaleString(DateTime.DATETIME_FULL_WITH_SECONDS);
    timeAndDate.innerHTML = date;
  }, 1500);
}

displayDate();

const navLink = document.getElementsByClassName('border-sep');
[...navLink].forEach((link, index) => {
  link.addEventListener('click', () => {
    if (index === 0) {
      document.getElementById('list-cont').classList.add('display-block');
      document.getElementById('list-cont').classList.remove('display-none');

      document.getElementById('form').classList.add('display-none');
      document.getElementById('form').classList.remove('display-flex');
      document.getElementById('form').classList.remove('display-block');

      document.getElementById('contact-section').classList.add('display-none');
      document.getElementById('contact-section').classList.remove('display-block');
      document.getElementById('contact-section').classList.remove('display-flex');
    }
    if (index === 1) {
      document.getElementById('list-cont').classList.remove('display-block');
      document.getElementById('list-cont').classList.remove('display-flex');
      document.getElementById('list-cont').classList.add('display-none');

      document.getElementById('form').classList.add('display-flex');
      document.getElementById('form').classList.remove('display-none');

      document.getElementById('contact-section').classList.add('display-none');
      document.getElementById('contact-section').classList.remove('display-flex');
      document.getElementById('contact-section').classList.remove('display-block');
    }
    if (index === 2) {
      document.getElementById('list-cont').classList.add('display-none');
      document.getElementById('list-cont').classList.remove('display-block');
      document.getElementById('list-cont').classList.remove('display-flex');

      document.getElementById('form').classList.add('display-none');
      document.getElementById('form').classList.remove('display-flex');
      document.getElementById('form').classList.remove('display-block');

      document.getElementById('contact-section').classList.add('display-block');
      document.getElementById('contact-section').classList.remove('display-none');
    }
  });
});
