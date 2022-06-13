import { CollectionInfo, createFeature } from '@app/my-library/common/db.config';
import { Prop, Schema } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export interface Logic {
  LName: string;
  LValue: number[];
}

export interface ViewInfo {
  label: string;
  value: number;
  addText: boolean;
  isAllDisable: boolean;
}

@Schema({ collection: CollectionInfo.QUESTION_SURVEY })
export class QuestionSurveySchema extends Document {
  // @Prop({ required: false, type: String })
  // _id: string;

  @Prop({ required: false, default: 1, type: Number })
  surveyId: number;

  @Prop({ required: false, type: Number })
  step: number;

  @Prop({ required: false, type: Number })
  maxStep: number;

  @Prop({ required: false, type: Number })
  seq: number;

  @Prop({ required: false, type: String })
  title: string;

  @Prop({ required: false, type: String })
  type: string;

  @Prop({ required: false, type: String })
  name: string;

  @Prop({ required: false })
  viewInfo: ViewInfo[];

  @Prop({ required: false, type: String })
  desc: string;

  @Prop({ required: false, type: Number })
  maxValue: number;

  @Prop({ required: false, type: Number })
  minValue: number;

  @Prop({ required: false })
  showAndLogic: Logic[];

  @Prop({ required: false })
  showOrLogic: Logic[];

  @Prop({ required: false, type: Boolean, default: true })
  isShow: true;
}

export const QuestionFeature = createFeature(QuestionSurveySchema);
