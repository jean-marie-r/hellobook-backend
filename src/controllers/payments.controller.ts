import { Controller, Param, Get } from '@nestjs/common';
import { HttpResponse } from 'src/application/http/http-response';
import { Payment } from 'src/core/entities/payment.entity';
import { GetPaymentUseCase } from 'src/core/use-cases/payments/get-payment.usecase';

@Controller('/payments')
export class PaymentsController {
    constructor(private readonly getPaymentUsecase: GetPaymentUseCase) { }

    @Get(':id')
    async findById(@Param('id') id: number): Promise<HttpResponse<Payment | null>> {
        const payment = await this.getPaymentUsecase.execute(id);

        return HttpResponse.success(payment);
    }
}
