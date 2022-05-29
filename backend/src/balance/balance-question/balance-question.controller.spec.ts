import { Test, TestingModule } from '@nestjs/testing';
import { BalanceQuestionController } from './balance-question.controller';
import { BalanceQuestionService } from './balance-question.service';

describe('BalanceQuestionController', () => {
  let controller: BalanceQuestionController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [BalanceQuestionController],
      providers: [BalanceQuestionService],
    }).compile();

    controller = module.get<BalanceQuestionController>(BalanceQuestionController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
