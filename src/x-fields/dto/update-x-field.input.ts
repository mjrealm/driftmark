import { InputType, OmitType, PartialType } from '@nestjs/graphql';
import { CreateXFieldInput } from './create-x-field.input';

@InputType()
export class UpdateXFieldInput extends PartialType(
  OmitType(CreateXFieldInput, ['type', 'scope'] as const),
) {
  id: number;
}
