import { HttpException, Injectable } from '@nestjs/common';

import { BookRepository } from '../../repositories/book.repository';
import { HttpResponse, StatusCodes } from 'src/application/http/http-response';
import { BOOK_NOT_FOUND } from 'src/application/messages/book.message';

@Injectable()
export class GetBookUseCase {
    constructor(private bookRepository: BookRepository) { }

    async execute(id: number) {
        const book = await this.bookRepository.findById(id);

        if (!book) throw new HttpException(HttpResponse.error(BOOK_NOT_FOUND, StatusCodes.NOT_FOUND), StatusCodes.NOT_FOUND);

        return book;
    }
}
