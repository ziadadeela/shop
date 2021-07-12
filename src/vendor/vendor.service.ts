import { Injectable } from '@nestjs/common';
import { CreateVendorDto } from './dto/create-vendor.dto';
import { UpdateVendorDto } from './dto/update-vendor.dto';
import { Vendor, Prisma } from '@prisma/client';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class VendorService {
  constructor(private readonly prismaService: PrismaService) {}

  search(params: {
    skip?: number;
    take?: number;
    where?: Prisma.VendorWhereInput;
    orderBy?: Prisma.VendorOrderByInput;
  }): Promise<Vendor[]> {
    const { skip, take, where, orderBy } = params;
    return this.prismaService.vendor.findMany({
      skip,
      take,
      where,
      orderBy,
    });
  }

  getById(id: number): Promise<Vendor | null> {
    return this.prismaService.vendor.findUnique({
      where: { id },
    });
  }

  async create(data: CreateVendorDto): Promise<Vendor> {
    const date = new Date();
    const vendorToCreate = {
      ...data,
      //TODO: audit
      createdAt: date,
      createdById: 1,
      updatedAt: date,
      updatedById: 1,
    };
    return this.prismaService.vendor.create({
      data: vendorToCreate,
    });
  }

  update(params: { id: number; data: UpdateVendorDto }): Promise<Vendor> {
    const { id, data } = params;
    const date = new Date();
    const vendorToUpdate = {
      ...data,
      //TODO: audit
      updatedAt: date,
      updatedById: 1,
    };
    return this.prismaService.vendor.update({
      data: vendorToUpdate,
      where: { id: id },
    });
  }

  delete(id: number): Promise<Vendor> {
    return this.prismaService.vendor.delete({
      where: { id },
    });
  }
}
