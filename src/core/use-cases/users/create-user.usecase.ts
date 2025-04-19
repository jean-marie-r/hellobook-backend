import { Injectable } from '@nestjs/common';

import { UserRepository } from '../../repositories/user.repository';
import { CreateUserDto } from 'src/application/dtos/users/create-user.dto';
import { User } from '../../entities/user.entity';

@Injectable()
export class CreateUserUseCase {
    constructor(private userRepository: UserRepository) { }

    async execute(data: CreateUserDto): Promise<User | null> {
        const user = await this.userRepository.create(data);

        return user;
    }
}
