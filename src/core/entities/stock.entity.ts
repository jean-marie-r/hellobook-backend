export class Stock {
    public id: number;
    public bookId: number;
    public quantity: number;
    public lastCheckedAt: Date;
    public createdAt?: Date;
    public updatedAt?: Date;

    constructor(params: {
        id: number;
        bookId: number;
        quantity: number;
        lastCheckedAt: Date;
        createdAt?: Date;
        updatedAt?: Date;
    }) {
        this.id = params.id;
        this.bookId = params.bookId;
        this.quantity = params.quantity;
        this.lastCheckedAt = params.lastCheckedAt;
        this.createdAt = params.createdAt || new Date();
        this.updatedAt = params.updatedAt || new Date();
    }

    toJSON() {
        return {
            id: this.id,
            bookId: this.bookId,
            quantity: this.quantity,
            lastCheckedAt: this.lastCheckedAt,
            createdAt: this.createdAt,
            updatedAt: this.updatedAt,
        };
    }

    static instance(stock: Partial<Stock>) {
        return new Stock({
            id: stock.id,
            bookId: stock.bookId,
            quantity: stock.quantity || 0,
            lastCheckedAt: stock.lastCheckedAt || new Date(),
            createdAt: stock.createdAt || new Date(),
            updatedAt: stock.updatedAt || new Date(),
        });
    }
}