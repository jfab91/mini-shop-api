import { CategoriesService } from './categories.service';
import {
  Controller,
  Delete,
  Get,
  NotImplementedException,
  Post,
  Put,
} from '@nestjs/common';

@Controller('categories')
export class CategoriesController {
  constructor(private readonly service: CategoriesService) {}

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
