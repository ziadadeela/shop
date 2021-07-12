import { PartialType } from '@nestjs/mapped-types';
import { CreateItemQuantityDto } from './create-item-quantity.dto';

export class UpdateItemQuantityDto extends PartialType(CreateItemQuantityDto) {}
