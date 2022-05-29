import { Test, TestingModule } from '@nestjs/testing';
import { BalanceAnswerController } from './balance-answer.controller';
import { BalanceAnswerService } from './balance-answer.service';

describe('BalanceAnswerController', () => {
  let controller: BalanceAnswerController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [BalanceAnswerController],
      providers: [BalanceAnswerService],
    }).compile();

    controller = module.get<BalanceAnswerController>(BalanceAnswerController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
