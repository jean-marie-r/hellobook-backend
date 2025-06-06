import { IsNotEmpty, IsString, IsNumber } from 'class-validator';

export class CreateStockDto {
    @IsNumber()
    @IsNotEmpty()
    bookId: number;

    @IsNumber()
    @IsNotEmpty()
    quantity: number;

    @IsString()
    lastCheckedAt: Date;
}
