import { Module } from '@nestjs/common';


import { IdGeneratorModule } from 'src/infrastructure/providers/id-generator/id-generator.module';

import { UsersController } from './users.controller';
import { HealthController } from './health.controller'

import { FindUserUseCase } from 'src/core/use-cases/users/find-user.usecase';
import { CreateUserUseCase } from 'src/core/use-cases/users/create-user.usecase';


@Module({
    imports: [IdGeneratorModule],
    controllers: [HealthController, UsersController],
    providers: [CreateUserUseCase, FindUserUseCase],
})
export class ControllerModule { }
