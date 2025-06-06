import { HttpException, Injectable } from '@nestjs/common';

import { OrderRepository } from '../../repositories/order.repository';
import { HttpResponse, StatusCodes } from 'src/application/http/http-response';
import { ORDER_NOT_FOUND } from 'src/application/messages/order.message';

@Injectable()
export class GetOrderUseCase {
    constructor(private orderRepository: OrderRepository) { }

    async execute(id: number) {
        const order = await this.orderRepository.findById(id);

        if (!order) throw new HttpException(HttpResponse.error(ORDER_NOT_FOUND, StatusCodes.NOT_FOUND), StatusCodes.NOT_FOUND);

        return order;
    }
}
