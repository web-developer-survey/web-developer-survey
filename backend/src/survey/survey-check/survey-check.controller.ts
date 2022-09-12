import { Body, Controller, Get, Post } from '@nestjs/common';
import { SurveyCheckService } from './survey-check.service';
import { CreateSurveyCheckDto } from './dto/create-survey-check.dto';

@Controller('/survey')
export class SurveyCheckController {
  constructor(private readonly surveyCheckService: SurveyCheckService) {}

  @Post('/check')
  create(@Body() createSurveyCheckDto: CreateSurveyCheckDto) {
    return this.surveyCheckService.create(createSurveyCheckDto);
  }

  @Get('/check')
  findAll() {
    console.log('check-create');
    return this.surveyCheckService.findAll();
  }
}
