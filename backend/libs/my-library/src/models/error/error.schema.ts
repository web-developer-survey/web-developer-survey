import { MongooseModule, Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { CollectionInfo, createModule, DB_NAME } from '@app/my-library/common/db.config';
import { QuestionSurveySchema } from '@app/my-library/models/survey/question.survey.schema';

@Schema({ collection: CollectionInfo.ERROR })
export class ErrorSchema extends Document {
  @Prop({ required: true, default: 'default' })
  status: string;

  @Prop({ required: true, default: 'message' })
  message: string;

  @Prop({ required: true, default: 'error' })
  error: string;

  @Prop({ required: false })
  frontLink: string;

  @Prop({ required: false })
  backLink: string;

  @Prop({ required: false, default: new Date() })
  createDate: Date;
}

export const ErrorFeature = createModule(ErrorSchema);
