import { Field, InputType, Int, PartialType } from '@nestjs/graphql';
import { CreateCompanyInput } from './create-company.input';

@InputType()
export class UpdateCompanyInput extends PartialType(CreateCompanyInput) {
  @Field(() => Int)
  id: number;
}
