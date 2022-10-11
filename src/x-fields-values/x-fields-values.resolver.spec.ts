import { Test, TestingModule } from '@nestjs/testing';
import { XFieldsValuesCustomerService } from './x-fields-values-customer.service';
import { XFieldsValuesLoanService } from './x-fields-values-loan.service';
import { XFieldsValuesResolver } from './x-fields-values.resolver';

describe('XFieldsValuesResolver', () => {
  let resolver: XFieldsValuesResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        XFieldsValuesResolver,
        XFieldsValuesLoanService,
        XFieldsValuesCustomerService,
      ],
    }).compile();

    resolver = module.get<XFieldsValuesResolver>(XFieldsValuesResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
