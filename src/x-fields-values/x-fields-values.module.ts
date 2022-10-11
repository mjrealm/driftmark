import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { XFieldsValueCustomer } from './entities/x-fields-value-customer.entity';
import { XFieldsValueLoan } from './entities/x-fields-value-loan.entity';
import { XFieldsValuesCustomerService } from './x-fields-values-customer.service';
import { XFieldsValuesLoanService } from './x-fields-values-loan.service';
import { XFieldsValuesResolver } from './x-fields-values.resolver';

@Module({
  imports: [TypeOrmModule.forFeature([XFieldsValueCustomer, XFieldsValueLoan])],
  providers: [
    XFieldsValuesResolver,
    XFieldsValuesLoanService,
    XFieldsValuesCustomerService,
  ],
})
export class XFieldsValuesModule {}
