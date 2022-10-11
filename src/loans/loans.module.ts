import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Loan } from './entities/loan.entity';
import { LoansResolver } from './loans.resolver';
import { LoansService } from './loans.service';

import { LoanTypesModule } from './loan-types/loan-types.module';

@Module({
  imports: [TypeOrmModule.forFeature([Loan]), LoanTypesModule],
  providers: [LoansResolver, LoansService],
  exports: [LoansService, LoansResolver],
})
export class LoansModule {}
