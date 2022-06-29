import { CreateSurveyAnswerDto, UpdateSurveyAnswerDto } from '@app/api/survey/survey-answer/dto';
import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { SurveyAnswerService } from './survey-answer.service';

//#TODO 통합 모듈 생성할 것
@Controller('survey/answer')
export class SurveyAnswerController {
  constructor(private readonly surveyAnswerService: SurveyAnswerService) {}

  @Post()
  async create(@Body() createSurveyAnswerDto: CreateSurveyAnswerDto) {
    return this.surveyAnswerService.create(createSurveyAnswerDto);
  }

  @Get()
  findAll() {
    return this.surveyAnswerService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.surveyAnswerService.findOne(+id);
  }

  @Patch(':id')
  async update(@Param('id') id: string, @Body() updateSurveyAnswerDto: UpdateSurveyAnswerDto) {
    return this.surveyAnswerService.update(+id, updateSurveyAnswerDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.surveyAnswerService.remove(+id);
  }
}
