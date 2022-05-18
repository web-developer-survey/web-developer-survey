import { CollectionInfo, createFeature, DB_NAME } from '@app/my-library/common/db.config';
import { AsyncModelFactory, MongooseModule, Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types, ObjectId } from 'mongoose';

@Schema({ collection: CollectionInfo.SURVEY })
export class SurveySchema extends Document {
  @Prop({ required: true, type: String })
  _id: string;
}

export const surveyFeature = createFeature(SurveySchema);
