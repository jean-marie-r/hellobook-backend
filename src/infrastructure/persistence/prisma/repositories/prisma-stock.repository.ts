import { Injectable } from '@nestjs/common';

import { PrismaService } from '../prisma.service';
import { Stock } from 'src/core/entities/stock.entity';
import { StockRepository } from 'src/core/repositories/stock.repository';
import { CreateStockDto } from 'src/application/dtos/stocks/create-stock.dto';

@Injectable()
export class PrismaStockRepository implements StockRepository {
    constructor(private prisma: PrismaService) { }

    async create(data: CreateStockDto): Promise<Stock | null> {
        const stock = await this.prisma.stock.create({
            data: {
                bookId: data.bookId,
                quantity: data.quantity,
                lastCheckedAt: data.lastCheckedAt,
            },
        });

        return stock ? Stock.instance(stock) : null;
    }
}
