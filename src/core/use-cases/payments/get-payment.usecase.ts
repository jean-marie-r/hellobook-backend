import { HttpException, Injectable } from '@nestjs/common';

import { PaymentRepository } from '../../repositories/payment.repository';
import { HttpResponse, StatusCodes } from 'src/application/http/http-response';
import { PAYMENT_NOT_FOUND } from 'src/application/messages/payment.message';

@Injectable()
export class GetPaymentUseCase {
    constructor(private paymentRepository: PaymentRepository) { }

    async execute(id: number) {
        const payment = await this.paymentRepository.findById(id);

        if (!payment) throw new HttpException(HttpResponse.error(PAYMENT_NOT_FOUND, StatusCodes.NOT_FOUND), StatusCodes.NOT_FOUND);

        return payment;
    }
}
