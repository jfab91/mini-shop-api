import { PartialType } from '@nestjs/mapped-types';
import { CreateCustomerDto } from '.';

export class UpdateCustomerDto extends PartialType(CreateCustomerDto) {}
