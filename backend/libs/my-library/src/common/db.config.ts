import { ConfigModule, ConfigService } from '@nestjs/config';

require('dotenv').config({
  path: '../.env',
});
export const uri: string = process.env.uri;

export const dbInfo = {
  SURVEY: 'SURVEY',
};

export const dbOption = {
  imports: [ConfigModule],
  connectionName: dbInfo.SURVEY,
  useFactory: () => ({
    uri: uri,
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }),
  inject: [ConfigService],
};
