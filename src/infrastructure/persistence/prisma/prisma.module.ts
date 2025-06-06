import { Module } from '@nestjs/common';

import { PrismaService } from './prisma.service';

import { PrismaUserRepository } from './repositories/prisma-user.repository';
import { PrismaBookRepository } from './repositories/prisma-book.repository';
import { PrismaCategoryRepository } from './repositories/prisma-category.repository';
import { PrismaAuthorRepository } from './repositories/prisma-author.repository';
import { PrismaStockRepository } from './repositories/prisma-stock.repository';
import { PrismaOrderRepository } from './repositories/prisma-order.repository';
import { PrismaPaymentRepository } from './repositories/prisma-payment.repository';

import { UserRepository } from 'src/core/repositories/user.repository';
import { BookRepository } from 'src/core/repositories/book.repository';
import { CategoryRepository } from 'src/core/repositories/category.repository';
import { AuthorRepository } from 'src/core/repositories/author.repository';
import { StockRepository } from 'src/core/repositories/stock.repository';
import { OrderRepository } from 'src/core/repositories/order.repository';
import { PaymentRepository } from 'src/core/repositories/payment.repository';

@Module({
    imports: [],
    providers: [
        PrismaService,
        {
            provide: UserRepository,
            useClass: PrismaUserRepository
        },
        {
            provide: BookRepository,
            useClass: PrismaBookRepository
        },
        {
            provide: CategoryRepository,
            useClass: PrismaCategoryRepository
        },
        {
            provide: AuthorRepository,
            useClass: PrismaAuthorRepository
        },
        {
            provide: StockRepository,
            useClass: PrismaStockRepository
        },
        {
            provide: OrderRepository,
            useClass: PrismaOrderRepository
        },
        {
            provide: PaymentRepository,
            useClass: PrismaPaymentRepository,
        }
    ],
    exports: [PrismaService, UserRepository, BookRepository, CategoryRepository, AuthorRepository, StockRepository, OrderRepository, PaymentRepository],
})
export class PrismaModule { }
