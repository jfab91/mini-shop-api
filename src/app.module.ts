import { Module } from '@nestjs/common';
import { OrdersModule } from './orders/orders.module';
import { UsersModule } from './users/users.module';
import { CustomersModule } from './customers/customers.module';
import { CategoriesModule } from './categories/categories.module';
import { ProductsModule } from './products/products.module';
import { BrandsModule } from './brands/brands.module';
import { ConfigModule } from '@nestjs/config';
import { environments } from './environments';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: environments[process.env.NODE_ENV] ?? '.env',
      isGlobal: true,
    }),
    OrdersModule,
    UsersModule,
    CustomersModule,
    CategoriesModule,
    ProductsModule,
    BrandsModule,
    AuthModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
