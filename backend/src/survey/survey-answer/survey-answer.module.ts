import { Module } from '@nestjs/common';
import { SurveyAnswerService } from './survey-answer.service';
import { SurveyAnswerController } from './survey-answer.controller';
import { answerFactory } from '@app/my-library/models/survey/answer.survey.schema';
import { SurveyAnswerRepository } from '@app/api/survey/survey-answer/survey-answer.repository';

@Module({
  imports: [answerFactory],
  controllers: [SurveyAnswerController],
  providers: [SurveyAnswerService, SurveyAnswerRepository],
})
export class SurveyAnswerModule {}
