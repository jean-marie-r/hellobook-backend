import { Injectable } from '@nestjs/common';

import { StockRepository } from '../../repositories/stock.repository';
import { CreateStockDto } from 'src/application/dtos/stocks/create-stock.dto';

@Injectable()
export class UpdateStockUseCase {
    constructor(private stockRepository: StockRepository) { }

    async execute(data: CreateStockDto) {
        const stock = await this.stockRepository.create(data);

        return stock;
    }
}
