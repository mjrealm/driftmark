import { Test, TestingModule } from '@nestjs/testing';
import { XFieldsService } from './x-fields.service';

describe('XFieldsService', () => {
  let service: XFieldsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [XFieldsService],
    }).compile();

    service = module.get<XFieldsService>(XFieldsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
