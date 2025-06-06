export class Author {
    public id: number;
    public firstName: string;
    public lastName: string;
    public bio: string;
    public birthDate: Date;
    public deathDate?: Date | null;
    public createdAt?: Date;
    public updatedAt?: Date;

    constructor(params: {
        id: number;
        firstName: string;
        lastName: string;
        bio: string;
        birthDate: Date;
        deathDate?: Date;
        createdAt?: Date;
        updatedAt?: Date;
    }) {
        this.id = params.id;
        this.firstName = params.firstName;
        this.lastName = params.lastName;
        this.bio = params.bio;
        this.birthDate = params.birthDate;
        this.deathDate = params.deathDate || null;
        this.createdAt = params.createdAt || new Date();
        this.updatedAt = params.updatedAt || new Date();
    }

    toJSON() {
        return {
            id: this.id,
            firstName: this.firstName,
            lastName: this.lastName,
            bio: this.bio,
            birthDate: this.birthDate,
            deathDate: this.deathDate,
            createdAt: this.createdAt,
            updatedAt: this.updatedAt,
        };
    }

    static instance(author: Partial<Author>) {
        return new Author({
            id: author.id,
            firstName: author.firstName || '',
            lastName: author.lastName || '',
            bio: author.bio || '',
            birthDate: author.birthDate || new Date(),
            deathDate: author.deathDate || null,
            createdAt: author.createdAt || new Date(),
            updatedAt: author.updatedAt || new Date(),
        });
    }
}