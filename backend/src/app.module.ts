import { Module } from '@nestjs/common';
import { MyLibraryModule } from '@app/my-library';
import { AppController } from '@app/api/app.controller';
import { AppService } from '@app/api/app.service';
import { SurveyQuestionModule } from '@app/api/survey/survey-question/survey-question.module';
import { SurveyAnswerModule } from '@app/api/survey/survey-answer/survey-answer.module';
import { BalanceAnswerModule } from '@app/api/balance/balance-answer/balance-answer.module';
import { SurveyResultModule } from './survey/survey-result/survey-result.module';
import { BalanceQuestionModule } from '@app/api/balance/balance-question/balance-question.module';
import { ErrorFeature } from '@app/my-library/models/error/error.schema';
import { APP_FILTER } from '@nestjs/core';
import { GlobalFilter } from '@app/my-library/global-filter';

@Module({
  imports: [
    ErrorFeature,
    MyLibraryModule,
    SurveyQuestionModule,
    SurveyAnswerModule,
    BalanceAnswerModule,
    SurveyResultModule,
    BalanceQuestionModule,
  ],
  controllers: [AppController],
  providers: [
    AppService,
    {
      useClass: GlobalFilter,
      provide: APP_FILTER,
    },
  ],
})
export class AppModule {}
