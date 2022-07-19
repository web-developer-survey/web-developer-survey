import { createParamDecorator, ExecutionContext } from '@nestjs/common';

export const IpInfoDeco = createParamDecorator((data: string, ctx: ExecutionContext) => {
  const request = ctx.switchToHttp().getRequest();
  const headers = request.headers;

  const userIp = headers['x-forwarded-for'] || 'none';
  const userAgent = headers['user-agent'] || 'none';

  const customDecorator = {
    userIp,
    userAgent,
  };

  return data ? customDecorator?.[data] : customDecorator;
});
