import { Module } from '@nestjs/common';
import { MyLibraryModule } from '@app/my-library';
import { AppController } from '@app/api/app.controller';
import { AppService } from '@app/api/app.service';
import { APP_FILTER } from '@nestjs/core';
import { GlobalFilter } from '@app/my-library/global-filter';
import { SurveyCheckModule } from './survey/survey-check/survey-check.module';
import { ErrorSchema, ErrorFeature } from '@app/my-library/models/error/error.schema';
import { modules } from '@app/my-library/common/app.modules';

@Module({
  imports: [MyLibraryModule, ErrorFeature, SurveyCheckModule, ...modules],
  controllers: [AppController],
  providers: [
    AppService,
    {
      useClass: GlobalFilter,
      provide: APP_FILTER,
    },
  ],
})
export class AppModule {}
