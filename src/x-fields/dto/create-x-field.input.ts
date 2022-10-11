import { InputType } from '@nestjs/graphql';
import { XFieldScope } from '../entities/x-fields-scope.enum';
import { XFieldType } from '../entities/x-fields-type.enum';

@InputType()
export class CreateXFieldInput {
  name: string;
  type: XFieldType;
  scope: XFieldScope;
  default?: string;
  required: boolean;
  orderIndex: number;
  options?: string[];
}
