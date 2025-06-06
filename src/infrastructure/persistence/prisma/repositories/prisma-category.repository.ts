import { Injectable } from '@nestjs/common';

import { PrismaService } from '../prisma.service';
import { Category } from 'src/core/entities/category.entity';
import { CategoryRepository } from 'src/core/repositories/category.repository';
import { CreateCategoryDto } from 'src/application/dtos/categories/create-category.dto';

@Injectable()
export class PrismaCategoryRepository implements CategoryRepository {
    constructor(private prisma: PrismaService) { }

    async create(data: CreateCategoryDto): Promise<Category | null> {
        const category = await this.prisma.category.create({
            data: {
                name: data.name,
                description: data.description,
            },
        });

        return category ? Category.instance(category) : null;
    }
}
