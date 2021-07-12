import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { Prisma, Item } from '@prisma/client';
import { CreateItemDto } from './dto/create-item.dto';
import { UpdateItemDto } from './dto/update-item.dto';

@Injectable()
export class ItemService {
  constructor(private readonly prismaService: PrismaService) {}

  search(params: {
    skip?: number;
    take?: number;
    where?: Prisma.ItemWhereInput;
    orderBy?: Prisma.ItemOrderByInput;
  }): Promise<Item[]> {
    const { skip, take, where, orderBy } = params;
    return this.prismaService.item.findMany({
      skip,
      take,
      where,
      orderBy,
    });
  }

  getById(id: number): Promise<Item | null> {
    return this.prismaService.item.findUnique({
      where: { id },
    });
  }

  async create(data: CreateItemDto): Promise<Item> {
    const date = new Date();
    const itemToCreate = {
      ...data,
      //TODO: audit
      createdAt: date,
      createdById: 1,
      updatedAt: date,
      updatedById: 1,
    };
    return this.prismaService.item.create({
      data: itemToCreate,
    });
  }

  update(params: { id: number; data: UpdateItemDto }): Promise<Item> {
    const { id, data } = params;
    const date = new Date();
    const itemToUpdate = {
      ...data,
      //TODO: audit
      updatedAt: date,
      updatedById: 1,
    };
    return this.prismaService.item.update({
      data: itemToUpdate,
      where: { id: id },
    });
  }

  delete(id: number): Promise<Item> {
    return this.prismaService.item.delete({
      where: { id },
    });
  }
}
