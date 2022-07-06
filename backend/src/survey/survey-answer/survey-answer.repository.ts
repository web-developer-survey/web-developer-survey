import { Injectable } from '@nestjs/common';
import { CreateSurveyAnswerDto } from '@app/api/survey/survey-answer/dto/create-survey-answer.dto';
import { UpdateSurveyAnswerDto } from '@app/api/survey/survey-answer/dto/update-survey-answer.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { AnswerSurveySchema } from '@app/my-library/models/survey/answer.survey.schema';

@Injectable()
export class SurveyAnswerRepository {
  constructor(@InjectModel(AnswerSurveySchema.name) private answerSurveyModel: Model<AnswerSurveySchema>) {}

  async create(createSurveyAnswerDto: CreateSurveyAnswerDto) {
    new this.answerSurveyModel({
      _id: 'test1',
      UID: 'TEST1',
      surveyId: 'test111',
      accessInfo: { userIp: 'test', userAgent: 'test' },
      data: [],
      lastQuestion: 'Q1',
      isCompleteBonus: false,
      isCompleteMain: false,
    }).save();

    const isUser = false;
    if (isUser) throw new Error('User is not exist');

    return 'This action adds a new surveyAnswer';
  }

  findAll() {
    return `This action returns all surveyAnswer`;
  }

  findOne(id: number) {
    return `This action returns a #${id} surveyAnswer`;
  }

  async update(id: number, updateSurveyAnswerDto: UpdateSurveyAnswerDto) {
    //TODO: filter -> UID
    const $filter = {
      _id: 'test1',
    };

    //TODO: DATA PATCH
    const $set = {
      $set: {
        UID: '1',
      },
    };
    await this.answerSurveyModel.updateOne($filter, $set);

    return `This action updates a #${id} surveyAnswer`;
  }

  remove(id: number) {
    return `This action removes a #${id} surveyAnswer`;
  }
}
