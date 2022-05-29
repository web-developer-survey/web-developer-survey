import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { SurveyResultService } from './survey-result.service';
import { CreateSurveyResultDto } from './dto/create-survey-result.dto';
import { UpdateSurveyResultDto } from './dto/update-survey-result.dto';

@Controller('survey-result')
export class SurveyResultController {
  constructor(private readonly surveyResultService: SurveyResultService) {}

  @Post()
  create(@Body() createSurveyResultDto: CreateSurveyResultDto) {
    return this.surveyResultService.create(createSurveyResultDto);
  }

  @Get()
  findAll() {
    return this.surveyResultService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.surveyResultService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateSurveyResultDto: UpdateSurveyResultDto) {
    return this.surveyResultService.update(+id, updateSurveyResultDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.surveyResultService.remove(+id);
  }
}
