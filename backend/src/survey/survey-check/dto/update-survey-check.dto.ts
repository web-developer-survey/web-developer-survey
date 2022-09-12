import { PartialType } from '@nestjs/swagger';
import { CreateSurveyCheckDto } from './create-survey-check.dto';

export class UpdateSurveyCheckDto extends PartialType(CreateSurveyCheckDto) {}
