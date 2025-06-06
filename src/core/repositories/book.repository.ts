import { Book } from '../entities/book.entity';
import { CreateBookDto } from 'src/application/dtos/books/create-book.dto';

export abstract class BookRepository {
    abstract findById(id: number): Promise<Book | null>;
    abstract create(data: CreateBookDto): Promise<Book | null>;
}
