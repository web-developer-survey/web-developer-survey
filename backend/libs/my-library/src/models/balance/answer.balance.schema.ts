import { Prop, Schema } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { CollectionInfo, createFeature } from '@app/my-library/common/db.config';

@Schema({ collection: CollectionInfo.BALANCE_ANSWER })
export class AnswerBalanceSchema extends Document {
  @Prop({ required: false })
  _id: string;

  @Prop({ required: false, type: Number })
  idx: number;

  @Prop({ required: false, type: Number })
  value: number;

  @Prop({ required: false, type: String })
  userIp: string;

  @Prop({ required: false, type: String })
  userAgent: string;
}

export const AnswerBalanceFactory = createFeature(AnswerBalanceSchema);
