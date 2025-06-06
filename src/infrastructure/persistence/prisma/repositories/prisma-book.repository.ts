import { Injectable } from '@nestjs/common';

import { PrismaService } from '../prisma.service';
import { BookRepository } from 'src/core/repositories/book.repository';
import { Book } from 'src/core/entities/book.entity';
import { CreateBookDto } from 'src/application/dtos/books/create-book.dto';

@Injectable()
export class PrismaBookRepository implements BookRepository {
    constructor(private prisma: PrismaService) { }

    async findById(id: number): Promise<Book | null> {
        const book = await this.prisma.book.findUnique({
            where: { id },
            include: {
                author: true,
                category: true,
                stock: true
            }
        });

        return book ? Book.instance(book) : null;
    }

    async create(data: CreateBookDto): Promise<Book | null> {
        const book = await this.prisma.book.create({
            data: {
                authorId: data.authorId,
                categoryId: data.categoryId,
                isbn: data.isbn,
                name: data.name,
                slug: data.slug,
                coverImageUrl: data.coverImageUrl,
                format: data.format,
                publishedDate: data.publishedDate,
                audience: data.audience,
                size: data.size,
                description: data?.description,
                pages: data.pages,
                weight: data.weight,
                price: data.price,
            },
        });

        return book ? Book.instance(book) : null;
    }
}
