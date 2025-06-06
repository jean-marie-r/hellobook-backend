import { Body, Controller, Post } from '@nestjs/common';
import { CreateStockDto } from 'src/application/dtos/stocks/create-stock.dto';
import { HttpResponse } from 'src/application/http/http-response';
import { Stock } from 'src/core/entities/stock.entity';
import { CreateStockUseCase } from 'src/core/use-cases/stocks/create-stock.usecase';

@Controller('/stocks')
export class StocksController {
    constructor(private readonly createStockUsecase: CreateStockUseCase) { }

    @Post()
    async create(@Body() createStockDto: CreateStockDto): Promise<HttpResponse<Stock | null>> {
        const stock = await this.createStockUsecase.execute(createStockDto);

        return HttpResponse.created(stock);
    }
}
