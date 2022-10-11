import { InputType, ObjectType } from '@nestjs/graphql';
import { Loan } from 'src/loans/entities/loan.entity';
import { Entity, ManyToOne, PrimaryColumn } from 'typeorm';
import { XFieldsValue } from './x-fields-value.entity';

@ObjectType()
@InputType('XFieldsValueLoanInput')
@Entity()
export class XFieldsValueLoan extends XFieldsValue {
  @PrimaryColumn()
  loanId: number;

  @ManyToOne(() => Loan, (loan) => loan.xFieldValues)
  loan: Loan;
}
