import { CreateStockDto } from 'src/application/dtos/stocks/create-stock.dto';
import { Stock } from '../entities/stock.entity';

export abstract class StockRepository {
    abstract create(data: CreateStockDto): Promise<Stock | null>;
    // abstract findById(id: number): Promise<Stock | null>;
    // abstract update(id: number, data: Partial<Stock>): Promise<Stock | null>;
}
