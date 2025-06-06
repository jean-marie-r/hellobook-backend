import { Payment } from '../entities/payment.entity';

export abstract class PaymentRepository {
    abstract findById(id: number): Promise<Payment | null>;
    abstract create(data: Partial<Payment>): Promise<Payment | null>;
}
