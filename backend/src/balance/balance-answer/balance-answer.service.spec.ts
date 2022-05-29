import { Test, TestingModule } from '@nestjs/testing';
import { BalanceAnswerService } from './balance-answer.service';

describe('BalanceAnswerService', () => {
  let service: BalanceAnswerService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [BalanceAnswerService],
    }).compile();

    service = module.get<BalanceAnswerService>(BalanceAnswerService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
