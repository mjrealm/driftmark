import { InputType } from '@nestjs/graphql';

@InputType()
export class CreateXFieldsValueLoanInput {
  xFieldId: number;
  loanId: number;
  value: string;
}
