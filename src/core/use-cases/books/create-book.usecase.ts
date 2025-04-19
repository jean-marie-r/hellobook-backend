import { Injectable } from '@nestjs/common';

import { BookRepository } from '../../repositories/book.repository';
import { Book } from '../../entities/book.entity';

@Injectable()
export class CreateUserUseCase {
    constructor(private bookRepository: BookRepository) { }

    async execute(data: Book) {
        const book = await this.bookRepository.create(data);

        return book;
    }
}
