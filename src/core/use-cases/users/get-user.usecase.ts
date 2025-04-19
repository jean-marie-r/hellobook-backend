import { HttpException, Injectable } from '@nestjs/common';

import { UserRepository } from '../../repositories/user.repository';
import { HttpResponse, StatusCodes } from 'src/application/http/http-response';
import { USER_NOT_FOUND } from 'src/application/messages/user.message';

@Injectable()
export class GetUserUseCase {
    constructor(private userRepository: UserRepository) { }

    async execute(id: string) {
        const user = await this.userRepository.findById(id);

        if (!user) throw new HttpException(HttpResponse.error(USER_NOT_FOUND, StatusCodes.NOT_FOUND), StatusCodes.NOT_FOUND);

        return user;
    }
}
