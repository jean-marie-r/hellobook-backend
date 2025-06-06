import { Injectable } from '@nestjs/common';

import { AuthorRepository } from '../../repositories/author.repository';
import { CreateAuthorDto } from 'src/application/dtos/authors/create-author.dto';

@Injectable()
export class CreateAuthorUseCase {
    constructor(private authorRepository: AuthorRepository) { }

    async execute(data: CreateAuthorDto) {
        const author = await this.authorRepository.create(data);

        return author;
    }
}
