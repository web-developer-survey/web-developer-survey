import { PartialType } from '@nestjs/swagger';
import { CreateBalanceAnswerDto } from './create-balance-answer.dto';

export class UpdateBalanceAnswerDto extends PartialType(CreateBalanceAnswerDto) {}
