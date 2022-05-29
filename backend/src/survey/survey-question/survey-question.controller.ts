import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { SurveyQuestionService } from './survey-question.service';
import { CreateSurveyQuestionDto } from './dto/create-survey-question.dto';
import { UpdateSurveyQuestionDto } from './dto/update-survey-question.dto';

@Controller('survey-question')
export class SurveyQuestionController {
  constructor(private readonly surveyQuestionService: SurveyQuestionService) {}

  @Post()
  create(@Body() createSurveyQuestionDto: CreateSurveyQuestionDto) {
    return this.surveyQuestionService.create(createSurveyQuestionDto);
  }

  @Get()
  findAll() {
    return this.surveyQuestionService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.surveyQuestionService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateSurveyQuestionDto: UpdateSurveyQuestionDto) {
    return this.surveyQuestionService.update(+id, updateSurveyQuestionDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.surveyQuestionService.remove(+id);
  }
}
