class Book {
    constructor(title, author, isbn, price, availability) {
        this.title = title,
            this.author = author,
            this.isbn = isbn,
            this.price = price,
            this.availability = availability
    }
}

class User {
    constructor(name, email, user_ID) {
        this.name = name,
            this.email = email,
            this.user_ID = user_ID
    }
}

class Cart {
    constructor(user) {
        this.user = user
        this.books = [];
    }

    addBooks(...book) {
        book.forEach((book) => {
            if (book.availability === 'available') {
                this.books.push(book);
            } else {
                console.log('this book is unavailable');
            }
        });
    }

    removeBook(isbn) {
        this.books = this.books.filter(book => book.isbn !== isbn);
    }

    calculateTotalPrice() {
        return this.books.reduce((total, book) => total + book.price, 0);
    }

}

class Order {
    constructor(user, books) {
        this.user = user;
        this.books = books;
        this.totalPrice = this.calculateTotalPrice();
    }

    calculateTotalPrice() {
        return this.books.reduce((total, book) => total + book.price, 0);
    }

}


//Create Objects: Instantiate multiple Book objects, representing different books available in the bookstore. Also, create a few User objects.
const book1 = new Book('The Hobbit', 'J. R. Tolkien', '123123', 200, 'un');
const book2 = new Book('Harry Potter', 'J. K. Rowling', '32323', 100, 'available');
const book3 = new Book('The Great Gatsby', 'F. S. Fitzgerald', '88899', 150, 'available');
const book4 = new Book('The Alchemist', 'P Coelho', '88221', 300, 'available');

const user1 = new User('Alex', 'alex@gmail.com', '23123');
const user2 = new User('Ivan', 'ivanx@gmail.com', '90909');


//Add Books to Cart: Simulate users adding books to their cart by creating instances of the Cart class and using its methods.
const cart1 = new Cart(user1);
cart1.addBooks(book1, book2)
const cart2 = new Cart(user2);
cart2.addBooks(book3, book4)


//Place Orders: Implement the process of placing an order. 
//Users should be able to create instances of the Order class, specifying the books they want to purchase.
const order1 = new Order(user1, cart1.books)
const order2 = new Order(user2, cart2.books)

console.log(order1)


//Polymorphism: Utilize polymorphism by treating different types of books (e.g., fiction, non-fiction) uniformly when users add them to the cart.

class FictionBook extends Book {
    constructor(title, author, isbn, price, availability, genre) {
        super(title, author, isbn, price, availability);
        this.genre = genre; // Specific to fiction books
    }
}


class NonFictionBook extends Book {
    constructor(title, author, isbn, price, availability, topic) {
        super(title, author, isbn, price, availability);
        this.topic = topic; // Specific to non-fiction books
    }
}
