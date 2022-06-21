import { Injectable } from '@nestjs/common';

@Injectable()
export class ErrorService {
  setCustomMessage(e: any,message: string): void{
    e.customMessage = message
    throw e
  }
}
