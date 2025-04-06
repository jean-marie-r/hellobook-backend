import { Module } from '@nestjs/common';

import { PrismaService } from './prisma.service';

import { UserRepository } from 'src/core/repositories/user.repository';
import { PrismaUserRepository } from './repositories/prisma-user.repository';

@Module({
    imports: [], // set .env
    providers: [
        PrismaService,
        {
            provide: UserRepository,
            useClass: PrismaUserRepository
        }
    ],
    exports: [PrismaService, UserRepository],
})
export class PrismaModule {}
