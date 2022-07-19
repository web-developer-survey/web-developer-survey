import { Module } from '@nestjs/common';
import { BalanceQuestionService } from './balance-question.service';
import { BalanceQuestionController } from './balance-question.controller';
import { BalanceQuestionRepository } from '@app/api/balance/balance-question/balance.question.repository';
import { QuestionBalanceFeature } from '@app/my-library/models/balance/question.balance.schema';

@Module({
  imports: [QuestionBalanceFeature],
  controllers: [BalanceQuestionController],
  providers: [BalanceQuestionService, BalanceQuestionRepository],
})
export class BalanceQuestionModule {}
