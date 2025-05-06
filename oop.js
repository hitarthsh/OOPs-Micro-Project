class Library {
  constructor() {
    this.books = [];
  }

  addbook(book) {
    this.books.push(book);
  }

  listAllBooks() {
    console.log("List of all books:");
    this.books.forEach(function (Book) {
      console.log(`Book Name: ${Book.name}`);
    });
  }
}

class Book {
  constructor(name, isbn, price, author) {
    this.name = name;
    this.isbn = isbn;
    this.price = price;
    this.author = author;
    this.readStatus = false;
  }

  info() {
    console.log(
      `${this.readStatus ? "✅" : "❌"} Name: ${this.name}, ISBN: ${
        this.isbn
      }, Price: ${this.price}, Author: ${this.author}`
    );
  }

  changeReadStatus() {
    this.readStatus = !this.readStatus;
    console.log(
      this.readStatus
        ? `You have read ${this.name}.`
        : `You have not read ${this.name}.`
    );
  }
}

// Create books
let b1 = new Book("Harry Potter", "1234567890", 500, "F. Scott Fitzgerald");
let b2 = new Book("The Alchemist", "0987654321", 300, "Paulo Coelho");

// Create library
let jhasiLibrary = new Library();
jhasiLibrary.addbook(b1);
jhasiLibrary.addbook(b2);

// List all books
// jhasiLibrary.listAllBooks();
