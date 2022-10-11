import { InputType, PartialType } from '@nestjs/graphql';
import { Customer } from '../entities/customer.entity';

@InputType()
export class UpdateCustomerInput extends PartialType(Customer, InputType) {}
