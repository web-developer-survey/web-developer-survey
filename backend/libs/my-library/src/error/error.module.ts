import { Global, Module } from '@nestjs/common';
import {ErrorService} from "@app/my-library/error/error.service";

@Global()
@Module({
  providers: [ErrorService],
  exports: [ErrorService]
})
export class ErrorModule {}
