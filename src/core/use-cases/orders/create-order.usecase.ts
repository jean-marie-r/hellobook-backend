import { Injectable } from '@nestjs/common';
import { EventEmitter2 } from '@nestjs/event-emitter';

import { OrderRepository } from '../../repositories/order.repository';
import { CreateOrderDto } from '../../../application/dtos/orders/create-order.dto';

@Injectable()
export class CreateOrderUseCase {
    constructor(private orderRepository: OrderRepository, private eventEmitter: EventEmitter2) { }

    async execute(data: CreateOrderDto) {
        const order = await this.orderRepository.create(data);

        this.eventEmitter.emit('order.created', order);

        return order;
    }
}
