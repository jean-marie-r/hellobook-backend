import { CreateCategoryDto } from 'src/application/dtos/categories/create-category.dto';
import { Category } from '../entities/category.entity';

export abstract class CategoryRepository {
    abstract create(data: CreateCategoryDto): Promise<Category | null>;
}
