import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { CustomersService } from './customers.service';
import { CreateCustomerInput } from './dto/create-customer.input';
import { UpdateCustomerInput } from './dto/update-customer.input';
import { Customer } from './entities/customer.entity';

@Resolver(() => Customer)
export class CustomersResolver {
  constructor(private readonly customersService: CustomersService) {}

  @Mutation(() => Customer)
  createCustomer(
    @Args('createCustomerInput') createCustomerInput: CreateCustomerInput,
  ) {
    return this.customersService.create(createCustomerInput);
  }

  @Query(() => [Customer], { name: 'customers' })
  findAll() {
    return this.customersService.findAll();
  }

  @Query(() => Customer, { name: 'customer', nullable: true })
  findOne(@Args('id') id: string) {
    return this.customersService.findOne(id);
  }

  @Mutation(() => Customer)
  updateCustomer(
    @Args('updateCustomerInput') updateCustomerInput: UpdateCustomerInput,
  ) {
    return this.customersService.update(
      updateCustomerInput.id,
      updateCustomerInput,
    );
  }

  @Mutation(() => Customer)
  removeCustomer(@Args('id', { type: () => String }) id: string) {
    return this.customersService.remove(id);
  }
}
