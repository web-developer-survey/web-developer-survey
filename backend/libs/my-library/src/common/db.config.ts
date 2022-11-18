import { ConfigModule, ConfigService } from '@nestjs/config';
import { DynamicModule, Type } from '@nestjs/common';
import { AsyncModelFactory, MongooseModule, SchemaFactory } from '@nestjs/mongoose';
import { ModelDefinition } from '@nestjs/mongoose/dist/interfaces';

require('dotenv').config({
  path: '.env',
});

export const uri: string = process.env.uri;

export const enum DB_NAME {
  DevSurvey = 'WebDevSurvey',
  DevBalance = 'DevBalance',
}

export const enum CollectionInfo {
  QUESTION_SURVEY = 'SurveyQuestion',
  BALANCE_SURVEY = 'BalanceQuestion',

  QUESTION_ANSWER = 'SurveyAnswer',
  BALANCE_ANSWER = 'BalanceAnswer',

  ERROR = 'Error',
}

export const enum WebBalanceCollectionInfo {
  QUESTION = 'Question',
}

export const dbSurveyOption = {
  imports: [ConfigModule],
  useFactory: () => ({
    uri: uri,
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }),
  inject: [ConfigService],
};

export function createModule<TClass>(target: Type<TClass>): DynamicModule {
  const targetSchema = SchemaFactory.createForClass(target);
  const targetModel: ModelDefinition = {
    name: target.name,
    schema: targetSchema,
  };
  const targetModelInit: ModelDefinition[] = [targetModel];
  return MongooseModule.forFeature(targetModelInit);
}
