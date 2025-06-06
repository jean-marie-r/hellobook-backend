import { Injectable } from '@nestjs/common';

import { BookRepository } from '../../repositories/book.repository';
import { CreateBookDto } from 'src/application/dtos/books/create-book.dto';

@Injectable()
export class CreateBookUseCase {
    constructor(private bookRepository: BookRepository) { }

    async execute(data: CreateBookDto) {
        const book = await this.bookRepository.create(data);

        return book;
    }
}
