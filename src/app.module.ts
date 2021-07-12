import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { PrismaService } from './prisma/prisma.service';
import { ItemModule } from './item/item.module';
import { VendorModule } from './vendor/vendor.module';
import { PurchaseModule } from './purchase/purchase.module';
import { ExpenseModule } from './expense/expense.module';
import { CategoryModule } from './category/category.module';
import { PurchaseItemModule } from './purchase-item/purchase-item.module';
import { ItemQuantityModule } from './item-quantity/item-quantity.module';

@Module({
  imports: [
    ItemModule,
    VendorModule,
    PurchaseModule,
    ExpenseModule,
    CategoryModule,
    PurchaseItemModule,
    ItemQuantityModule,
  ],
  controllers: [AppController],
  providers: [PrismaService],
})
export class AppModule {}
