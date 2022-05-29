import { Test, TestingModule } from '@nestjs/testing';
import { BalanceQuestionService } from './balance-question.service';

describe('BalanceQuestionService', () => {
  let service: BalanceQuestionService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [BalanceQuestionService],
    }).compile();

    service = module.get<BalanceQuestionService>(BalanceQuestionService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
