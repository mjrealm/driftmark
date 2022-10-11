import { Field, InputType, ObjectType } from '@nestjs/graphql';
import { Versioned } from 'src/common/entities/version.entity';
import { Loan } from 'src/loans/entities/loan.entity';
import { XFieldsValueCustomer } from 'src/x-fields-values/entities/x-fields-value-customer.entity';
import { XFieldsValue } from 'src/x-fields-values/entities/x-fields-value.entity';
import { XField } from 'src/x-fields/entities/x-field.entity';
import {
  Column,
  Entity,
  OneToMany,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Address } from './address.entity';

@ObjectType()
@InputType('CustomerInput')
@Entity()
export class Customer extends Versioned {
  @Field(() => String)
  @PrimaryGeneratedColumn('uuid')
  id: string;

  /**
   * Name of the Customer
   */
  @Column({ length: 100 })
  name: string;

  /**
   * Full address of the Customer
   */
  @Column(() => Address)
  address: Address;

  /**
   * Primary phone contact
   */
  @Column()
  phone: string;

  /**
   * Primary email
   */
  @Column({ nullable: true })
  email?: string;

  /**
   * Additional notes for this Customer
   */
  @Column({ nullable: true, length: 500 })
  notes?: string;

  /**
   * All loans from this Customer
   */
  @OneToMany(() => Loan, (loan) => loan.customer)
  loans: Loan[];

  /**
   * XField values for this Customer
   */
  @OneToMany(() => XFieldsValueCustomer, (xFieldValue) => xFieldValue.customer)
  xFieldValues?: XFieldsValueCustomer[];
}
