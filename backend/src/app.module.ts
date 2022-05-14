import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SurveyModule } from './survey/survey.module';
import { QuestionModule } from './question/question.module';

@Module({
  imports: [SurveyModule, QuestionModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
