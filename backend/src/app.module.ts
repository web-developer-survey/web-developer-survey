import { Module } from '@nestjs/common';
import {MyLibraryModule} from "@app/my-library";
import {QuestionModule} from "@app/api/question/question.module";
import {SurveyModule} from "@app/api/survey/survey.module";
import {AppController} from "@app/api/app.controller";
import {AppService} from "@app/api/app.service";

@Module({
  imports: [SurveyModule, QuestionModule,MyLibraryModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
