import { Module } from '@nestjs/common';

import { PrismaService } from './prisma.service';

import { UserRepository } from 'src/core/repositories/user.repository';
import { PrismaUserRepository } from './repositories/prisma-user.repository';
import { BookRepository } from 'src/core/repositories/book.repository';
import { PrismaBookRepository } from './repositories/prisma-book.repositoruy';

@Module({
    imports: [], // set .env
    providers: [
        PrismaService,
        {
            provide: UserRepository,
            useClass: PrismaUserRepository
        },
        {
            provide: BookRepository,
            useClass: PrismaBookRepository
        }
    ],
    exports: [PrismaService, UserRepository, BookRepository],
})
export class PrismaModule { }
