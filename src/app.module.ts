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
import { AuthModule } from './auth/auth.module';
import { UserModule } from './user/user.module';
import { APP_GUARD } from '@nestjs/core';
import { JwtAuthGuard } from './auth/jwt-auth.guard';

@Module({
  imports: [
    ItemModule,
    VendorModule,
    PurchaseModule,
    ExpenseModule,
    CategoryModule,
    PurchaseItemModule,
    ItemQuantityModule,
    AuthModule,
    UserModule,
  ],
  controllers: [AppController],
  providers: [
    PrismaService,
    // {
    //   provide: APP_GUARD,
    //   useClass: JwtAuthGuard,
    // },
  ],
})
export class AppModule {}
