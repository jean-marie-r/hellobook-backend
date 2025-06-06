import { IsNotEmpty, IsString, IsNumber, MinLength } from 'class-validator';

export class CreateBookDto {
    @IsNumber()
    @IsNotEmpty()
    authorId: number;

    @IsNumber()
    @IsNotEmpty()
    categoryId: number;

    @IsString()
    @IsNotEmpty()
    @MinLength(13)
    isbn: string;

    @IsString()
    @IsNotEmpty()
    name: string;

    @IsString()
    @IsNotEmpty()
    slug: string;

    @IsString()
    @IsNotEmpty()
    coverImageUrl: string;

    @IsString()
    @IsNotEmpty()
    format: string;

    @IsString()
    publishedDate: Date;

    @IsString()
    @IsNotEmpty()
    audience: string;

    @IsString()
    @IsNotEmpty()
    size: string;

    @IsNumber()
    @IsNotEmpty()
    pages: number;

    @IsNumber()
    @IsNotEmpty()
    weight: number

    @IsNumber()
    @IsNotEmpty()
    price: number;

    @IsString()
    @IsNotEmpty()
    description: string;
}
