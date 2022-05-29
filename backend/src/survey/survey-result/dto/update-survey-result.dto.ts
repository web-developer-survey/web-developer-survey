import { PartialType } from '@nestjs/swagger';
import { CreateSurveyResultDto } from './create-survey-result.dto';

export class UpdateSurveyResultDto extends PartialType(CreateSurveyResultDto) {}
