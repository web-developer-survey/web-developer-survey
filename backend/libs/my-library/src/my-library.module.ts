import { Module } from '@nestjs/common';
import { MyLibraryService } from './my-library.service';
import { MongooseModule } from '@nestjs/mongoose';
import { dbSurveyOption } from '@app/my-library/common/db.config';
import { ThrottlerGuard, ThrottlerModule } from '@nestjs/throttler';
import {ConfigModule, ConfigService} from "@nestjs/config";

@Module({
  imports: [
    MongooseModule.forRootAsync(dbSurveyOption),
    ThrottlerModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (config: ConfigService) => ({
        ttl: 3, // 보호되는 애플리케이션 경로에 대한 , TTL (Time to Live)
        limit: 25, //최대 요청 수에 대한 전역 옵션
      }),
    }),
  ],
  providers: [MyLibraryService],
  exports: [MyLibraryService],
})
export class MyLibraryModule {}
