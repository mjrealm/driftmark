import { InputType } from '@nestjs/graphql';
import { LoanPaymentFrequency } from '../entities/loan-type-frequency.enum';

@InputType()
export class CreateLoanTypeInput {
  name: string;
  frequency: LoanPaymentFrequency;
  days?: number[];
  description: string;
}
