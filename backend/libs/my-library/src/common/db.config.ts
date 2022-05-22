import { ConfigModule, ConfigService } from '@nestjs/config';
import { DynamicModule, Type } from '@nestjs/common';
import { AsyncModelFactory, MongooseModule, SchemaFactory } from '@nestjs/mongoose';

require('dotenv').config({
  path: '../.env',
});

export const uri: string = process.env.uri;

export const enum DB_NAME {
  DevSurvey = 'WebDevSurvey',
  DevBalance = 'DevBalance',
}

export const enum CollectionInfo {
  SURVEY = 'Survey',
  ANSWER = 'ANSWER',
  BALANCE_SURVEY = 'SurveyBalance',
  BALANCE_ANSWER = 'SurveyAnswer',
}

export const enum WebBalanceCollectionInfo {
  QUESTION = 'Question',
}

export const dbSurveyOption = {
  imports: [ConfigModule],
  connectionName: DB_NAME.DevSurvey,
  useFactory: () => ({
    uri: uri,
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }),
  inject: [ConfigService],
};

export function createFeature<TClass extends any>(target: Type<TClass>): DynamicModule {
  const targetSchema = SchemaFactory.createForClass(target);
  const targetFactory: AsyncModelFactory = {
    name: target.name,
    useFactory: () => {
      return targetSchema;
    },
  };
  const modelFactory: AsyncModelFactory[] = [targetFactory];
  return MongooseModule.forFeatureAsync(modelFactory, DB_NAME.DevSurvey);
}
