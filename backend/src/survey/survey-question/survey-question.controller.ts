import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { SurveyQuestionService } from './survey-question.service';
import { UpdateSurveyQuestionDto } from './dto/update-survey-question.dto';

@Controller('/survey/question')
export class SurveyQuestionController {
  constructor(private readonly surveyQuestionService: SurveyQuestionService) {}

  /**
   * 질문 넣기용
   * @param createSurveyQuestionDto
   */

  @Post()
  create(@Body() createSurveyQuestionDto: any) {
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
