import { Args, Int, Mutation, Query, Resolver } from '@nestjs/graphql';
import { CreateLoanInput } from './dto/create-loan.input';
import { UpdateLoanInput } from './dto/update-loan.input';
import { Loan } from './entities/loan.entity';
import { LoansService } from './loans.service';

@Resolver(() => Loan)
export class LoansResolver {
  constructor(private readonly loansService: LoansService) {}

  @Mutation(() => Loan)
  createLoan(@Args('createLoanInput') createLoanInput: CreateLoanInput) {
    return this.loansService.create(createLoanInput);
  }

  @Query(() => [Loan], { name: 'loans' })
  findAll() {
    return this.loansService.findAll();
  }

  @Query(() => Loan, { name: 'loan' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.loansService.findOne(id);
  }

  @Mutation(() => Loan)
  updateLoan(@Args('updateLoanInput') updateLoanInput: UpdateLoanInput) {
    return this.loansService.update(updateLoanInput.id, updateLoanInput);
  }

  @Mutation(() => Loan)
  removeLoan(@Args('id', { type: () => Int }) id: number) {
    return this.loansService.remove(id);
  }
}
