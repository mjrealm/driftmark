import { Field, ID, InputType, ObjectType } from '@nestjs/graphql';
import { Versioned } from 'src/common/entities/version.entity';
import { NanoIDUtils } from 'src/common/utils/nanoid.utils';
import { Customer } from 'src/customers/entities/customer.entity';
import { XFieldsValueLoan } from 'src/x-fields-values/entities/x-fields-value-loan.entity';
import {
  BeforeInsert,
  Column,
  Entity,
  ManyToMany,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { LoanType } from '../loan-types/entities/loan-type.entity';

@ObjectType()
@Entity()
@InputType('LoanInput')
export class Loan extends Versioned {
  @Field(() => ID)
  @PrimaryGeneratedColumn()
  id: number;

  /**
   * Auto-generated loan reference ID
   */
  @Column()
  referenceId: string;

  /**
   * Name of loan
   */
  @Column()
  name: string;

  /**
   * Loan amount
   */
  @Column()
  amount: number;

  /**
   * Loan balance
   *
   */
  @Column()
  balance: number;

  /**
   * Loan rate
   */
  @Column()
  rate: number;

  /**
   * Loan type to use
   */
  @Column()
  loanTypeId: number;

  /**
   * Loan Type object
   */
  @ManyToOne(() => LoanType)
  loanType?: LoanType;

  /**
   * Customer ID
   *
   */
  @Column()
  customerId: string;

  /**
   * Customer that owns this loan
   */
  @ManyToOne(() => Customer, (customer) => customer.loans)
  customer?: Customer;

  /**
   * XField values for this Customer
   */
  @OneToMany(() => XFieldsValueLoan, (xFieldValue) => xFieldValue.loan)
  xFieldValues?: XFieldsValueLoan[];

  /**
   * Loan start date
   */
  @Column(() => Date)
  startDate: Date;

  /**
   * Fixed duration in number of months
   */
  @Column({ nullable: true })
  fixedDurationInMos?: number;

  /**
   * Generate a custom reference number
   */
  @BeforeInsert()
  beforeInsert() {
    this.referenceId = NanoIDUtils.generateReferenceId('LN');
    this.balance = this.amount;
  }
}
