import { Test, TestingModule } from '@nestjs/testing';
import { ItemQuantityService } from './item-quantity.service';

describe('ItemQuantityService', () => {
  let service: ItemQuantityService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ItemQuantityService],
    }).compile();

    service = module.get<ItemQuantityService>(ItemQuantityService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
