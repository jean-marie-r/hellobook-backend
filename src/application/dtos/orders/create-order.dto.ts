import { IsNotEmpty, IsNumber, IsArray, ValidateNested, ArrayMinSize } from 'class-validator';
import { Type } from 'class-transformer';

import { CreateItemDto } from './create-item.dto';

export class CreateOrderDto {
    @IsNumber()
    @IsNotEmpty()
    userId: number;

    @IsArray()
    @ValidateNested({ each: true })
    @ArrayMinSize(1)
    @Type(() => CreateItemDto)
    items: CreateItemDto[];
}
