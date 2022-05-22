import { Module } from '@nestjs/common';
import {MyLibraryModule} from "@app/my-library";
import {SurveyModule} from "@app/api/survey/survey.module";
import {AppController} from "@app/api/app.controller";
import {AppService} from "@app/api/app.service";
import { BalanceModule } from './balance/balance.module';

@Module({
  imports: [SurveyModule,MyLibraryModule, BalanceModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
