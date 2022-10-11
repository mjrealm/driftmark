import { InputType } from '@nestjs/graphql';

@InputType()
export class CreateXFieldsValueCustomerInput {
  xFieldId: number;
  customerId: string;
  value: string;
}
