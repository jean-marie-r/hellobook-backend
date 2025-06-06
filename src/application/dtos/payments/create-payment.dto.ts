import { IsNotEmpty, IsString, IsNumber, IsEnum } from 'class-validator';

enum PaymentMethod {
    CREDIT_CARD = 'CREDIT_CARD',
    DEBIT_CARD = 'DEBIT_CARD',
    PAYPAL = 'PAYPAL',
}

export class CreatePaymentDto {
    @IsNumber()
    @IsNotEmpty()
    orderId: number;

    @IsString()
    @IsEnum(PaymentMethod)
    @IsNotEmpty()
    paymentMethod: string;

    @IsNumber()
    amount: number;
}
