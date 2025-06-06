import { CreateOrderDto } from 'src/application/dtos/orders/create-order.dto';
import { Order } from '../entities/order.entity';

export abstract class OrderRepository {
    abstract findById(id: number): Promise<Order | null>;
    abstract create(data: CreateOrderDto): Promise<Order | null>;
}
