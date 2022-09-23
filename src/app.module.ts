import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { OrderModule } from './order/order.module';
import { UserModule } from './user/user.module';
import { CustomerModule } from './customer/customer.module';
import { CategoryModule } from './category/category.module';
import { ProductModule } from './product/product.module';
import { BrandModule } from './brand/brand.module';

@Module({
  imports: [OrderModule, UserModule, CustomerModule, CategoryModule, ProductModule, BrandModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
