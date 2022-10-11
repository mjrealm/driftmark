import { Field, ID, InputType, PartialType } from '@nestjs/graphql';
import { CreateLoanTypeInput } from './create-loan-type.input';

@InputType()
export class UpdateLoanTypeInput extends PartialType(CreateLoanTypeInput) {
  @Field(() => ID)
  id: number;
}
