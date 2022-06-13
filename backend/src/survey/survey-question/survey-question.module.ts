import { Module } from '@nestjs/common';
import { SurveyQuestionService } from './survey-question.service';
import { SurveyQuestionController } from './survey-question.controller';
import { QuestionFeature } from '@app/my-library/models/survey/question.survey.schema';

@Module({
  imports: [QuestionFeature],
  controllers: [SurveyQuestionController],
  providers: [SurveyQuestionService],
})
export class SurveyQuestionModule {}
