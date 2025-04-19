import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { CreateUserDto } from 'src/application/dtos/users/create-user.dto';
import { HttpResponse } from 'src/application/http/http-response';
import { User } from 'src/core/entities/user.entity';
import { CreateUserUseCase } from 'src/core/use-cases/users/create-user.usecase';
import { GetUserUseCase } from 'src/core/use-cases/users/get-user.usecase';

@Controller('/users')
export class UsersController {
    constructor(private readonly getUserUseCase: GetUserUseCase, private readonly createUserUsecae: CreateUserUseCase) { }

    @Post()
    async createUser(@Body() createUserDto: CreateUserDto): Promise<HttpResponse<User | null>> {
        const user = await this.createUserUsecae.execute(createUserDto);

        return HttpResponse.created(user);
    }

    @Get(':id')
    async getUserById(@Param('id') id: string): Promise<HttpResponse<User | null>> {
        const user = await this.getUserUseCase.execute(id);

        return HttpResponse.success(user);
    }
}
