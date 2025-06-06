export class Category {
    public id: number;
    public name: string;
    public description?: string;
    public createdAt?: Date;
    public updatedAt?: Date;

    constructor(params: {
        id: number;
        name: string;
        description?: string;
        createdAt?: Date;
        updatedAt?: Date;
    }) {
        this.id = params.id;
        this.name = params.name;
        this.description = params.description;
        this.createdAt = params.createdAt || new Date();
        this.updatedAt = params.updatedAt || new Date();
    }

    toJSON() {
        return {
            id: this.id,
            name: this.name,
            description: this?.description,
            createdAt: this.createdAt,
            updatedAt: this.updatedAt,
        };
    }

    static instance(category: Partial<Category>) {
        return new Category({
            id: category.id,
            name: category.name || '',
            description: category?.description || '',
            createdAt: category.createdAt || new Date(),
            updatedAt: category.updatedAt || new Date(),
        });
    }
}