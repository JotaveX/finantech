import { Test, TestingModule } from '@nestjs/testing';
import { AutoFinanceService } from './auto-finance.service';

describe('AutoFinanceService', () => {
  let service: AutoFinanceService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AutoFinanceService],
    }).compile();

    service = module.get<AutoFinanceService>(AutoFinanceService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
