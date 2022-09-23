import { OrderService } from './order.service';
import {
  Controller,
  Delete,
  Get,
  NotImplementedException,
  Post,
  Put,
} from '@nestjs/common';

@Controller('order')
export class OrderController {
  constructor(private readonly service: OrderService) {}

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
