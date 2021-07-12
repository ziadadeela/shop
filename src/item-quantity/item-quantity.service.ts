import { Injectable } from '@nestjs/common';
import { CreateItemQuantityDto } from './dto/create-item-quantity.dto';
import { UpdateItemQuantityDto } from './dto/update-item-quantity.dto';

@Injectable()
export class ItemQuantityService {
  create(createItemQuantityDto: CreateItemQuantityDto) {
    return 'This action adds a new itemQuantity';
  }

  findAll() {
    return `This action returns all itemQuantity`;
  }

  findOne(id: number) {
    return `This action returns a #${id} itemQuantity`;
  }

  update(id: number, updateItemQuantityDto: UpdateItemQuantityDto) {
    return `This action updates a #${id} itemQuantity`;
  }

  remove(id: number) {
    return `This action removes a #${id} itemQuantity`;
  }
}
