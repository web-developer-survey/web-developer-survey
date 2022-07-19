import { CollectionInfo, createFeature } from '@app/my-library/common/db.config';
import { Prop, Schema } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema({ collection: CollectionInfo.BALANCE_SURVEY })
export class QuestionBalanceSchema extends Document {
  @Prop({ required: true, type: String })
  _id: string;

  @Prop({ required: false, type: Number })
  idx: number;

  @Prop({ required: false, type: String })
  title: number;

  @Prop({ required: false, type: String })
  labelA: number;

  @Prop({ required: false, type: String })
  labelB: number;

  @Prop({ required: false, type: Boolean })
  isUse: boolean;
}

export const QuestionBalanceFeature = createFeature(QuestionBalanceSchema);
