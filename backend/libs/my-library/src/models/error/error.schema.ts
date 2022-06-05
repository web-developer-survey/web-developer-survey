import { Prop, Schema } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { CollectionInfo, createFeature } from '@app/my-library/common/db.config';

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

export const ErrorFeature = createFeature(ErrorSchema);
