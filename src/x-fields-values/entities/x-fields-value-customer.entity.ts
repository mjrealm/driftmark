import { InputType, ObjectType } from '@nestjs/graphql';
import { Customer } from 'src/customers/entities/customer.entity';
import { Entity, ManyToOne, OneToOne, PrimaryColumn } from 'typeorm';
import { XFieldsValue } from './x-fields-value.entity';

@ObjectType()
@InputType('XFieldsValueCustomerInput')
@Entity()
export class XFieldsValueCustomer extends XFieldsValue {
  @ManyToOne(() => Customer, (customer) => customer.xFieldValues)
  customer: Customer;

  @PrimaryColumn()
  customerId?: string;
}
