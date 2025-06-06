import { IsNotEmpty, IsNumber } from 'class-validator';

export class CreateItemDto {
    @IsNumber()
    @IsNotEmpty()
    bookId: number;

    @IsNumber()
    @IsNotEmpty()
    price: number;

    @IsNumber()
    @IsNotEmpty()
    quantity: number;
}
