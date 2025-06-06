import { Injectable } from '@nestjs/common';

import { PrismaService } from '../prisma.service';
import { AuthorRepository } from 'src/core/repositories/author.repository';
import { Author } from 'src/core/entities/author.entity';
import { CreateAuthorDto } from 'src/application/dtos/authors/create-author.dto';

@Injectable()
export class PrismaAuthorRepository implements AuthorRepository {
    constructor(private prisma: PrismaService) { }

    async findById(id: number): Promise<Author | null> {
        const author = await this.prisma.author.findUnique({
            where: { id },
        });

        return author ? Author.instance(author) : null;
    }

    async create(data: CreateAuthorDto): Promise<Author | null> {
        const author = await this.prisma.author.create({
            data: {
                firstName: data.firstName,
                lastName: data.lastName,
                bio: data.bio,
                birthDate: data.birthDate,
                deathDate: data?.deathDate,
            },
        });

        return author ? Author.instance(author) : null;
    }
}
