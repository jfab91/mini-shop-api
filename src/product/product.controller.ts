import { ProductService } from './product.service';
import {
  Controller,
  Delete,
  Get,
  NotImplementedException,
  Post,
  Put,
} from '@nestjs/common';

@Controller('product')
export class ProductController {
  constructor(private readonly service: ProductService) {}

  @Get()
  public list() {
    throw new NotImplementedException();
  }

  @Get(':id')
  public get() {
    throw new NotImplementedException();
  }

  @Post()
  public create() {
    throw new NotImplementedException();
  }

  @Put(':id')
  public update() {
    throw new NotImplementedException();
  }

  @Delete(':id')
  public delete() {
    throw new NotImplementedException();
  }
}
