import { IsNotEmpty, IsString, IsOptional } from 'class-validator';

export class CreateAuthorDto {
    @IsString()
    @IsNotEmpty()
    firstName: string;

    @IsString()
    @IsNotEmpty()
    lastName: string;

    @IsString()
    @IsNotEmpty()
    bio: string;

    @IsString()
    birthDate: Date;

    @IsString()
    @IsOptional()
    deathDate?: Date | null;
}
