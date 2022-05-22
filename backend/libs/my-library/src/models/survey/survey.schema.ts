import { CollectionInfo, createFeature } from '@app/my-library/common/db.config';
import { Prop, Schema } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema({ collection: CollectionInfo.SURVEY })
export class SurveySchema extends Document {
  @Prop({ required: true, type: String })
  _id: string;
}

export const surveyFeature = createFeature(SurveySchema);
