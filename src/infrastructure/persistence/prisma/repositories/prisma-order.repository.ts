import { Injectable } from '@nestjs/common';

import { PrismaService } from '../prisma.service';
import { Order } from 'src/core/entities/order.entity';
import { OrderRepository } from 'src/core/repositories/order.repository';
import { CreateOrderDto } from 'src/application/dtos/orders/create-order.dto';

@Injectable()
export class PrismaOrderRepository implements OrderRepository {
    constructor(private prisma: PrismaService) { }

    async findById(id: number): Promise<Order | null> {
        const order = await this.prisma.order.findUnique({
            where: { id },
            include: {
                items: true,
            },
        });

        return order ? Order.instance(order) : null;
    }

    async create(data: CreateOrderDto): Promise<Order | null> {
        const totalAmount = data.items.reduce((sum, item) => sum + item.quantity * item.price, 0);

        const order = await this.prisma.order.create({
            data: {
                userId: data.userId,
                totalAmount,
                items: {
                    create: data.items.map(item => ({
                        bookId: item.bookId,
                        quantity: item.quantity,
                        price: item.price,
                    })),
                }
            },
            include: {
                items: true,
            },
        });

        return order ? Order.instance(order) : null;
    }
}
