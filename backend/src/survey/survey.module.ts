import { Module } from '@nestjs/common';
import { SurveyService } from './survey.service';
import { SurveyController } from './survey.controller';
import { surveyFeature } from '@app/my-library/models/survey/entities/survey.schema';

@Module({
  imports: [surveyFeature],
  controllers: [SurveyController],
  providers: [SurveyService],
  exports: [SurveyService],
})
export class SurveyModule {}
