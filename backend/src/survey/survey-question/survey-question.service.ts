import { Injectable } from '@nestjs/common';
import { CreateSurveyQuestionDto } from './dto/create-survey-question.dto';
import { UpdateSurveyQuestionDto } from './dto/update-survey-question.dto';

@Injectable()
export class SurveyQuestionService {
  create(createSurveyQuestionDto: CreateSurveyQuestionDto) {
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
