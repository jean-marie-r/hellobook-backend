import { Body, Controller, Param, Post, Get } from '@nestjs/common';
import { CreateOrderDto } from 'src/application/dtos/orders/create-order.dto';
import { HttpResponse } from 'src/application/http/http-response';
import { Order } from 'src/core/entities/order.entity';
import { CreateOrderUseCase } from 'src/core/use-cases/orders/create-order.usecase';
import { GetOrderUseCase } from 'src/core/use-cases/orders/get-order.usecase';

@Controller('/orders')
export class OrdersController {
    constructor(private readonly createOrderUsecase: CreateOrderUseCase, private readonly getOrderUsecase: GetOrderUseCase) { }

    @Post()
    async create(@Body() data: CreateOrderDto): Promise<HttpResponse<Order | null>> {
        const order = await this.createOrderUsecase.execute(data);

        return HttpResponse.created(order);
    }

    @Get(':id')
    async findById(@Param('id') id: number): Promise<HttpResponse<Order | null>> {
        const order = await this.getOrderUsecase.execute(id);

        return HttpResponse.success(order);
    }
}
