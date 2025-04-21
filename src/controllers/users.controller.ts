import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { CreateUserDto } from 'src/application/dtos/users/create-user.dto';
import { HttpResponse } from 'src/application/http/http-response';
import { User } from 'src/core/entities/user.entity';
import { CreateUserUseCase } from 'src/core/use-cases/users/create-user.usecase';
import { FindUserUseCase } from 'src/core/use-cases/users/find-user.usecase';

@Controller('/users')
export class UsersController {
    constructor(private readonly findUserUseCase: FindUserUseCase, private readonly createUserUsecae: CreateUserUseCase) { }

    @Post()
    async create(@Body() createUserDto: CreateUserDto): Promise<HttpResponse<User | null>> {
        const user = await this.createUserUsecae.execute(createUserDto);

        return HttpResponse.created(user);
    }

    @Get(':id')
    async findById(@Param('id') id: string): Promise<HttpResponse<User | null>> {
        const user = await this.findUserUseCase.execute(id);

        return HttpResponse.success(user);
    }
}
