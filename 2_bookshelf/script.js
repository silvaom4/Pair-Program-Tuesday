class Bookshelf {
    constructor(books) {
        this.books = books
    }

    addBook(addBook) {
        this.books.push(addBook)
    }

    removeBook(removeBook) {
        this.books.pop(removeBook)
    }

    totalBook() {
       return 'Total books: ' + this.books.length
    }
}

const bookshelf = new Bookshelf([]);

bookshelf.addBook('The Great Gatsby')
bookshelf.addBook('The Great')
bookshelf.addBook('The Great Think')
bookshelf.addBook('The Hunger Games')
bookshelf.removeBook('The Great Think')
bookshelf.totalBook()

console.log(bookshelf)

console.log(bookshelf.totalBook())

