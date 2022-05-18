import { Module } from '@nestjs/common';
import { MyLibraryService } from './my-library.service';
import { MongooseModule } from '@nestjs/mongoose';
import { dbOption } from '@app/my-library/common/db.config';

@Module({
  imports: [MongooseModule.forRootAsync(dbOption)],
  providers: [MyLibraryService],
  exports: [MyLibraryService],
})
export class MyLibraryModule {}
