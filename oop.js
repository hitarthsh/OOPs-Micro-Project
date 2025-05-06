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

let jhasiLibrary = new Library();
jhasiLibrary.addbook("Harry Potter"); // kitaabe add karne ka function
jhasiLibrary.addbook("The Alchemist"); // kitaabe add karne ka function
jhasiLibrary.addbook("The Da Vinci Code"); // kitaabe add karne ka function
jhasiLibrary.addbook("The Hobbit"); // kitaabe add karne ka function
jhasiLibrary.addbook("The Lord of the Rings"); // kitaabe add karne ka function
jhasiLibrary.listAllBooks(); // kitaabe list karne ka function
