import { Injectable } from '@nestjs/common';

import { PrismaService } from '../prisma.service';
import { Payment } from 'src/core/entities/payment.entity';
import { PaymentRepository } from 'src/core/repositories/payment.repository';

@Injectable()
export class PrismaPaymentRepository implements PaymentRepository {
    constructor(private prisma: PrismaService) { }

    async findById(id: number): Promise<Payment | null> {
        const payment = await this.prisma.payment.findUnique({
            where: { id },
        });

        return payment ? Payment.instance(payment) : null;
    }

    async create(data: any): Promise<Payment | null> {

        const payment = await this.prisma.payment.create({
            data: {
                amount: data.amount,
                orderId: data.orderId,
            },
        });

        return payment ? Payment.instance(payment) : null;
    }
}
