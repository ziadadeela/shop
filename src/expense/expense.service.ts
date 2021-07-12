import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { Prisma, Expense } from '@prisma/client';
import { CreateExpenseDto } from './dto/create-expense.dto';
import { UpdateExpenseDto } from './dto/update-expense.dto';

@Injectable()
export class ExpenseService {
  constructor(private readonly prismaService: PrismaService) {}

  search(params: {
    skip?: number;
    take?: number;
    where?: Prisma.ExpenseWhereInput;
    orderBy?: Prisma.ExpenseOrderByInput;
  }): Promise<Expense[]> {
    const { skip, take, where, orderBy } = params;
    return this.prismaService.expense.findMany({
      skip,
      take,
      where,
      orderBy,
    });
  }

  getById(id: number): Promise<Expense | null> {
    return this.prismaService.expense.findUnique({
      where: { id },
    });
  }

  async create(data: CreateExpenseDto): Promise<Expense> {
    const date = new Date();
    const expenseToCreate = {
      ...data,
      //TODO: audit
      createdAt: date,
      createdById: 1,
      updatedAt: date,
      updatedById: 1,
    };
    return this.prismaService.expense.create({
      data: expenseToCreate,
    });
  }

  update(params: { id: number; data: UpdateExpenseDto }): Promise<Expense> {
    const { id, data } = params;
    const date = new Date();
    const expenseToUpdate = {
      ...data,
      //TODO: audit
      updatedAt: date,
      updatedById: 1,
    };
    return this.prismaService.expense.update({
      data: expenseToUpdate,
      where: { id: id },
    });
  }

  delete(id: number): Promise<Expense> {
    return this.prismaService.expense.delete({
      where: { id },
    });
  }
}
