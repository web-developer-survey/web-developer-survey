import { SurveyQuestionModule } from '@app/api/survey/survey-question/survey-question.module';
import { SurveyAnswerModule } from '@app/api/survey/survey-answer/survey-answer.module';
import { BalanceAnswerModule } from '@app/api/balance/balance-answer/balance-answer.module';
import { SurveyResultModule } from '@app/api/survey/survey-result/survey-result.module';
import { BalanceQuestionModule } from '@app/api/balance/balance-question/balance-question.module';

export const modules = [
  SurveyQuestionModule,
  SurveyAnswerModule,
  SurveyResultModule,
  BalanceAnswerModule,
  BalanceQuestionModule,
];
