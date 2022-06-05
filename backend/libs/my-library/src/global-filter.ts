import { ArgumentsHost, Catch, ExceptionFilter, HttpException, HttpStatus } from '@nestjs/common';
import { Request, Response } from 'express';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { ErrorSchema } from '@app/my-library/models/error/error.schema';

@Catch()
export class GlobalFilter implements ExceptionFilter {
  constructor(@InjectModel(ErrorSchema.name) private readonly errorModel: Model<ErrorSchema>) {}

  async catch(exception, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse<Response>();
    const request = ctx.getRequest<Request>();

    const { status, message } = this.getStatusInfo(exception);
    response.status(status).json({
      result: false,
      message,
      statusCode: status,
      timestamp: new Date().toISOString(),
      path: request.url,
    });

    if (status === HttpStatus.INTERNAL_SERVER_ERROR) {
      exception.response = {
        statusCode: status,
        message,
        error: HttpStatus[status],
      };
    }
    await this.errorLogCreate(exception, request);
  }

  async errorLogCreate(exception, request): Promise<void> {
    let message = exception.response.message || '';
    const status = exception.response.statusCode || '';
    const error = exception.response.error || '';
    const frontLink = request.headers.referer || '';
    const backLink = request.originalUrl || '';

    if (Array.isArray(message)) message = message.join(', ');
    const saveOption = {
      status,
      message,
      error,
      frontLink,
      backLink,
    };

    await new this.errorModel(saveOption).save();
  }

  getStatusInfo(exception) {
    const status = exception instanceof HttpException ? exception.getStatus() : HttpStatus.INTERNAL_SERVER_ERROR;
    let message = '';

    switch (status) {
      case 401: {
        message = '토큰이 만료되었습니다.';
        break;
      }
      case 404: {
        message = '유효하지 않은 요청입니다.';
        break;
      }
      default: {
        message = exception.customMessage || exception.message;
        break;
      }
    }

    return {
      status,
      message,
    };
  }
}
