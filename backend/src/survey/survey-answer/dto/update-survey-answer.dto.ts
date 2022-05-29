import { PartialType } from '@nestjs/swagger';
import { CreateSurveyAnswerDto } from './create-survey-answer.dto';

export class UpdateSurveyAnswerDto extends PartialType(CreateSurveyAnswerDto) {}
