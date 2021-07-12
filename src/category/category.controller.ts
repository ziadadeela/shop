import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { CategoryService } from './category.service';
import { CreateCategoryDto } from './dto/create-category.dto';
import { UpdateCategoryDto } from './dto/update-category.dto';
import { Prisma } from '@prisma/client';

@Controller('category')
export class CategoryController {
  constructor(private readonly categoryService: CategoryService) {}

  // https://github.com/prisma/prisma-examples/blob/731b43dcc68479ff06c5a759c1d5f384a2484feb/typescript/rest-nestjs/src/app.controller.ts#L24
  @Get()
  search(
    @Body()
    data: {
      skip?: number;
      take?: number;
      where?: Prisma.CategoryWhereInput;
      orderBy?: Prisma.CategoryOrderByInput;
    },
  ) {
    return this.categoryService.search(data);
  }

  @Get(':id')
  getById(@Param('id') id: string) {
    return this.categoryService.getById(Number(id));
  }

  @Post()
  create(@Body() categoryData: CreateCategoryDto) {
    return this.categoryService.create(categoryData);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() categoryData: UpdateCategoryDto) {
    return this.categoryService.update({
      id: Number(id),
      data: categoryData,
    });
  }

  @Delete(':id')
  delete(@Param('id') id: string) {
    return this.categoryService.delete(Number(id));
  }
}
