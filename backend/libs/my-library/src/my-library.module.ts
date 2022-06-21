import { Module } from '@nestjs/common';
import { MyLibraryService } from './my-library.service';
import { MongooseModule } from '@nestjs/mongoose';
import { dbSurveyOption } from '@app/my-library/common/db.config';
import {ConfigModule, ConfigService} from "@nestjs/config";
import { ErrorModule } from './error/error.module';

@Module({
  imports: [
    MongooseModule.forRootAsync(dbSurveyOption),
    ErrorModule,
    //#TODO 추후 추가
    // ThrottlerModule.forRootAsync({
    //   imports: [ConfigModule],
    //   inject: [ConfigService],
    //   useFactory: (config: ConfigService) => ({
    //     ttl: 3, // 보호되는 애플리케이션 경로에 대한 , TTL (Time to Live)
    //     limit: 25, //최대 요청 수에 대한 전역 옵션
    //   }),
    // }),
  ],
  providers: [MyLibraryService,
    // {
    //   provide: APP_GUARD,
    //   useClass: ThrottlerGuard,
    // },
  ],
  exports: [MyLibraryService],
})
export class MyLibraryModule {}
