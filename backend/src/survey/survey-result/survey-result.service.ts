import { Injectable } from '@nestjs/common';
import { CreateSurveyResultDto } from './dto/create-survey-result.dto';
import { UpdateSurveyResultDto } from './dto/update-survey-result.dto';

@Injectable()
export class SurveyResultService {
  create(createSurveyResultDto: CreateSurveyResultDto) {
    return 'This action adds a new surveyResult';
  }

  findAll() {
    return `This action returns all surveyResult`;
  }

  findOne(id: number) {
    return `This action returns a #${id} surveyResult`;
  }

  update(id: number, updateSurveyResultDto: UpdateSurveyResultDto) {
    return `This action updates a #${id} surveyResult`;
  }

  remove(id: number) {
    return `This action removes a #${id} surveyResult`;
  }
}
