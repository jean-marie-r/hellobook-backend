import { Decimal } from "@prisma/client/runtime/library";

export class Item {
    public id: number;
    public orderId: number;
    public bookId: number;
    public quantity: number;
    public price: Decimal;

    constructor(params: {
        id: number;
        orderId: number;
        bookId: number;
        quantity: number;
        price: Decimal;
    }) {
        this.id = params.id;
        this.orderId = params.orderId;
        this.bookId = params.bookId;
        this.quantity = params.quantity;
        this.price = params.price;
    }

    toJSON() {
        return {
            id: this.id,
            orderId: this.orderId,
            bookId: this.bookId,
            quantity: this.quantity,
            price: this.price,
        };
    }

    static instance(item: Partial<Item>) {
        return new Item({
            id: item.id,
            orderId: item.orderId || 0,
            bookId: item.bookId || 0,
            quantity: item.quantity || 0,
            price: new Decimal(item.price) || new Decimal(0),
        });
    }
}