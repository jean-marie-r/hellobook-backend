export class User {
    public id: string;
    public lastName: string;
    public firstName: string;
    public email: string;
    public password: string;
    public createdAt?: Date;
    public updatedAt?: Date;

    constructor(
        params: {
            id: string;
            lastName: string;
            firstName: string;
            email: string;
            password: string;
            createdAt?: Date;
            updatedAt?: Date
        }
    ) {
        this.id = params.id;
        this.lastName = params.lastName;
        this.firstName = params.firstName;
        this.email = params.email;
        this.password = params.password;
        this.createdAt = params.createdAt || new Date();
        this.updatedAt = params.updatedAt || new Date();
    }

    toJSON() {
        return {
            id: this.id,
            lastName: this.lastName,
            firstName: this.firstName,
            email: this.email,
            createdAt: this.createdAt,
            updatedAt: this.updatedAt,
        };
    }

    static instance(user: Partial<User>) {
        return new User({
            id: user.id || '',
            lastName: user.lastName || '',
            firstName: user.firstName || '',
            email: user.email || '',
            password: user.password || '',
            createdAt: user.createdAt || new Date(),
            updatedAt: user.updatedAt || new Date(),
        });
    }
}
