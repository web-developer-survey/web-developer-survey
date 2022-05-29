import { Module } from '@nestjs/common';
import { SurveyResultService } from './survey-result.service';
import { SurveyResultController } from './survey-result.controller';

@Module({
  controllers: [SurveyResultController],
  providers: [SurveyResultService]
})
export class SurveyResultModule {}
