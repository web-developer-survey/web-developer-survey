import { Module } from '@nestjs/common';
import { MyLibraryModule } from '@app/my-library';
import { AppController } from '@app/api/app.controller';
import { AppService } from '@app/api/app.service';
import { ErrorFeature } from '@app/my-library/models/error/error.schema';
import { APP_FILTER } from '@nestjs/core';
import { GlobalFilter } from '@app/my-library/global-filter';
import { modules } from '@app/my-library/common/app.modules';

@Module({
  imports: [MyLibraryModule, ErrorFeature, ...modules],
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
