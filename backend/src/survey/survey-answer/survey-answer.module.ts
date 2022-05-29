import { Module } from '@nestjs/common';
import { SurveyAnswerService } from './survey-answer.service';
import { SurveyAnswerController } from './survey-answer.controller';

@Module({
  controllers: [SurveyAnswerController],
  providers: [SurveyAnswerService]
})
export class SurveyAnswerModule {}
