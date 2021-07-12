import { Injectable } from '@nestjs/common';
import { CreateCategoryDto } from './dto/create-category.dto';
import { UpdateCategoryDto } from './dto/update-category.dto';
import { Category, Prisma } from '@prisma/client';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class CategoryService {
  constructor(private readonly prismaService: PrismaService) {}

  search(params: {
    skip?: number;
    take?: number;
    where?: Prisma.CategoryWhereInput;
    orderBy?: Prisma.CategoryOrderByInput;
  }): Promise<Category[]> {
    const { skip, take, where, orderBy } = params;
    return this.prismaService.category.findMany({
      skip,
      take,
      where,
      orderBy,
    });
  }

  getById(id: number): Promise<Category | null> {
    return this.prismaService.category.findUnique({
      where: { id },
    });
  }

  async create(data: CreateCategoryDto): Promise<Category> {
    return this.prismaService.category.create({
      data,
    });
  }

  update(params: { id: number; data: UpdateCategoryDto }): Promise<Category> {
    const { id, data } = params;
    const date = new Date();
    const categoryToUpdate = {
      ...data,
      //TODO: audit
      updatedAt: date,
      updatedById: 1,
    };
    return this.prismaService.category.update({
      data: categoryToUpdate,
      where: { id: id },
    });
  }

  delete(id: number): Promise<Category> {
    return this.prismaService.category.delete({
      where: { id },
    });
  }
}
