import { Test, TestingModule } from '@nestjs/testing';
import { ItemQuantityController } from './item-quantity.controller';
import { ItemQuantityService } from './item-quantity.service';

describe('ItemQuantityController', () => {
  let controller: ItemQuantityController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ItemQuantityController],
      providers: [ItemQuantityService],
    }).compile();

    controller = module.get<ItemQuantityController>(ItemQuantityController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
