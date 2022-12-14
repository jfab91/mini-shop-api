import { OrdersService } from './orders.service';
import {
  Controller,
  Delete,
  Get,
  NotImplementedException,
  Post,
  Put,
} from '@nestjs/common';

@Controller('orders')
export class OrdersController {
  constructor(private readonly service: OrdersService) {}

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
