import { IsEmail, IsNotEmpty, IsString, IsEnum } from 'class-validator';
import { Transform } from 'class-transformer';

enum Role { USER = 'USER', ADMIN = 'ADMIN' }

export class CreateUserDto {
    @IsString()
    @IsNotEmpty()
    lastName: string;

    @IsString()
    @IsNotEmpty()
    firstName: string;

    @IsEmail()
    @IsNotEmpty()
    @Transform(({ value }) => value.toLowerCase().trim())
    email: string;

    @IsString()
    @IsNotEmpty()
    password: string;

    @IsString()
    @IsEnum(Role)
    role: Role;

    // @IsString()
    // @IsNotEmpty()
    // confirmPassword: string;
}
