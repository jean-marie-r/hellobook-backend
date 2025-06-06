import { Module } from '@nestjs/common';
import { EventEmitterModule } from '@nestjs/event-emitter';

import { IdGeneratorModule } from 'src/infrastructure/providers/id-generator/id-generator.module';

import { UsersController } from './users.controller';
import { HealthController } from './health.controller';
import { CategoriesController } from './categories.controller';
import { BooksController } from './books.controller';
import { AuthorsController } from './authors.controller';
import { StocksController } from './stocks.controller';
import { OrdersController } from './orders.controller';
import { PaymentsController } from './payments.controller';

import { GetUserUseCase } from 'src/core/use-cases/users/get-user.usecase';
import { CreateUserUseCase } from 'src/core/use-cases/users/create-user.usecase';
import { CreateCategoryUseCase } from 'src/core/use-cases/categories/create-category.usecase';
import { CreateBookUseCase } from 'src/core/use-cases/books/create-book.usecase';
import { GetBookUseCase } from 'src/core/use-cases/books/get-book.usecase';
import { CreateAuthorUseCase } from 'src/core/use-cases/authors/create-author.usecase';
import { CreateStockUseCase } from 'src/core/use-cases/stocks/create-stock.usecase';
import { CreateOrderUseCase } from 'src/core/use-cases/orders/create-order.usecase';
import { GetOrderUseCase } from 'src/core/use-cases/orders/get-order.usecase';
import { CreatePaymentUseCase } from 'src/core/use-cases/payments/create-payment.usecase';
import { GetPaymentUseCase } from 'src/core/use-cases/payments/get-payment.usecase';

@Module({
    imports: [EventEmitterModule.forRoot(), IdGeneratorModule],
    controllers: [HealthController, UsersController, CategoriesController, BooksController, AuthorsController, StocksController, OrdersController, PaymentsController],
    providers: [CreateUserUseCase, GetUserUseCase, CreateCategoryUseCase, CreateBookUseCase, GetBookUseCase, CreateAuthorUseCase, CreateStockUseCase, CreateOrderUseCase, GetOrderUseCase, CreatePaymentUseCase, GetPaymentUseCase],
})
export class ControllerModule { }
