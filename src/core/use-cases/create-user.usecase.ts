import { Injectable } from '@nestjs/common';

import { UserRepository } from '../repositories/user.repository';
import { User } from '../entities/user.entity';

@Injectable()
export class CreateUserUseCase {
    constructor(private userRepository: UserRepository) {}

    async execute(data: Partial<User>) {
        const user = await this.userRepository.create(data);

        return user;
    }
}
