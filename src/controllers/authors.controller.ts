import { Body, Controller, Post } from '@nestjs/common';
import { CreateAuthorDto } from 'src/application/dtos/authors/create-author.dto';
import { HttpResponse } from 'src/application/http/http-response';
import { Author } from 'src/core/entities/author.entity';
import { CreateAuthorUseCase } from 'src/core/use-cases/authors/create-author.usecase';

@Controller('/authors')
export class AuthorsController {
    constructor(private readonly createAuthorUsecase: CreateAuthorUseCase) { }

    @Post()
    async create(@Body() createBookDto: CreateAuthorDto): Promise<HttpResponse<Author | null>> {
        const book = await this.createAuthorUsecase.execute(createBookDto);

        return HttpResponse.created(book);
    }
}
