import { NotImplementedException } from '@nestjs/common';
import { Args, Int, Mutation, Query, Resolver } from '@nestjs/graphql';
import { XFieldScope } from 'src/x-fields/entities/x-fields-scope.enum';
import { CreateXFieldsValueCustomerInput } from './dto/create-x-fields-value-customer.input';
import { CreateXFieldsValueLoanInput } from './dto/create-x-fields-value-loan.input';
import { UpdateXFieldsValueInput } from './dto/update-x-fields-value.input';
import { XFieldsValue } from './entities/x-fields-value.entity';
import { XFieldsValuesCustomerService } from './x-fields-values-customer.service';
import { XFieldsValuesLoanService } from './x-fields-values-loan.service';

@Resolver(() => XFieldsValue)
export class XFieldsValuesResolver {
  constructor(
    private readonly xFieldsValuesCustomerService: XFieldsValuesCustomerService,
    private readonly xFieldsValuesLoanService: XFieldsValuesLoanService,
  ) {}

  @Mutation(() => XFieldsValue)
  createXFieldsValueCustomer(
    @Args('createXFieldsValueCustomerInput')
    createXFieldsValueCustomerInput: CreateXFieldsValueCustomerInput,
  ) {
    return this.xFieldsValuesCustomerService.create(
      createXFieldsValueCustomerInput,
    );
  }

  @Mutation(() => XFieldsValue)
  createXFieldsValueLoan(
    @Args('createXFieldsValueLoanInput')
    createXFieldsValueCustomerInput: CreateXFieldsValueLoanInput,
  ) {
    return this.xFieldsValuesLoanService.create(
      createXFieldsValueCustomerInput,
    );
  }

  @Query(() => [XFieldsValue], { name: 'xFieldsValues' })
  findAll(@Args('scope', { type: () => XFieldScope }) scope: XFieldScope) {
    switch (scope) {
      case XFieldScope.CUSTOMER: {
        return this.xFieldsValuesCustomerService.findAll();
      }
      case XFieldScope.LOAN: {
        return this.xFieldsValuesLoanService.findAll();
      }
      default: {
        throw new NotImplementedException(`Invalid scope #${scope}`);
      }
    }
  }

  @Query(() => XFieldsValue, { name: 'xFieldsValue' })
  findOne(
    @Args('id', { type: () => Int }) id: number,
    @Args('scope', { type: () => XFieldScope }) scope: XFieldScope,
  ) {
    switch (scope) {
      case XFieldScope.CUSTOMER: {
        return this.xFieldsValuesCustomerService.findOne(id);
      }
      case XFieldScope.LOAN: {
        return this.xFieldsValuesLoanService.findOne(id);
      }
      default: {
        throw new NotImplementedException(`Invalid scope #${scope}`);
      }
    }
  }

  @Mutation(() => XFieldsValue)
  updateXFieldsValue(
    @Args('updateXFieldsValueInput')
    updateXFieldsValueInput: UpdateXFieldsValueInput,
    @Args('scope', { type: () => XFieldScope }) scope: XFieldScope,
  ) {
    switch (scope) {
      case XFieldScope.CUSTOMER: {
        return this.xFieldsValuesCustomerService.update(
          updateXFieldsValueInput.id,
          updateXFieldsValueInput,
        );
      }
      case XFieldScope.LOAN: {
        return this.xFieldsValuesLoanService.update(
          updateXFieldsValueInput.id,
          updateXFieldsValueInput,
        );
      }
      default: {
        throw new NotImplementedException(`Invalid scope #${scope}`);
      }
    }
  }

  @Mutation(() => XFieldsValue)
  removeXFieldsValue(
    @Args('id', { type: () => Int }) id: number,
    @Args('scope', { type: () => XFieldScope }) scope: XFieldScope,
  ) {
    switch (scope) {
      case XFieldScope.CUSTOMER: {
        return this.xFieldsValuesCustomerService.remove(id);
      }
      case XFieldScope.LOAN: {
        return this.xFieldsValuesLoanService.remove(id);
      }
      default: {
        throw new NotImplementedException(`Invalid scope #${scope}`);
      }
    }
  }
}
