import { Module } from '@nestjs/common';
import { BalanceAnswerService } from './balance-answer.service';
import { BalanceAnswerController } from './balance-answer.controller';

@Module({
  controllers: [BalanceAnswerController],
  providers: [BalanceAnswerService]
})
export class BalanceAnswerModule {}
