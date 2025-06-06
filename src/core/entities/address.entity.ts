export class Address {
    public id: number;
    public userId: string;
    public streetAddress: string;
    public city: string;
    public country: string;
    public postalCode: string;
    public isMainAddress: boolean;
    public additionalAddress?: string;
    public createdAt?: Date;
    public updatedAt?: Date;

    constructor(params: {
        id: number;
        userId: string;
        streetAddress: string;
        city: string;
        country: string;
        postalCode: string;
        isMainAddress: boolean;
        additionalAddress?: string;
        createdAt?: Date;
        updatedAt?: Date;
    }) {
        this.id = params.id;
        this.userId = params.userId;
        this.streetAddress = params.streetAddress;
        this.city = params.city;
        this.country = params.country;
        this.postalCode = params.postalCode;
        this.isMainAddress = params.isMainAddress;
        this.additionalAddress = params.additionalAddress || '';
        this.createdAt = params.createdAt || new Date();
        this.updatedAt = params.updatedAt || new Date();
    }

    toJSON() {
        return {
            id: this.id,
            userId: this.userId,
            streetAddress: this.streetAddress,
            city: this.city,
            country: this.country,
            postalCode: this.postalCode,
            isMainAddress: this.isMainAddress,
            additionalAddress: this.additionalAddress,
            createdAt: this.createdAt,
            updatedAt: this.updatedAt,
        };
    }

    static instance(address: Partial<Address>) {
        return new Address({
            id: address.id,
            userId: address.userId || '',
            streetAddress: address.streetAddress || '',
            city: address.city || '',
            country: address.country || '',
            postalCode: address.postalCode || '',
            isMainAddress: address.isMainAddress || false,
            additionalAddress: address.additionalAddress || '',
            createdAt: address.createdAt || new Date(),
            updatedAt: address.updatedAt || new Date(),
        });
    }
}