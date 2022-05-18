import { Injectable } from '@nestjs/common';
import { CreateSurveyDto } from './dto/create-survey.dto';
import { UpdateSurveyDto } from './dto/update-survey.dto';
import { InjectModel } from '@nestjs/mongoose';
import { SurveySchema } from '@app/my-library/models/survey/entities/survey.schema';
import { Model } from 'mongoose';

@Injectable()
export class SurveyService {
  constructor(@InjectModel(SurveySchema.name) private surveyModel: Model<SurveySchema>) {}
  async create(createSurveyDto: CreateSurveyDto) {
    //test
    await new this.surveyModel({ _id: '12' }).save();
    return 'This action adds a new survey';
  }

  findAll() {
    return `This action returns all survey`;
  }

  findOne(id: number) {
    return `This action returns a #${id} survey`;
  }

  update(id: number, updateSurveyDto: UpdateSurveyDto) {
    return `This action updates a #${id} survey`;
  }

  remove(id: number) {
    return `This action removes a #${id} survey`;
  }
}
