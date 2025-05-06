class Library {
  constructor() {
    this.books = [];
  }

  addbooks(...books) {
    this.books.push(...books); // Spread to add multiple books individually
  }

  listAllBooks() {
    console.log("List of all books:");
    this.books.forEach(function (Book, index) {
      console.log(`${index + 1}) Book Name: ${Book.name} by ${Book.author}`);
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
let b3 = new Book("Good Code", "1122334455", 500, "Hitarth Shah");
let b4 = new Book("The Hobbit", "5566778899", 350, "J.R.R. Tolkien");

// Create library
let jhasiLibrary = new Library();

// Add books to the library
jhasiLibrary.addbooks(b1, b2, b3, b4);

// List all books
// jhasiLibrary.listAllBooks();
