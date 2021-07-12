import { Module } from '@nestjs/common';
import { ItemQuantityService } from './item-quantity.service';
import { ItemQuantityController } from './item-quantity.controller';

@Module({
  controllers: [ItemQuantityController],
  providers: [ItemQuantityService]
})
export class ItemQuantityModule {}
