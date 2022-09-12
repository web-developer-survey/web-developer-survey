import { Module } from '@nestjs/common';
import { SurveyCheckService } from './survey-check.service';
import { SurveyCheckController } from './survey-check.controller';
import { AuthModule } from '@app/my-library/auth/auth.module';

@Module({
  imports: [AuthModule],
  controllers: [SurveyCheckController],
  providers: [SurveyCheckService],
})
export class SurveyCheckModule {}
