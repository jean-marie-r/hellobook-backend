import { Injectable } from '@nestjs/common';

import { PrismaService } from '../prisma.service';
import { UserRepository } from 'src/core/repositories/user.repository';
import { User } from 'src/core/entities/user.entity';
import { CreateUserDto } from 'src/application/dtos/users/create-user.dto';

@Injectable()
export class PrismaUserRepository implements UserRepository {
    constructor(private prisma: PrismaService) { }

    async findById(id: number): Promise<User | null> {
        const user = await this.prisma.user.findUnique({
            where: { id },
        });

        return user ? User.instance(user) : null;
    }

    async create(data: CreateUserDto): Promise<User | null> {
        const user = await this.prisma.user.create({
            data: {
                firstName: data.firstName,
                lastName: data.lastName,
                email: data.email,
                password: data.password,
                role: data?.role,
            },
        })

        return user ? User.instance(user) : null;
    }
}
