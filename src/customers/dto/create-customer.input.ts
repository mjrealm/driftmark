import { InputType } from '@nestjs/graphql';

@InputType()
export class CreateCustomerInput {
  name: string;

  phone: string;
}
