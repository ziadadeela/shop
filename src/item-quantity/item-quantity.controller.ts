import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ItemQuantityService } from './item-quantity.service';
import { CreateItemQuantityDto } from './dto/create-item-quantity.dto';
import { UpdateItemQuantityDto } from './dto/update-item-quantity.dto';

@Controller('item-quantity')
export class ItemQuantityController {
  constructor(private readonly itemQuantityService: ItemQuantityService) {}

  @Post()
  create(@Body() createItemQuantityDto: CreateItemQuantityDto) {
    return this.itemQuantityService.create(createItemQuantityDto);
  }

  @Get()
  findAll() {
    return this.itemQuantityService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.itemQuantityService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateItemQuantityDto: UpdateItemQuantityDto) {
    return this.itemQuantityService.update(+id, updateItemQuantityDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.itemQuantityService.remove(+id);
  }
}
