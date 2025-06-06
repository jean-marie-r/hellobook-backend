import { Decimal } from "@prisma/client/runtime/library";

import { Category } from "./category.entity";
import { Author } from "./author.entity";
import { Stock } from "./stock.entity";

export class Book {
    public id: number;
    public isbn: string;
    public name: string;
    public slug: string;
    public coverImageUrl: string;
    public format: string;
    public publishedDate: Date;
    public audience: string;
    public size: string;
    public description: string;
    public pages: number;
    public weight: number;
    public price: Decimal;
    public category: Category;
    public author: Author;
    public stock: Stock;
    public createdAt?: Date;
    public updatedAt?: Date;

    constructor(params: {
        id: number;
        isbn: string;
        name: string;
        slug: string;
        coverImageUrl: string;
        format: string;
        publishedDate: Date;
        audience: string;
        size: string;
        description: string;
        pages: number;
        weight: number;
        price: Decimal;
        category: Category;
        author: Author;
        stock: Stock;
        createdAt?: Date;
        updatedAt?: Date
    }) {
        this.id = params.id;
        this.isbn = params.isbn;
        this.name = params.name;
        this.slug = params.slug;
        this.coverImageUrl = params.coverImageUrl;
        this.format = params.format;
        this.publishedDate = params.publishedDate;
        this.audience = params.audience;
        this.size = params.size;
        this.description = params.description;
        this.pages = params.pages;
        this.weight = params.weight;
        this.price = params.price;
        this.category = params.category
        this.author = params.author;
        this.stock = params.stock;
        this.createdAt = params.createdAt || new Date();
        this.updatedAt = params.updatedAt || new Date();
    }

    toJSON() {
        return {
            id: this.id,
            isbn: this.isbn,
            name: this.name,
            slug: this.slug,
            coverImageUrl: this.coverImageUrl,
            format: this.format,
            publishedDate: this.publishedDate,
            audience: this.audience,
            size: this.size,
            description: this.description,
            pages: this.pages,
            weight: this.weight,
            price: this.price,
            category: this.category?.toJSON(),
            author: this.author?.toJSON(),
            stock: this.stock?.toJSON(),
            createdAt: this.createdAt,
            updatedAt: this.updatedAt,
        };
    }

    static instance(book: Partial<Omit<Book, 'category' | 'author' | 'stock'>> & { category?: Partial<Category>; author?: Partial<Author>; stock?: Partial<Stock> }) {
        return new Book({
            id: book.id,
            isbn: book.isbn || '',
            name: book.name || '',
            slug: book.slug || '',
            coverImageUrl: book.coverImageUrl || '',
            format: book.format || '',
            publishedDate: book.publishedDate || new Date(),
            audience: book.audience || '',
            size: book.size || '',
            description: book.description || '',
            pages: book.pages || 0,
            weight: book.weight || 0,
            price: new Decimal(book.price) || new Decimal(0),
            category: book.category ? Category.instance(book.category) : Category.instance({}),
            author: book.author ? Author.instance(book.author) : Author.instance({}),
            stock: book.stock ? Stock.instance(book.stock) : Stock.instance({}),
            createdAt: book.createdAt || new Date(),
            updatedAt: book.updatedAt || new Date(),
        });
    }
}
