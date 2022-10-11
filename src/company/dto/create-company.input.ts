import { Field, InputType } from '@nestjs/graphql';
import { Address } from 'src/customers/entities/address.entity';

@InputType()
export class CreateCompanyInput {
  @Field()
  name: string;

  @Field(() => Address)
  address: Address;

  @Field()
  phone: string;

  @Field()
  email: string;
}
