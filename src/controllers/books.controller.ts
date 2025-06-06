import { Body, Controller, Param, Post, Get } from '@nestjs/common';
import { CreateBookDto } from 'src/application/dtos/books/create-book.dto';
import { HttpResponse } from 'src/application/http/http-response';
import { Book } from 'src/core/entities/book.entity';
import { CreateBookUseCase } from 'src/core/use-cases/books/create-book.usecase';
import { GetBookUseCase } from 'src/core/use-cases/books/get-book.usecase';

@Controller('/books')
export class BooksController {
    constructor(private readonly createBookUsecase: CreateBookUseCase, private readonly getBookUsecase: GetBookUseCase) { }

    @Post()
    async create(@Body() createBookDto: CreateBookDto): Promise<HttpResponse<Book | null>> {
        const book = await this.createBookUsecase.execute(createBookDto);

        return HttpResponse.created(book);
    }

    @Get(':id')
    async findById(@Param('id') id: number): Promise<HttpResponse<Book | null>> {
        const book = await this.getBookUsecase.execute(id);

        return HttpResponse.success(book);
    }
}
