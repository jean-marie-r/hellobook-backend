import { Body, Controller, Post } from '@nestjs/common';
import { CreateCategoryDto } from 'src/application/dtos/categories/create-category.dto';
import { HttpResponse } from 'src/application/http/http-response';
import { Category } from 'src/core/entities/category.entity';
import { CreateCategoryUseCase } from 'src/core/use-cases/categories/create-category.usecase';

@Controller('/categories')
export class CategoriesController {
    constructor(private readonly createCategoryUsecase: CreateCategoryUseCase) { }

    @Post()
    async create(@Body() createUserDto: CreateCategoryDto): Promise<HttpResponse<Category | null>> {
        const category = await this.createCategoryUsecase.execute(createUserDto);

        return HttpResponse.created(category);
    }
}
