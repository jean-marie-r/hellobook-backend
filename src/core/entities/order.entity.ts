import { Decimal } from "@prisma/client/runtime/library";
import { Item } from "./item.entity";

export class Order {
    public id: number;
    public userId: number;
    public status: string;
    public totalAmount: Decimal;
    public items: Item[];
    public createdAt?: Date;
    public updatedAt?: Date;

    constructor(params: {
        id: number;
        userId: number;
        status: string;
        totalAmount: Decimal;
        items: Item[];
        createdAt?: Date;
        updatedAt?: Date;
    }) {
        this.id = params.id;
        this.userId = params.userId;
        this.status = params.status;
        this.totalAmount = params.totalAmount;
        this.items = params.items || [];
        this.createdAt = params.createdAt || new Date();
        this.updatedAt = params.updatedAt || new Date();
    }

    toJSON() {
        return {
            id: this.id,
            userId: this.userId,
            status: this.status,
            totalAmount: this.totalAmount,
            items: this.items.map(item => item.toJSON()),
            createdAt: this.createdAt,
            updatedAt: this.updatedAt,
        };
    }

    static instance(order: Partial<Omit<Order, 'items'>> & { items?: Partial<Item>[] }): Order {
        return new Order({
            id: order.id,
            userId: order.userId,
            status: order.status || '',
            totalAmount: new Decimal(order.totalAmount) || new Decimal(0),
            items: (order.items || []).map(item => Item.instance(item)),
            createdAt: order.createdAt || new Date(),
            updatedAt: order.updatedAt || new Date(),
        });
    }
}