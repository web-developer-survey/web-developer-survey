import { PartialType } from '@nestjs/swagger';
import { CreateSurveyAnswerDto } from '@app/api/survey/survey-answer/dto/create-survey-answer.dto';

export class UpdateSurveyAnswerDto extends PartialType(CreateSurveyAnswerDto) {}
