import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { SurveyAnswerService } from './survey-answer.service';
import { CreateSurveyAnswerDto } from './dto/create-survey-answer.dto';
import { UpdateSurveyAnswerDto } from './dto/update-survey-answer.dto';

@Controller('survey-answer')
export class SurveyAnswerController {
  constructor(private readonly surveyAnswerService: SurveyAnswerService) {}

  @Post()
  create(@Body() createSurveyAnswerDto: CreateSurveyAnswerDto) {
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
  update(@Param('id') id: string, @Body() updateSurveyAnswerDto: UpdateSurveyAnswerDto) {
    return this.surveyAnswerService.update(+id, updateSurveyAnswerDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.surveyAnswerService.remove(+id);
  }
}
