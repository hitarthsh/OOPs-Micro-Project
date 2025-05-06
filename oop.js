// class Library {
// add kitaabe
// kitaabe issue
// kitaabe return
// kitaabe padhi
// list of all books
// }

class Library {
  constructor() {
    this.books = []; // saari books ka record yaha par hai
  }

  addbook(book) {
    this.books.push(book); // kitaabe add karne ka function
  }

  listAllBooks() {
    //     console.log("List of all books:");
    this.books.forEach(function (book) {
      console.log(book);
    });
  }
}

class Book {
  constructor(name, isbn, price, author) {
    this.name = name; // kitaabe ka naam
    this.isbn = isbn; // kitaabe ka ISBN number
    this.price = price; // kitaabe ka price
    this.author = author; // kitaabe ka author
    this.readStatus = false; // kitaabe ka read status
  }

  info() {
    console.log(
      `${this.readStatus ? "✅" : "❌"} Name: ${this.name}, ISBN: ${
        this.isbn
      }, Price: ${this.price}, Author: ${this.author}`
    ); // kitaabe ka info function
  }

  changeReadStatus() {
    this.readStatus = !this.readStatus; // kitaabe ka read status change karne ka function
    if (this.readStatus) {
      console.log(`You have read ${this.name}.`);
    } else {
      console.log(`You have not read ${this.name}.`);
    }
  }
}

let jhasiLibrary = new Library();
jhasiLibrary.addbook("Harry Potter"); // kitaabe add karne ka function
jhasiLibrary.addbook("The Alchemist"); // kitaabe add karne ka function
jhasiLibrary.addbook("The Da Vinci Code"); // kitaabe add karne ka function
jhasiLibrary.addbook("The Hobbit"); // kitaabe add karne ka function
jhasiLibrary.addbook("The Lord of the Rings"); // kitaabe add karne ka function
jhasiLibrary.listAllBooks(); // kitaabe list karne ka function

let b1 = new Book("Harry Potter", "1234567890", 500, "F. Scott Fitzgerald"); // kitaabe ka object
let b2 = new Book("The Alchemist", "0987654321", 300, "Paulo Coelho"); // kitaabe ka object

// b1.info(); // kitaabe ka info function
