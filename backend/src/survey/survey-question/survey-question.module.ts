import { Module } from '@nestjs/common';
import { SurveyQuestionService } from './survey-question.service';
import { SurveyQuestionController } from './survey-question.controller';

@Module({
  controllers: [SurveyQuestionController],
  providers: [SurveyQuestionService]
})
export class SurveyQuestionModule {}
