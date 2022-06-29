import { CollectionInfo, createFeature } from '@app/my-library/common/db.config';
import { IpInfo } from '@app/my-library/interface/decorator/ip-info';
import { Survey } from '@app/my-library/interface/survey/Survey';
import { Prop, Schema } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema({ collection: CollectionInfo.QUESTION_ANSWER })
export class AnswerSurveySchema extends Document {
  @Prop({ required: true, type: String })
  _id: string;

  @Prop({ required: true, type: String })
  UID: string;

  @Prop({ required: true, type: String })
  surveyId: string;

  @Prop({ required: true, type: IpInfo })
  accessInfo: IpInfo;

  @Prop({ required: true, type: Array })
  data: Survey.Answer[];

  @Prop({ required: true, type: String })
  lastQuestion: string;

  @Prop({ required: true, type: Boolean })
  isCompleteMain: boolean;

  @Prop({ required: true, type: Boolean })
  isCompleteBonus: boolean;

  @Prop({ required: false, default: new Date() })
  updateAt: Date;

  @Prop({ required: false, default: new Date() })
  createAt: Date;
}

export const answerFactory = createFeature(AnswerSurveySchema);
