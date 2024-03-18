class Book {
    constructor(title, author){
        this.title = title;
        this.author = author;
        this.isCheckout = false;
    }
    borrowBook(){
        if (!this.isCheckout) {
            console.log("checking out the book");
            this.isCheckout = true;
        } else {
            console.log("Not availble");
        }
    }
    returnBook() {
        this.isCheckout = false;
    }
}
class Library {
    constructor() {
        this.books = [];
    }

    addBook(book) {
        this.books.push(book);
        console.log(`current book ${JSON.stringify(this.books)}`);
        
    }

    removeBook(book) {
        const bookIndex = this.books.indexOf(book);
        const isBookExisting = bookIndex !== -1;
        if (isBookExisting) {
            this.books.splice(bookIndex);
        } else {
            console.log('The book is not in the library to remove');
        }

    }
    searchByTitle(book) {

    }
    searchByAuthor(book) {

    }


}
const library = new Library();
const book1 = new Book("hoc jstrong 1 nam","teo");
const book2 = new Book("hoc js trong 24h ","ti");
library.addBook(book1)
library.addBook(book2)

book1.borrowBook()
book1.borrowBook()
book1.returnBook()

