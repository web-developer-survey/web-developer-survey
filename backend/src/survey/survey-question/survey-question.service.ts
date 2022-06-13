import { Injectable } from '@nestjs/common';
import { UpdateSurveyQuestionDto } from './dto/update-survey-question.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { QuestionSurveySchema } from '@app/my-library/models/survey/question.survey.schema';

@Injectable()
export class SurveyQuestionService {
  constructor(@InjectModel(QuestionSurveySchema.name) private questionSurveySchema: Model<QuestionSurveySchema>) {}

  async create(createSurveyQuestionDto: any) {
    // await this.questionSurveySchema.insertMany(createSurveyQuestionDto);
    return 'This action adds a new surveyQuestion';
  }

  findAll() {
    return `This action returns all surveyQuestion`;
  }

  findOne(id: number) {
    return `This action returns a #${id} surveyQuestion`;
  }

  update(id: number, updateSurveyQuestionDto: UpdateSurveyQuestionDto) {
    return `This action updates a #${id} surveyQuestion`;
  }

  remove(id: number) {
    return `This action removes a #${id} surveyQuestion`;
  }
}
