import { Book } from '../entities/book.entity';

export abstract class BookRepository {
    abstract findById(id: string): Promise<Book | null>;
    abstract create(data: Book): Promise<Book | null>;
}
