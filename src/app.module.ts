import { Module } from '@nestjs/common';
import { ConfigModule, ConfigType } from '@nestjs/config';
import * as Joi from 'joi';

import { OrdersModule } from './orders/orders.module';
import { UsersModule } from './users/users.module';
import { CustomersModule } from './customers/customers.module';
import { CategoriesModule } from './categories/categories.module';
import { ProductsModule } from './products/products.module';
import { BrandsModule } from './brands/brands.module';
import { environments } from './environments';
import { AuthModule } from './auth/auth.module';
import { DatabaseModule } from './database/database.module';
import config from './config';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: environments[process.env.NODE_ENV] ?? '.env',
      load: [config],
      validationSchema: Joi.object({
        DB_HOST: Joi.string().required(),
      }),
      isGlobal: true,
    }),
    OrdersModule,
    UsersModule,
    CustomersModule,
    CategoriesModule,
    ProductsModule,
    BrandsModule,
    AuthModule,
    DatabaseModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
