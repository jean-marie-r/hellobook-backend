export class Book {
    public id: string;
    public title: string;
    public author: string;
    public format: string;
    public publicationDate: string;
    public audience: string;
    public size: string;
    public language: string;
    public pages: number;
    public weight: number;
    public price: number;
    public publisher: string;
    public createdAt?: Date;
    public updatedAt?: Date;

    constructor(params: {
        id: string;
        title: string;
        author: string;
        format: string;
        publicationDate: string;
        audience: string;
        size: string;
        language: string;
        pages: number;
        weight: number;
        price: number;
        publisher: string;
        createdAt?: Date;
        updatedAt?: Date
    }) {
        this.id = params.id;
        this.title = params.title;
        this.author = params.author;
        this.format = params.format;
        this.publicationDate = params.publicationDate;
        this.audience = params.audience;
        this.size = params.size;
        this.language = params.language;
        this.pages = params.pages;
        this.weight = params.weight;
        this.price = params.price;
        this.publisher = params.publisher;
        this.createdAt = params.createdAt || new Date();
        this.updatedAt = params.updatedAt || new Date();
    }

    toJSON() {
        return {
            id: this.id,
            title: this.title,
            author: this.author,
            format: this.format,
            publicationDate: this.publicationDate,
            audience: this.audience,
            size: this.size,
            language: this.language,
            pages: this.pages,
            weight: this.weight,
            price: this.price,
            publisher: this.publisher,
            createdAt: this.createdAt,
            updatedAt: this.updatedAt,
        };
    }

    static instance(book: Partial<Book>) {
        return new Book({
            id: book.id || '',
            title: book.title || '',
            author: book.author || '',
            format: book.format || '',
            publicationDate: book.publicationDate || '',
            audience: book.audience || '',
            size: book.size || '',
            language: book.language || '',
            pages: book.pages || 0,
            weight: book.weight || 0,
            price: book.price || 0,
            publisher: book.publisher || '',
            createdAt: book.createdAt || new Date(),
            updatedAt: book.updatedAt || new Date(),
        });
    }
}
