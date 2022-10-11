import { InputType } from '@nestjs/graphql';

@InputType()
export class CreateLoanInput {
  name: string;

  customerId: string;

  amount: number;

  rate: number;

  loanTypeId: number;
}
