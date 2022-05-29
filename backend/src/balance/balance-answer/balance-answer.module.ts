import { Module } from '@nestjs/common';
import { BalanceAnswerService } from './balance-answer.service';
import { BalanceAnswerController } from './balance-answer.controller';
import { BalanceAnswerRepository } from '@app/api/balance/balance-answer/balance.answer.repository';
import { AnswerBalanceFactory } from '@app/my-library/models/balance/answer.balance.schema';

@Module({
  imports: [AnswerBalanceFactory],
  controllers: [BalanceAnswerController],
  providers: [BalanceAnswerService, BalanceAnswerRepository],
})
export class BalanceAnswerModule {}
