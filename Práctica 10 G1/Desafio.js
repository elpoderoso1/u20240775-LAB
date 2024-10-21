class Book {
    constructor(title, author, year) {
        this.title = title;
        this.author = author;
        this.year = year;
    }
    resumen(){
        console.log(`${this.title} de ${this.author}, publicado en ${this.year}.`);
    }
}

const LIBRO = new Book("Crimen y castigo", "Fiódor Dostoyevski", 1866);
LIBRO.resumen();