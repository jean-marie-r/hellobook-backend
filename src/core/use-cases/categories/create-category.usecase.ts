import { Injectable } from '@nestjs/common';

import { CategoryRepository } from '../../repositories/category.repository';
import { CreateCategoryDto } from '../../../application/dtos/categories/create-category.dto';

@Injectable()
export class CreateCategoryUseCase {
    constructor(private categoryRepository: CategoryRepository) { }

    async execute(data: CreateCategoryDto) {
        const category = await this.categoryRepository.create(data);

        return category;
    }
}
