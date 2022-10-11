import { Test, TestingModule } from '@nestjs/testing';
import { XFieldsResolver } from './x-fields.resolver';
import { XFieldsService } from './x-fields.service';

describe('XFieldsResolver', () => {
  let resolver: XFieldsResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [XFieldsResolver, XFieldsService],
    }).compile();

    resolver = module.get<XFieldsResolver>(XFieldsResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
