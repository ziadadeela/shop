import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { ItemService } from './item.service';
import { CreateItemDto } from './dto/create-item.dto';
import { UpdateItemDto } from './dto/update-item.dto';
import { Prisma } from '@prisma/client';

@Controller('item')
export class ItemController {
  constructor(private readonly itemService: ItemService) {}

  // https://github.com/prisma/prisma-examples/blob/731b43dcc68479ff06c5a759c1d5f384a2484feb/typescript/rest-nestjs/src/app.controller.ts#L24
  @Get()
  search(
    @Body()
    data: {
      skip?: number;
      take?: number;
      where?: Prisma.ItemWhereInput;
      orderBy?: Prisma.ItemOrderByInput;
    },
  ) {
    return this.itemService.search(data);
  }

  @Get(':id')
  getById(@Param('id') id: number) {
    return this.itemService.getById(id);
  }

  @Post()
  create(@Body() itemData: CreateItemDto) {
    return this.itemService.create(itemData);
  }

  @Patch(':id')
  update(@Param('id') id: number, @Body() itemData: UpdateItemDto) {
    return this.itemService.update({
      id: id,
      data: itemData,
    });
  }

  @Delete(':id')
  delete(@Param('id') id: number) {
    return this.itemService.delete(id);
  }
}
