import { Field, ID, InputType } from '@nestjs/graphql';

@InputType()
export class UpdateXFieldsValueInput {
  @Field(() => ID)
  id: number;
  value: string;
}
