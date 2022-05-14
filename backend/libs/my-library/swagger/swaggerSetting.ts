import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

export const config = new DocumentBuilder()
  .setTitle('survey-apis')
  .setDescription('The web-developer-survey API description')
  .setVersion('1.0')
  .addTag('doc')
  .build();
