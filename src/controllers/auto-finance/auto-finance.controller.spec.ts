import { Test, TestingModule } from '@nestjs/testing';
import { AutoFinanceController } from './auto-finance.controller';

describe('AutoFinanceController', () => {
  let controller: AutoFinanceController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AutoFinanceController],
    }).compile();

    controller = module.get<AutoFinanceController>(AutoFinanceController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
