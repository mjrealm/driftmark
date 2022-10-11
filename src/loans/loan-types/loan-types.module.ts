import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { LoanType } from './entities/loan-type.entity';
import { LoanTypesResolver } from './loan-types.resolver';
import { LoanTypesService } from './loan-types.service';

@Module({
  imports: [TypeOrmModule.forFeature([LoanType])],
  providers: [LoanTypesResolver, LoanTypesService],
})
export class LoanTypesModule {}
