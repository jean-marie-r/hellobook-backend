export class Review {
    public id: number;
    public userId: number;
    public bookId: number;
    public rating: number;
    public comment: string;
    public createdAt?: Date;
    public updatedAt?: Date;

    constructor(params: {
        id: number;
        bookId: number;
        userId: number;
        rating: number;
        comment: string;
        createdAt?: Date;
        updatedAt?: Date;
    }) {
        this.id = params.id;
        this.bookId = params.bookId;
        this.userId = params.userId;
        this.rating = params.rating;
        this.comment = params.comment;
        this.createdAt = params.createdAt || new Date();
        this.updatedAt = params.updatedAt || new Date();
    }

    toJSON() {
        return {
            id: this.id,
            bookId: this.bookId,
            userId: this.userId,
            rating: this.rating,
            comment: this.comment,
            createdAt: this.createdAt,
            updatedAt: this.updatedAt,
        };
    }

    static instance(review: Partial<Review>) {
        return new Review({
            id: review.id,
            bookId: review.bookId,
            userId: review.userId,
            rating: review.rating || 0,
            comment: review.comment || '',
            createdAt: review.createdAt || new Date(),
            updatedAt: review.updatedAt || new Date(),
        });
    }
}