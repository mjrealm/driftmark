import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { XFieldsService } from './x-fields.service';
import { XField } from './entities/x-field.entity';
import { CreateXFieldInput } from './dto/create-x-field.input';
import { UpdateXFieldInput } from './dto/update-x-field.input';
import { XFieldScope } from './entities/x-fields-scope.enum';

@Resolver(() => XField)
export class XFieldsResolver {
  constructor(private readonly xFieldsService: XFieldsService) {}

  @Mutation(() => XField)
  createXField(
    @Args('createXFieldInput') createXFieldInput: CreateXFieldInput,
  ) {
    return this.xFieldsService.create(createXFieldInput);
  }

  @Query(() => [XField], { name: 'xFields' })
  findAll() {
    return this.xFieldsService.findAll();
  }

  @Query(() => [XField], { name: 'xFieldsByScope' })
  findAllByScope(
    @Args('scope', { type: () => XFieldScope }) scope: XFieldScope,
  ) {
    return this.xFieldsService.findAllByScope(scope);
  }

  @Query(() => XField, { name: 'xField' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.xFieldsService.findOne(id);
  }

  @Mutation(() => XField)
  updateXField(
    @Args('updateXFieldInput') updateXFieldInput: UpdateXFieldInput,
  ) {
    return this.xFieldsService.update(updateXFieldInput.id, updateXFieldInput);
  }

  @Mutation(() => XField)
  removeXField(@Args('id', { type: () => Int }) id: number) {
    return this.xFieldsService.remove(id);
  }
}
