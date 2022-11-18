import { Injectable } from '@nestjs/common';
import { UpdateSurveyQuestionDto } from './dto/update-survey-question.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Model, Types } from 'mongoose';
import { QuestionSurveySchema } from '@app/my-library/models/survey/question.survey.schema';
import { CreateSurveyQuestionDto } from '@app/api/survey/survey-question/dto/create-survey-question.dto';

@Injectable()
export class SurveyQuestionService {
  constructor(@InjectModel(QuestionSurveySchema.name) private questionSurveyRepository: Model<QuestionSurveySchema>) {}

  async create(createSurveyQuestionDto: any) {
    // await this.questionSurveySchema.insertMany(createSurveyQuestionDto);
    return 'This action adds a new surveyQuestion';
  }

  async createOne(createQuestionDto: UpdateSurveyQuestionDto) {
    try {
      await this.questionSurveyRepository.create({
        _id: new Types.ObjectId(),
        ...createQuestionDto,
      });
    } catch (e) {
      console.log(e);
    }
  }

  async findAll() {
    return await this.questionSurveyRepository.find().exec();
  }

  async findOne(questionName: string) {
    const $match = this.questionNameMatch(questionName);
    return this.questionSurveyRepository.findOne($match);
  }

  async update(questionName: string, updateQuestionInfo: UpdateSurveyQuestionDto) {
    const question = await this.findOne(questionName);
    if (question) {
      const $match = this.questionNameMatch(questionName);
      await this.questionSurveyRepository.updateOne($match, updateQuestionInfo).exec();
    } else {
      await this.createOne(updateQuestionInfo);
    }
  }

  remove(id: number) {
    return `This action removes a #${id} surveyQuestion`;
  }

  private questionNameMatch = (questionName: string) => {
    return { name: questionName };
  };
}
