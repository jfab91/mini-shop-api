import { ProductsService } from './products.service';
import { CreateProductDto, UpdateProductDto } from './dtos';
import {
  Body,
  Controller,
  Delete,
  Get,
  NotImplementedException,
  Param,
  Post,
  Put,
} from '@nestjs/common';

@Controller('products')
export class ProductsController {
  constructor(private readonly service: ProductsService) {}

  @Get()
  public list() {
    throw new NotImplementedException();
  }

  @Get(':id')
  public get(@Param('id') id: string) {
    throw new NotImplementedException();
  }

  @Post()
  public create(@Body() payload: CreateProductDto) {
    throw new NotImplementedException();
  }

  @Put(':id')
  public update(@Param('id') id: string, @Body() payload: UpdateProductDto) {
    throw new NotImplementedException();
  }

  @Delete(':id')
  public delete(@Param('id') id: string) {
    throw new NotImplementedException();
  }
}
