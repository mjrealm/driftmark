import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { LoanTypesService } from './loan-types.service';
import { LoanType } from './entities/loan-type.entity';
import { CreateLoanTypeInput } from './dto/create-loan-type.input';
import { UpdateLoanTypeInput } from './dto/update-loan-type.input';

@Resolver(() => LoanType)
export class LoanTypesResolver {
  constructor(private readonly loanTypesService: LoanTypesService) {}

  @Mutation(() => LoanType)
  createLoanType(@Args('createLoanTypeInput') createLoanTypeInput: CreateLoanTypeInput) {
    return this.loanTypesService.create(createLoanTypeInput);
  }

  @Query(() => [LoanType], { name: 'loanTypes' })
  findAll() {
    return this.loanTypesService.findAll();
  }

  @Query(() => LoanType, { name: 'loanType' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.loanTypesService.findOne(id);
  }

  @Mutation(() => LoanType)
  updateLoanType(@Args('updateLoanTypeInput') updateLoanTypeInput: UpdateLoanTypeInput) {
    return this.loanTypesService.update(updateLoanTypeInput.id, updateLoanTypeInput);
  }

  @Mutation(() => LoanType)
  removeLoanType(@Args('id', { type: () => Int }) id: number) {
    return this.loanTypesService.remove(id);
  }
}
