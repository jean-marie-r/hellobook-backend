import { Decimal } from "@prisma/client/runtime/library";

export class Payment {
    public id: number;
    public orderId: number;
    public paymentMethod: string;
    public amount: Decimal;
    public status: string;
    public createdAt?: Date;
    public updatedAt?: Date;

    constructor(params: {
        id: number;
        orderId: number;
        paymentMethod: string;
        amount: Decimal;
        status: string;
        createdAt?: Date;
        updatedAt?: Date;
    }) {
        this.id = params.id;
        this.orderId = params.orderId;
        this.paymentMethod = params.paymentMethod;
        this.amount = params.amount;
        this.status = params.status;
        this.createdAt = params.createdAt || new Date();
        this.updatedAt = params.updatedAt || new Date();
    }

    toJSON() {
        return {
            id: this.id,
            orderId: this.orderId,
            paymentMethod: this.paymentMethod,
            amount: this.amount,
            status: this.status,
            createdAt: this.createdAt,
            updatedAt: this.updatedAt,
        };
    }

    static instance(payment: Partial<Payment>) {
        return new Payment({
            id: payment.id,
            orderId: payment.orderId,
            paymentMethod: payment.paymentMethod || '',
            amount: new Decimal(payment.amount) || new Decimal(0),
            status: payment.status || '',
            createdAt: payment.createdAt || new Date(),
            updatedAt: payment.updatedAt || new Date(),
        });
    }
}