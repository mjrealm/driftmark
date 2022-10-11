import { Test, TestingModule } from '@nestjs/testing';
import { LoanTypesResolver } from './loan-types.resolver';
import { LoanTypesService } from './loan-types.service';

describe('LoanTypesResolver', () => {
  let resolver: LoanTypesResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [LoanTypesResolver, LoanTypesService],
    }).compile();

    resolver = module.get<LoanTypesResolver>(LoanTypesResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
