import { Module } from '@nestjs/common';


import { IdGeneratorModule } from 'src/infrastructure/providers/id-generator/id-generator.module';

import { UsersController } from './users.controller';

import { GetUserUseCase } from 'src/core/use-cases/get-user.usecase';
import { CreateUserUseCase } from 'src/core/use-cases/create-user.usecase';

@Module({
    imports: [IdGeneratorModule],
    controllers: [UsersController],
    providers: [CreateUserUseCase, GetUserUseCase],
})
export class ControllerModule {}
