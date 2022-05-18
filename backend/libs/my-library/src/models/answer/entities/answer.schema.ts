import { CollectionInfo, createFeature } from '@app/my-library/common/db.config';
import { Prop, Schema } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema({ collection: CollectionInfo.ANSWER })
export class AnswerSchema extends Document {
  @Prop({ required: true, type: String })
  _id: string;

  // 참고용
  // @Prop({enum: QUESTION_TYPE, required: true, type: QUESTION_TYPE })
  // TYPE: QUESTION_TYPE;
  // @Prop({enum: QUESTION_STATUS, required: true, type: QUESTION_STATUS })
  // STATUS: QUESTION_STATUS;
}

export const answerFactory = createFeature(AnswerSchema);
