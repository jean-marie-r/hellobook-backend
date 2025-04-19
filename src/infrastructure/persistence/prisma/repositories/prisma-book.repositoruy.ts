import { Injectable } from '@nestjs/common';

import { PrismaService } from '../prisma.service';
import { BookRepository } from 'src/core/repositories/book.repository';
import { Book } from 'src/core/entities/book.entity';

@Injectable()
export class PrismaBookRepository implements BookRepository {
    constructor(private prisma: PrismaService) { }

    async findById(id: string): Promise<Book | null> {
        const user = await this.prisma.user.findUnique({
            where: { id },
        });

        return user ? Book.instance(user) : null;
    }

    async create(data: Partial<Book>): Promise<Book | null> {
        // const user = await this.prisma.book.create({
        //     data: {},
        // })

        return null;
    }
}
