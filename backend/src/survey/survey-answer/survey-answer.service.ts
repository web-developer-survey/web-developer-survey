import { Injectable } from '@nestjs/common';
import { CreateSurveyAnswerDto } from './dto/create-survey-answer.dto';
import { UpdateSurveyAnswerDto } from './dto/update-survey-answer.dto';
import { SurveyAnswerRepository } from '@app/api/survey/survey-answer/survey-answer.repository';

@Injectable()
export class SurveyAnswerService {
  constructor(private surveyAnswerRepo: SurveyAnswerRepository) {}

  create(createSurveyAnswerDto: CreateSurveyAnswerDto) {
    return this.surveyAnswerRepo.create(createSurveyAnswerDto);
  }

  findAll() {
    return `This action returns all surveyAnswer`;
  }

  findOne(id: number) {
    return `This action returns a #${id} surveyAnswer`;
  }

  update(id: number, updateSurveyAnswerDto: UpdateSurveyAnswerDto) {
    return `This action updates a #${id} surveyAnswer`;
  }

  remove(id: number) {
    return `This action removes a #${id} surveyAnswer`;
  }
}
