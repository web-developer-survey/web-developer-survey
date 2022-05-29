import { PartialType } from '@nestjs/swagger';
import { CreateBalanceQuestionDto } from './create-balance-question.dto';

export class UpdateBalanceQuestionDto extends PartialType(CreateBalanceQuestionDto) {}
