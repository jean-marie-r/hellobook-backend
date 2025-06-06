import { CreateAuthorDto } from 'src/application/dtos/authors/create-author.dto';
import { Author } from '../entities/author.entity';

export abstract class AuthorRepository {
    abstract findById(id: number): Promise<Author | null>;
    abstract create(data: CreateAuthorDto): Promise<Author | null>;
}
