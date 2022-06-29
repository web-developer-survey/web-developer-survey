import { CreateSurveyAnswerDto, UpdateSurveyAnswerDto } from '@app/api/survey/survey-answer/dto';
import { SurveyAnswerRepository } from '@app/api/survey/survey-answer/survey-answer.repository';
import { ErrorService } from '@app/my-library/error/error.service';
import { ErrorMessage } from '@app/my-library/error/message-enum';
import { Injectable } from '@nestjs/common';

@Injectable()
export class SurveyAnswerService {
  constructor(private surveyAnswerRepo: SurveyAnswerRepository, private errorService: ErrorService) {}

  async create(createSurveyAnswerDto: CreateSurveyAnswerDto) {
    try {
      await this.surveyAnswerRepo.create(createSurveyAnswerDto);
    } catch (e) {
      this.errorService.setCustomMessage(e, ErrorMessage.Survey.CREATE);
    }

    return {
      result: true,
      message: 'Success',
    };
  }

  findAll() {
    return `This action returns all surveyAnswer`;
  }

  findOne(id: number) {
    return `This action returns a #${id} surveyAnswer`;
  }

  async update(id: number, updateSurveyAnswerDto: UpdateSurveyAnswerDto) {
    try {
      await this.surveyAnswerRepo.update(1, updateSurveyAnswerDto);
    } catch (e) {
      this.errorService.setCustomMessage(e, ErrorMessage.Survey.CREATE);
    }

    return {
      result: true,
      message: 'Success',
    };
  }

  remove(id: number) {
    return `This action removes a #${id} surveyAnswer`;
  }
}
