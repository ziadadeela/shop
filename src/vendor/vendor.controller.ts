import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { VendorService } from './vendor.service';
import { CreateVendorDto } from './dto/create-vendor.dto';
import { UpdateVendorDto } from './dto/update-vendor.dto';
import { Prisma } from '@prisma/client';

@Controller('vendor')
export class VendorController {
  constructor(private readonly vendorService: VendorService) {}

  // https://github.com/prisma/prisma-examples/blob/731b43dcc68479ff06c5a759c1d5f384a2484feb/typescript/rest-nestjs/src/app.controller.ts#L24
  @Get()
  search(
    @Body()
    data: {
      skip?: number;
      take?: number;
      where?: Prisma.VendorWhereInput;
      orderBy?: Prisma.VendorOrderByInput;
    },
  ) {
    return this.vendorService.search(data);
  }

  @Get(':id')
  getById(@Param('id') id: number) {
    return this.vendorService.getById(id);
  }

  @Post()
  create(@Body() vendorData: CreateVendorDto) {
    return this.vendorService.create(vendorData);
  }

  @Patch(':id')
  update(@Param('id') id: number, @Body() vendorData: UpdateVendorDto) {
    return this.vendorService.update({
      id: id,
      data: vendorData,
    });
  }

  @Delete(':id')
  delete(@Param('id') id: number) {
    return this.vendorService.delete(id);
  }
}
