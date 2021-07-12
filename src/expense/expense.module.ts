import { Module } from '@nestjs/common';
import { ExpenseService } from './expense.service';
import { ExpenseController } from './expense.controller';
import { PrismaModule } from '../prisma/prisma.module';

@Module({
  controllers: [ExpenseController],
  providers: [ExpenseService],
  imports: [PrismaModule],
})
export class ExpenseModule {}
