export class User {
    public id: number;
    public lastName: string;
    public firstName: string;
    public email: string;
    public password: string;
    public role: string;
    public createdAt?: Date;
    public updatedAt?: Date;

    constructor(
        params: {
            id: number;
            lastName: string;
            firstName: string;
            email: string;
            password: string;
            role: string;
            createdAt?: Date;
            updatedAt?: Date
        }
    ) {
        this.id = params.id;
        this.lastName = params.lastName;
        this.firstName = params.firstName;
        this.email = params.email;
        this.password = params.password;
        this.role = params.role;
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
            id: user.id,
            lastName: user.lastName || '',
            firstName: user.firstName || '',
            email: user.email || '',
            password: user.password || '',
            role: user.role || 'USER',
            createdAt: user.createdAt || new Date(),
            updatedAt: user.updatedAt || new Date(),
        });
    }
}
