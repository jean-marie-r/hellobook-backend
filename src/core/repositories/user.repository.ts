import { User } from '../entities/user.entity';
import { CreateUserDto } from 'src/application/dtos/users/create-user.dto';

export abstract class UserRepository {
    abstract create(data: CreateUserDto): Promise<User | null>;
    abstract findById(id: string): Promise<User | null>;
}
