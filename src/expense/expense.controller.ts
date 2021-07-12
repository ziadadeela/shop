import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { ExpenseService } from './expense.service';
import { CreateExpenseDto } from './dto/create-expense.dto';
import { UpdateExpenseDto } from './dto/update-expense.dto';
import { Prisma } from '@prisma/client';

@Controller('expense')
export class ExpenseController {
  constructor(private readonly expenseService: ExpenseService) {}

  // https://github.com/prisma/prisma-examples/blob/731b43dcc68479ff06c5a759c1d5f384a2484feb/typescript/rest-nestjs/src/app.controller.ts#L24
  @Get()
  search(
    @Body()
    data: {
      skip?: number;
      take?: number;
      where?: Prisma.ExpenseWhereInput;
      orderBy?: Prisma.ExpenseOrderByInput;
    },
  ) {
    return this.expenseService.search(data);
  }

  @Get(':id')
  getById(@Param('id') id: number) {
    return this.expenseService.getById(id);
  }

  @Post()
  create(@Body() expenseData: CreateExpenseDto) {
    return this.expenseService.create(expenseData);
  }

  @Patch(':id')
  update(@Param('id') id: number, @Body() expenseData: UpdateExpenseDto) {
    return this.expenseService.update({
      id: id,
      data: expenseData,
    });
  }

  @Delete(':id')
  delete(@Param('id') id: number) {
    return this.expenseService.delete(id);
  }
}
