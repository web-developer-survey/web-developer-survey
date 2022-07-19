import { Module } from '@nestjs/common';
import { MyLibraryService } from './my-library.service';
import { MongooseModule } from '@nestjs/mongoose';
import { dbSurveyOption } from '@app/my-library/common/db.config';
import { ErrorModule } from '@app/my-library/error/error.module';

console.log(dbSurveyOption);

@Module({
  imports: [MongooseModule.forRootAsync(dbSurveyOption), ErrorModule],
  providers: [MyLibraryService],
  exports: [MyLibraryService],
})
export class MyLibraryModule {}
