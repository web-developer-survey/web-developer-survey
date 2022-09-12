import { Injectable } from '@nestjs/common';
import { CreateSurveyCheckDto } from './dto/create-survey-check.dto';
import { UpdateSurveyCheckDto } from './dto/update-survey-check.dto';
import { AuthService } from '@app/my-library/auth/auth.service';

@Injectable()
export class SurveyCheckService {
  constructor(private authService: AuthService) {}

  create({ type }: CreateSurveyCheckDto) {
    return this.authService.createSurveyToken(type);
  }

  findAll() {
    return `This action returns all surveyCheck`;
  }

  findOne(id: number) {
    return `This action returns a #${id} surveyCheck`;
  }

  update(id: number, updateSurveyCheckDto: UpdateSurveyCheckDto) {
    return `This action updates a #${id} surveyCheck`;
  }

  remove(id: number) {
    return `This action removes a #${id} surveyCheck`;
  }
}
