import { Injectable } from '@nestjs/common';
import { OnEvent } from '@nestjs/event-emitter';

import { Order } from 'src/core/entities/order.entity';
import { PaymentRepository } from '../../repositories/payment.repository';

@Injectable()
export class CreatePaymentUseCase {
    constructor(private paymentRepository: PaymentRepository) { }

    @OnEvent('order.created')
    async execute(orderCreated: Order) {
        await this.paymentRepository.create({
            orderId: orderCreated.id,
            amount: orderCreated.totalAmount,
        });
    }
}
